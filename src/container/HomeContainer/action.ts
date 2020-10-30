export const updateData = (id:any) => ({
    type: "DELETE_MOVIE",
    id,
});

export const deleteMovie = (id:any) => async (dispatch: any) => {
    try {
        dispatch(updateData(id));
    } catch (error) {
        console.log('there is an error');
    }
};
