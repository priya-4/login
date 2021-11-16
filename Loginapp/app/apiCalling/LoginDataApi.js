import { CONSTANT } from '../utils/Constant'
// dummy_api call in BASE_URL
const BASE_URL = '     '

export const LoginDataApi= async (password,email) => {
    console.log("login data =>" ,password,email);
  
     
    
    const Response = await fetch(BASE_URL, {

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


