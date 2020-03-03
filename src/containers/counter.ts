/*  CONTAINERS
    To hook up those presentational components to Redux by creating some CONTAINERS.
    Technically, a CONTAINER component is just a React component that use store.subscribe() to read a part of the Redux state tree and supply PROPS to a presentational component it renders.
    To use connect() function you must define a special function called: 
    - mapStateToProps(): (reading) describe how to transform the current Redux store state into the PROPS you want to pass to a presentational comp
    - mapDispatchToProps(): receives the dispatch() and return callback props that you want to inject into the presentational comp
     */
import {connect} from 'react-redux';
import CounterComponent from '../components/counter';
import {increase, decrease} from '../actions';

const mapStateToProps = (state)=>{
    return {
        times: state.counterReducer ? state.counterReducer : 0
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        onDecrement: (step)=>{
            dispatch(decrease(step))
        },
        onIncrement: (step)=>{
            dispatch(increase(step))
        }
    }
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;