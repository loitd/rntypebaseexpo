/*  
  STORE: connects ACTIONS that represent what happened and REDUCERS that update the state according to those actions. 
  - Holds applications state
  - Allow access to to state via getState
  - Allow state to be updated via dispatch(action)
  - Register listeners via subscribe(listener)
  - Handles unregistering of listeners
  You have only a single store in Redux application. When you want to split your data handling logic -> reducer composition instead of many stores.
  Example:
  ------------------------------------------------------------------------
  import {addTodo, toggleTodo, setVisibilityFilter} from './actions';
  console.log(store.getState())
  const unsubscribe = store.subscribe(()=> console.log(store.getState()))
  //dispatch some actions
  store.dispatch(addTodo('My job 1'))
  store.dispatch(toggleTodo(0))
  //unsubscribe
  unsubscribe()
  ------------------------------------------------------------------------
  Redux architecture revolves around a strict unidirectional data flow -> all data in an app follows the same lifecycle pattern as here:
  1. You call store.dispatch(action)
  2. Redux STORE calls the REDUCER's function you gave it
  3. The root REDUCER combines the output of multiple reducers into a single state tree
  4. The Redux STORE saves the complete state tree returned by the root REDUCER
  Without MIDDLEWARE Redux STORE only supports SYNCRONOUS DATA FLOW as in this example: everytime an action was dispatched, the state was updated IMMEDIATELY -> need MIDDLEWARE
  PROVIDER: Là COMPONENT chứa nhiều STORE
 */
import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, View } from 'react-native';
import { Container, Text, Button, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './src/reducers';
import CounterContainer from './src/containers/counter';
import AppHeader from './src/components/header';
import AppFooter from './src/components/footer';

const store = createStore(allReducers);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  // Load async
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render(){
    // Wait for app to load data. Show loading screen while loading.
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    // Loading done. Start the app
    return (
      <Container style={{backgroundColor:'#87cefa'}}>
        <Provider store={store}>
          
          <AppHeader />
          
          <Content>
            <CounterContainer/>
          </Content>

          <AppFooter />
        
        </Provider>
      </Container>
    );
  }
}
