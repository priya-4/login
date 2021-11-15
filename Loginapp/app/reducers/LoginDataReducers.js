import { CONSTANT } from "../utils/Constant"

const LoginDataReducer = (state = '', action) => {


    if (action.type == CONSTANT.Login_DATA_SUCCESS) {
        return action.payload
    }
    if (action.type == CONSTANT.Login_DATA_ERROR) {
        return action.payload
    } else {
        return state

    }
}
export default LoginDataReducer