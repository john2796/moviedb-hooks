/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getUpcoming,
  getTopRated,
  getNowPlaying,
  getTopRatedTv,
  getAiringTodayTV,
  getOntheAir,
} from '../store/actions/movieAction';

function Tabs({ children }) {
  const {
    topRated, nowPlaying, upcoming, topRatedTV, airingToday, onAirTV,
  } = useSelector(
    state => state.movieReducer,
  );
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const dispatch = useDispatch();

  const dispatchActionAndSetActiveTab = (tab, state) => {
    // prevent from dispatching/ making request if the length of their array has item in it

    if (topRated.length <= 0 || nowPlaying.length <= 0 || upcoming.length <= 0) {
      if (state === 'upcoming') {
        dispatch(getUpcoming());
      }
      if (state === 'topRated') {
        dispatch(getTopRated());
      }
      if (state === 'nowPlaying') {
        dispatch(getNowPlaying());
      }
    }
    if (topRatedTV.length <= 0 || airingToday.length <= 0 || onAirTV.length <= 0) {
      if (state === 'topRatedTV') {
        dispatch(getTopRatedTv());
      }
      if (state === 'airingToday') {
        dispatch(getAiringTodayTV());
      }
      if (state === 'onAirTV') {
        dispatch(getOntheAir());
      }
    }
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {/* ---------------- Labels --------------------- */}
        {/* loop through the list of children */}
        {children.map((child) => {
          /* grab label from the children prop */
          const { label, state } = child.props;
          /* set default className */
          let className = 'tab-list-item';
          // if the label match with active tab update class/style
          if (activeTab === label) {
            className += ' tab-list-active';
          }
          /* on user click update state with the new label  */
          return (
            <li
              key={label}
              className={className}
              onClick={() => dispatchActionAndSetActiveTab(label, state)}
            >
              {label}
            </li>
          );
        })}
      </ol>

      {/* ---------------- contents goes here --------------------- */}
      <div className="tab-content">
        {/* Map through the tab content list and if the label !== activeTab return nothing else render the children */}
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}
Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
