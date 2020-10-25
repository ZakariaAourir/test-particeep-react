export const updateData = (posted:any) => ({
    type: 'SEND_TO_PROFILE',
    posted,
});

export const sendDataToProfile = (posted:any) => async (dispatch: any) => {
    try {
        dispatch(updateData(posted));
    } catch (error) {
        console.log('there is an error');
    }
};
