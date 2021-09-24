import axios from 'axios'
import {FAIL_USER, LOAD_USER, LOGIN_USER, REGISTER_USER} from "../constants/authType"

// register
export const register = (user, history) => async(dispatch)=> {
    dispatch({type: LOAD_USER})
    try {
        const res = await axios.post('/api/user/signup', user)
        dispatch({type:REGISTER_USER, payload:res.data})
        console.log(res)
        console.log(user)
        history.push('/')
    } catch (error) {
        dispatch({type :FAIL_USER, payload: error.response.data})
    }
}

// login
 export const login = (user) => async(dispatch) => {
     dispatch({type: LOAD_USER})
     try {
        const res = await axios.post('/api/user/signin', user)
        dispatch({type : LOGIN_USER, payload: res.data})
        console.log(res)
     } catch (error) {
        dispatch({type :FAIL_USER, payload: error.response.data})
     }
 }