import LoginContainer from "../../container/LoginContainer";
import SignupLoader from "../../container/SignupContainer";


const routes = [
    {
        key: "login",
        path: "/login",
        component: LoginContainer
    },
    {
        key: "signup",
        path: "/signup",
        component: SignupLoader
    }
];

export default routes;
