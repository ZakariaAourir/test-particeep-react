export const updateData = (email: any) => ({
    type: "USERS_LOGIN_REQUEST",
    email,
});

export const updateDataFromInputsLogin = (email: any, password: any) => async (dispatch: any) => {
    try {
        if(email === "za@gmail.com" && password === "123") {
            localStorage.setItem("jwt", "Auth Success");
            dispatch(updateData(email));
        } else {
            console.log("Credentiel are incorrect");
        }
    } catch (error) {
        console.log('there is an error');
    }
};
