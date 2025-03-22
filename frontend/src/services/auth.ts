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
            if (refreshRes.ok) {
                return fetch(route,params);
            } else {
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

export async function logoutJWT() {
    try {
        const response = await fetch(API_ROUTE.logoutJWT, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },    
        });

        return response;
    } catch (error) {
        console.error("Error during logout:", error);
    }
}

export async function validateJWT(){
    return await handleTokenRefresh(API_ROUTE.validateJWT,{
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    });
}

export async function refreshJWT(){
    let res = await fetch(API_ROUTE.refreshJWT,{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return res;
}

export async function register(data: FormData){
    return fetch(
        API_ROUTE.register, {
        method: 'POST',	
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
            username: String(data.get("username")),
            email: String(data.get("email")),
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


export async function create_reunion(roomId: string, startTime: number, numberOfParticipants: number) {
    return await handleTokenRefresh(API_ROUTE.create_reunion,{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            room_id: roomId,
            begin_time: new Date(startTime).toISOString(),
            num_participants: numberOfParticipants,
        })
    });
}

export async function end_reunion(roomId: string, endTime: number, numberOfParticipants: number) {
    return await handleTokenRefresh(API_ROUTE.end_reunion,{
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            room_id: roomId,
            end_time: new Date(endTime).toISOString(),
            num_participants: numberOfParticipants,
        })
    });
}

// get all the reunions a user has created
export async function get_reunions(){
    return await handleTokenRefresh(API_ROUTE.get_reunions,{
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
          },
    })
}

// create a room in database and return room name
export async function create_room(schedule_time: number) {
  try{
    let res = await handleTokenRefresh(API_ROUTE.create_room,{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            schedule_time: new Date(schedule_time).toISOString()
        })});
        if (res.ok){

    let json = await res.json();
    return json.name;
        }else{return '';}
    }catch(error){return ''}
}

export async function delete_room(roomID : string){
    return await handleTokenRefresh(API_ROUTE.delete_room+roomID+"/",
            {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
              }
            });
}

export async function check_room(roomID : string){
    let res =  await handleTokenRefresh(API_ROUTE.check_room+roomID+"/",
            {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
              }
            });
    return res.ok;
}


// get all rooms scheduled for the future for the user 
export async function get_scheduled_rooms(){} 


