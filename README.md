# 2019 _ MOVIEDB(19) 

1. `useSelector()` = Allows you to extract data from the Redux store && EQUIVALENT to the mapStateToProps argument to connect , you may call useSelector multiple times within a single function compnent . Each call to useSelector() creates an individual subscription to the Redux store
 Use the shallowEqual function from React-Redux as the equalityFn argument to useSelector(),


 2. `useDispatch()` = This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
 example:
 ```
 import React from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => dispatch({ type: 'increment-counter' })}>
        Increment counter
      </button>
    </div>
  )
}
 ``` 


 3. `useCallback` = use this When passing a callback using dispatch to a child component, it is recommended to memoize it with useCallback, since otherwise child components may render unnecessarily due to the changed reference.  
 example:
 ```
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()
  const incrementCounter = useCallback(
    () => dispatch({ type: 'increment-counter' }),
    [dispatch]
  )

  return (
    <div>
      <span>{value}</span>
      <MyIncrementButton onIncrement={incrementCounter} />
    </div>
  )
}

export const MyIncrementButton = React.memo(({ onIncrement }) => (
  <button onClick={onIncrement}>Increment counter</button>
))
 ```

4. `useStore` = This hook returns a reference to the same Redux store that was passed in to the <Provider> component.

This hook should probably not be used frequently. Prefer useSelector() as your primary choice. However, this may be useful for less common scenarios that do require access to the store, such as replacing reducers.

```
import React from 'react'
import { useStore } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const store = useStore()

  // EXAMPLE ONLY! Do not do this in a real app.
  // The component will not automatically update if the store state changes
  return <div>{store.getState()}</div>
}

```


- [x] Need to refactor single **page** application
- [ ] Update loading variable in reducer
- [x] add styling for modal
- [ ] 
- [ ] ****
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] Add Test later
- [ ] deploy with netlify , update logo and add _redirect 



### API Info
const UPCOMING =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1";

const POPULAR =
  "https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1";

const GENRES =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US";

const NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1";

const TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1";



### Author
- John Benedict Miranda
