import * as Constants from '../constants';

export default (state = {
  isFetching: false,
  message: ""
}, action) => {
  switch (action.type) {
    case Constants.REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });
    case Constants.RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.data.message
      });
    default:
      return state;
  }
};

