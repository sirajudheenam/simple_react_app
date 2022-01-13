# Add Redux Support to Application

```
yarn add redux react-redux --save

# to fetch some JSON from API then pass it to dispatch
# redux-thunk middleware.

yarn add axios redux-thunk --save

import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'react-thunk';

# to apply middleware (or store enhancers) before dispatch to reducer.
const store = createStore(rootReducer, applyMiddleware(thunk));

```
