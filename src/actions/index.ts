/*  Defines ACTIONS
    Actions: các khối thông tin (payloads) gửi dữ liệu từ ứng dụng của bạn đến Store. 
    Chúng là nguồn thông tin duy nhất cho Store. 
    Bạn có thể gửi chúng đến Store bằng cách sử dụng store.dispatch(). 
*/
import {INC, DEC} from './types';
export const increase = (step)=>{
    return {
        type: INC,
        step: step,
    }
}

export const decrease = (step)=>{
    return {
        type: DEC,
        step: step,
    }
}