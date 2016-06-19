import * as Constants from '../constants';

export function requestData(){
  return {
    type: Constants.REQUEST_DATA
  };
}

export function receiveData(data) {
  return {
    type: Constants.RECEIVE_DATA,
    data: data
  };
}

