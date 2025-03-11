import { updateUser } from "@/services/auth";

export const API_ROUTE = {
    login: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/login/",
    register: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/register/",
    validate:"http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/validate/",
    logout:"http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/logout/",
    token: "http://localhost:8000/api/token",
    refreshJWT: "http://localhost:8000/api/refresh/",
    validateJWT: "http://localhost:8000/api/validate/",
    loginJWT: "http://localhost:8000/api/login/",
    logoutJWT: "http://localhost:8000/api/logout/",
    updateUser: "http://localhost:8000/api/update_user/",
    updatePassword: "http://localhost:8000/api/update_password/",
    create_reunion: "http://localhost:8000/api/create_reunion/",
    get_reunions: "http://localhost:8000/api/get_reunions/",

      /*  login: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/login/",
    register: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/register/",
    validate:"http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/validate/",
    logout:"http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/logout/",
   // token: "http://localhost:8000/api/token",
    refreshJWT: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/refresh/",
    validateJWT: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/validate/",
    loginJWT: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/login/",
    logoutJWT: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/logout/",
    updateUser: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/update_user/",
    updatePassword: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/update_password/",
    create_reunion: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/create_reunion/",
    get_reunions: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/get_reunions/",
*/
}