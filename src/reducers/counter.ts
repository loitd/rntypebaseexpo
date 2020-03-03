/*  REDUCERS
    Lắng nghe các ACTIONS và thực hiện các thay đổi trên các giá trị của STORE. 
    Các ACTIONS chỉ mô tả những gì ĐÃ xảy ra nó KHÔNG thay đổi dữ liệu trên Store.
    In Redux all application state is stored as a simple object -> think of its shape before writing code. Example:
    {
        visibilityFilter: 'SHOWALL',
        todos: [
            {
                title: 'My job 1',
                completed: true
            },
        ]
    }
    A REDUCER is a pure function that takes previous state and an action, then returns the next state
    (previousState, action)=> nextState
    It's called a REDUCER because it's a type of function you would pass to Array.prototype.reducer()
    It's very important to keep reducer stay pure. Example:

    import {VisibilityFilters} from './actions'
    const initState = {
        visibilityFilter: VisibilityFilters.SHOW_ALL,
        todos: []
    }
    function todoapp(state, action){
        switch (action.type){
            case ACTION1:
            default:
                return state;
        }
    }
*/
import {INC, DEC} from '../actions/types';

const counterReducer = (times=0, action)=>{
    switch (action.type){
        case INC:
            return times+action.step;
        case DEC:
            return times-action.step;
        default:
            return times;
    }
};

export default counterReducer;