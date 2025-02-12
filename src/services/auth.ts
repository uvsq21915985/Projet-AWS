import { API_ROUTE } from "@/shared/API_ROUTE";

export async function login(data: FormData){
    return fetch(
        API_ROUTE.login, {
        body: data
    });
}

export async function register(data: FormData){
    return fetch(
        API_ROUTE.register, {
        body: data
    });
}