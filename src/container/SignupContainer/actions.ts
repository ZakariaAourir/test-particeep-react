export const updateData = (name: any, email: any) => ({
    type: "USERS_SIGNUP_REQUEST",
    name,
    email,
});

export const updateDataFromInputsSignup = (name: any, email: any, password: any) => async (dispatch: any) => {
    try {
        dispatch(updateData(name, email));
        localStorage.clear();
    } catch (error) {
        console.log('there is an error');
    }
};
