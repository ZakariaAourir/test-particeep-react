export const updateData = (id:any) => ({
    type: "DELETE_MOVIE",
    id,
});

export const addLikesData = (id:any) => ({
    type: "ADD_LIKES",
    id,
});

export const addDisLikesData = (id:any) => ({
    type: "ADD_DISLIKES",
    id,
});

export const deleteMovie = (id:any) => async (dispatch: any) => {
    try {
        dispatch(updateData(id));
    } catch (error) {
        console.log('there is an error');
    }
};

export const addLikes = (id:any) => async (dispatch: any) => {
    try {
        dispatch(addLikesData(id));
    } catch (error) {
        console.log("there is an error");
    }
}
export const addDisLikes = (id:any) => async (dispatch: any) => {
    try {
        dispatch(addDisLikesData(id));
    } catch (error) {
        console.log("there is an error");
    }
}
