import { API_ROUTE } from "@/shared/API_ROUTE";
import { error } from "console";
import { Hanalei_Fill, ZCOOL_XiaoWei } from "next/font/google";
import {jwtDecode } from 'jwt-decode';

/*
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
*/


     
export async function handleTokenRefresh(route :string, params: { method: string;headers?: HeadersInit, credentials: RequestCredentials,body?: string} ){
    let res = await fetch(route,params);
    if (res.status === 401 || res.status == 403){
        try{
            // try to refresh the token
            console.log("tthe validate JWT return 401");
            const refreshRes = await refreshJWT();
            console.log("the refresh token is " ,refreshRes);
            if (refreshRes.ok){
                return fetch(route,params);
            }else{
                console.log("error refresh token failed");
                return res;
                
            }
        }catch(error){
            return res;
            
        }
    }
    return res;

}


export async function loginJWT(data: FormData) {
    return fetch(API_ROUTE.loginJWT,{
        method: 'POST',
        credentials: 'include',
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
    return await fetch(API_ROUTE.logoutJWT,{
        method: 'POST',
        credentials: 'include',
    });
}

export async function validateJWT(){
    return await handleTokenRefresh(API_ROUTE.validateJWT,{
        method: 'GET',
        credentials: 'include',
    });
   /* let res = await fetch(API_ROUTE.validateJWT,{
        method: 'GET',
        credentials: 'include',
    });
    // when the validation token dont work
    if (res.status === 401 || res.status == 403){
        try{
            // try to refresh the token
            console.log("tthe validate JWT return 401");
            const refreshRes = await refreshJWT();
            console.log("the refresh token is " ,refreshJWT);
            if (refreshRes.ok){
                return fetch(API_ROUTE.validateJWT,{
                    method: 'GET',
                    credentials: 'include',
                });
            }else{
                console.log("error refresh token failed");
                return res;
                
            }
        }catch(error){
            return res;
            
        }
    }
    return res;*/
}

export async function refreshJWT(){
    let res = await fetch(API_ROUTE.refreshJWT,{
        method: 'POST',
        credentials: 'include',
    });
    return res;
}



export async function register(data: FormData){
    return fetch(
        API_ROUTE.register, {
        body: data
    });
}


/*
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


/*
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


export async function getUser(){
    let res = await validateJWT();
    if (res.ok){
        let json = await res.json();
        return json.user/*.username*/;
        // need to add some management for error
    }
    
    // error need to be managed
    else{return "";}

}

export async function updateUser(data: FormData){
    return await handleTokenRefresh(API_ROUTE.updateUser,{
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            username: String(data.get("email")),
            password: String(data.get("password"))
        })
    });
    /*let res = await fetch(API_ROUTE.updateUser,{
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: String(data.get("email")),
            password: String(data.get("password"))
        })
    });
     // when the validation token dont work
     if (res.status === 401){
        try{
            // try to refresh the token
            console.log("tthe validate JWT return 401");
            const refreshRes = await refreshJWT();
            console.log("the refresh token is " ,refreshJWT);
            if (refreshRes.ok){
                return fetch(API_ROUTE.validateJWT,{
                    method: 'GET',
                    credentials: 'include',
                });
            }else{
                console.log("error refresh token failed");
                return res;
                
            }
        }catch(error){
            return res;
            
        }
    }
    return res;*/
}

export async function updatePassword(data: FormData) {
    let res = await handleTokenRefresh(API_ROUTE.updatePassword,{
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            oldpassword: String(data.get("password")),
            newpassword: String(data.get("newpassword"))
        })})
    return res;
    /*let res = await fetch(API_ROUTE.updatePassword,{
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            oldpassword: String(data.get("password")),
            newpassword: String(data.get("newpassword"))
        })

    });
     // when the validation token dont work
     if (res.status === 401){
        try{
            // try to refresh the token
            console.log("tthe validate JWT return 401");
            const refreshRes = await refreshJWT();
            console.log("the refresh token is " ,refreshJWT);
            if (refreshRes.ok){
                return fetch(API_ROUTE.validateJWT,{
                    method: 'GET',
                    credentials: 'include',
                });
            }else{
                console.log("error refresh token failed");
                return res;
                
            }
        }catch(error){
            return res;
            
        }
    }
    return res;*/
}


export async function create_reunion(roomId: string, startTime: number, endTime: number, numberOfParticipants: number) {
    const duration = (endTime - startTime)/1000;
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
    const formattedDuration = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return await handleTokenRefresh(API_ROUTE.create_reunion,{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: roomId,
            begin_time: new Date(startTime).toISOString(),
            end_time: new Date(endTime).toISOString(),
            num_participants: numberOfParticipants,
            duration: formattedDuration // to have right format for django rest api
        })});
}


export async function get_reunions(){
    return await handleTokenRefresh(API_ROUTE.get_reunions,{
        method: 'GET',
        credentials: 'include',
        })
}


