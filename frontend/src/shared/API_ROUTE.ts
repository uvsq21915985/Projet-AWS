import { end_reunion, updateUser } from "@/services/auth";

export const API_ROUTE = {
    login: "https://authdjango.myddns.me/api/login/",
    register: "https://authdjango.myddns.me/api/register/",
    validate:"https://authdjango.myddns.me/api/validate/",
    logout:"https://authdjango.myddns.me/api/logout/",
    refreshJWT: "https://authdjango.myddns.me/api/refresh/",
    validateJWT: "https://authdjango.myddns.me/api/validate/",
    loginJWT: "https://authdjango.myddns.me/api/login/",
    logoutJWT: "https://authdjango.myddns.me/api/logout/",
    updateUser: "https://authdjango.myddns.me/api/update_user/",
    updatePassword: "https://authdjango.myddns.me/api/update_password/",
    create_reunion: "https://authdjango.myddns.me/api/create_reunion/",
    get_reunions: "https://authdjango.myddns.me/api/get_reunions/",
    end_reunion: "https://authdjango.myddns.me/api/end_reunion/",

// login: "http://127.0.0.1:8000/api/login/",
//     register: "http://127.0.0.1:8000/api/register/",
//     validate:"http://127.0.0.1:8000/api/validate/",
//     logout:"http://127.0.0.1:8000/api/logout/",
//     refreshJWT: "http://127.0.0.1:8000/api/refresh/",
//     validateJWT: "http://127.0.0.1:8000/api/validate/",
//     loginJWT: "http://127.0.0.1:8000/api/login/",
//     logoutJWT: "http://127.0.0.1:8000/api/logout/",
//     updateUser: "http://127.0.0.1:8000/api/update_user/",
//     updatePassword: "http://127.0.0.1:8000/api/update_password/",
//     create_reunion: "http://127.0.0.1:8000/api/create_reunion/",
//     get_reunions: "http://127.0.0.1:8000/api/get_reunions/",
//     end_reunion: "http://127.0.0.1:8000/api/end_reunion/",

}
