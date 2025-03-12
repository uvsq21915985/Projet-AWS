import { API_ROUTE } from "@/shared/API_ROUTE";



// function used to handle the tokens : when a token expired he is refreshed so the user can stay connected     
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




export async function getUser(){
    let res = await validateJWT();
    if (res.ok){
        let json = await res.json();
        return json.user;
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

// get all the reunions a user has created
export async function get_reunions(){
    return await handleTokenRefresh(API_ROUTE.get_reunions,{
        method: 'GET',
        credentials: 'include',
        })
}


