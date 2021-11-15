import { CONSTANT } from '../utils/Constant'

const BASE_URL = 'dummy_api'

export const LoginDataApi= async (password,email) => {
    console.log("login data =>" ,password,email);
  
     
    
    const Response = await fetch(BASE_URL + '/checklogin/', {

    method: 'GET',
    
    body: JSON.stringify({
        
            password:password,
            email: email,

    })
})
const data = Response.json()
if (Response.status > 400) {
    throw new Error(data.errors)
}

return data;
}


