import React, { useState } from 'react';

function Tabs({ children, label }) {
  const [activeTab, setActiveTab] = useState([
    {
      activeTab: children.label,
    },
  ]);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ol>
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab activeTab={activeTab} label={label} key={label} onClickHandler={onClickTabItem} />
          );
        })}
      </ol>
      <div>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}

function Tab({ onClickHandler, label, activeTab }) {
  return (
    <li
      className={activeTab === label ? 'tab-list-active' : 'tab-list-item'}
      onClick={() => onClickHandler(label)}
    >
      {label}
    </li>
  );
}

export default Tabs;
