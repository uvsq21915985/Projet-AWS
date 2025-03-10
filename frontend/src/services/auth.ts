import { API_ROUTE } from "@/shared/API_ROUTE";
import { error } from "console";
import { ZCOOL_XiaoWei } from "next/font/google";

export async function login(data: FormData){
    return fetch(
        API_ROUTE.login, {
        method: "POST",
        headers: {
                'Content-Type': 'application/json'
              },
        body: JSON.stringify({
            username: String(data.get("email")),
            password: String(data.get("password"))
        })
    });
}

export async function loginJwt(data: FormData) {
    return fetch(API_ROUTE.loginJWT,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: String(data.get("email")),
            password: String(data.get("password"))
        })
    })
    
}

export async function logoutJWT(){
    return fetch(API_ROUTE.logoutJWT,{
        method: 'POST',
        credentials: 'include',
    });
}

export async function validateToken(){
    return fetch(API_ROUTE.validateJWT,{
        method: 'GET',
        credentials: 'include',
    });
}

export async function refreshToken(){
    return fetch(API_ROUTE.refreshJWT,{
        method: 'GET',
        credentials: 'include',
    });
}

export async function refresh(jwt:String) {
    return 
    
}
/*
export async function register(data: FormData){
    return fetch(
        API_ROUTE.register, {
        body: data
    });
}
*/
export async function register(data: FormData){

    return fetch(API_ROUTE.register,{
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: String(data.get("username")),
            email: String(data.get("email")),
            password: String(data.get("password"))
        })
    });
}

// to validate a user using the token stored in the local storage ( for now )
export async function validate(token: String){

    return fetch(API_ROUTE.validate,{
         method: "GET",
         headers: {
            "Authorization": "Token "+token,
            'Content-Type': 'application/json'
          },
        redirect: "follow"
    });
}

export async function logout(token: string) {
    return fetch(API_ROUTE.logout, {
        method: "POST",
        headers: {
            "Authorization": "Token " + token,
            'Content-Type': 'application/json'
        },
        redirect: "follow"
    }).then(() => {
        // Rediriger vers la landing page
       // localStorage.removeItem("token");
        localStorage.setItem("token", "null"); 
        window.location.href = "/";
    }).catch(error => console.error("Erreur lors de la déconnexion :", error));
}


/**the response to validate function has this structure 
 * for example
 * {
    "is_allowed": true,
    "user": {
        "id": 9,
        "username": "user@free.fr"
    }
}
 * 
 * 
 */


export async function getUserName(){
    let token = localStorage.getItem("token");
    if (token){
    let  res = await validate(token);
    if (res.ok){
        let json = await res.json();
        return json.user.username;
        // need to add some management for error
    }
    }
    // error need to be managed
    else{return "";}

}