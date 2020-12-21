import Axios from 'axios';
import {createLogic} from 'redux-logic';
import {
  GET_DATA_USER_CANCELL,
  GET_DATA_USER_FAILURE,
  GET_DATA_USER_REQUEST,
  GET_DATA_USER_SUCCESS,
} from '../actions';

export const userFetchLogic = createLogic({
  //Logic
  type: GET_DATA_USER_REQUEST,
  cancelType: GET_DATA_USER_CANCELL,
  latest: true,

  async process({action}, dispatch, done) {
    console.log('running logic');
    try {
      const user = await Axios.get(
        `https://jsonplaceholder.typicode.com/users`,
      ).then((res) => res.data);
      console.log(user);

      dispatch({
        type: GET_DATA_USER_SUCCESS,
        payload: user,
      });
      // const mock = {
      //   name: ' Bale',
      //   username: 'Bret',
      //   email: 'Sincere@april.biz',
      //   address: {
      //     street: 'Kulas Light',
      //     suite: 'Apt. 556',
      //     city: 'Gwenborough',
      //     zipcode: '92998-3874',
      //     geo: {
      //       lat: '-37.3159',
      //       lng: '81.1496',
      //     },
      //   },
      //   phone: '1-770-736-8031 x56442',
      //   website: 'hildegard.org',
      //   company: {
      //     name: 'Romaguera-Crona',
      //     catchPhrase: 'Multi-layered client-server neural-net',
      //     bs: 'harness real-time e-markets',
      //   },
      // };
      // const user = await Axios.post(
      //   `https://jsonplaceholder.typicode.com/users`,
      //   mock,
      // ).then((res) => res.data);
      // console.log('create user', user);
      // dispatch({
      //   type: GET_DATA_USER_SUCCESS,
      //   payload: user,
      // });
    } catch (err) {
      dispatch({type: GET_DATA_USER_FAILURE, err});
      console.log(err);
    }
    done();
  },
});
