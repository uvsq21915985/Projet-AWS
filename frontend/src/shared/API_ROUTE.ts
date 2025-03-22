import { updateUser } from "@/services/auth";

export const API_ROUTE = {
     login: "https://authdjango.myddns.me/api/login/",
    register: "https://authdjango.myddns.me/api/register/",
    validate:"https://authdjango.myddns.me/api/validate/",
    logout:"https://authdjango.myddns.me/api/logout/",
   // token: "https://localhost:8000/api/token",
    refreshJWT: "https://authdjango.myddns.me/api/refresh/",
    validateJWT: "https://authdjango.myddns.me/api/validate/",
    loginJWT: "https://authdjango.myddns.me/api/login/",
    logoutJWT: "https://authdjango.myddns.me/api/logout/",
    updateUser: "https://authdjango.myddns.me/api/update_user/",
    updatePassword: "https://authdjango.myddns.me/api/update_password/",
    create_reunion: "https://authdjango.myddns.me/api/create_reunion/",
    get_reunions: "https://authdjango.myddns.me/api/get_reunions/",
    create_room: "https://authdjango.myddns.me/api/create_room/",
    check_room: "https://authdjango.myddns.me/api/check_room/",
    delete_room: "https://authdjango.myddns.me/api/delete_room/",
}
