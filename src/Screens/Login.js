import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Provider,connect} from 'react-redux';
import {createStore,applyMiddleware,combineReducers,bindActionCreators} from 'redux';
import * as todoActions from '../../actions/todoActions';
import * as reducers from '../../reducers/index';
import thunk from 'redux-thunk';
import Login from '../LoginSignup/Login';
import Main from '../Screens/Main';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


class LoginScreen extends Component {
  render() {
    if (this.props.userData.email) {
      return <Main />;
    }

    return  (<Provider store={store}>

                 <Login store={store} /></Provider>);
  }
}

LoginScreen.propTypes = {
  userData: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
    userData: state.userData,
	};
}


export default connect(mapStateToProps)(LoginScreen);
