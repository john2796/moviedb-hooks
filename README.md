# 2019 _ MOVIEDB(19) 


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






### Author
- John Benedict Miranda
