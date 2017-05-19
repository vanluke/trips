import {combineEpics} from 'redux-observable';

const initEpic = action$ => action$;

export default combineEpics(
  initEpic,
);
