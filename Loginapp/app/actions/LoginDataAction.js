import { CONSTANT } from "../utils/Constant"

const loadLoginData = (password,email) => ({
    type: CONSTANT.Login_DATA,
    password,
    email
})

const LoginDataError = payload => ({
    type: CONSTANT.Login_DATA_ERROR,
    payload
})

const LoginDataResponse = payload => ({
    type: CONSTANT.Login_DATA_SUCCESS,
    payload
})



export {
    loadLoginData,
    LoginDataError,
     LoginDataResponse
   
}