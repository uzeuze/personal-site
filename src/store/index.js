import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from '../reducers';

//TODO: Add predicate to disable loging in production
const logger = createLogger();

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk, logger),
    autoRehydrate()
  )
);

persistStore(store, { whitelist: ['auth'] });

export default store;
