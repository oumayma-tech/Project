import { FAIL_USER, LOAD_USER, LOGIN_USER, REGISTER_USER } from "../constants/authType"

const initState={
    user: null,
    isAuth: false,
    load: false,
    errors: null

}
const authReducer = (state=initState, {type, payload}) =>{
    switch (type) {
        case LOAD_USER: 
        return {
            ...state, load:true
        }
        case REGISTER_USER:
            case LOGIN_USER:
            localStorage.setItem("token", payload.token)
            return {
              ...state, user:payload.user, load: false, isAuth: true
            }
        case FAIL_USER: 
            return {
                ...state, errors: payload, load: false
            }
        default: 
            return state
    }
}

export default authReducer