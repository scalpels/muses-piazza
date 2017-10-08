export const commentsFetchSuccess = comments => {
    return {
        type: 'COMMENTS_FETCH_SUCCESS',
        comments
    };
}

export const addComment = comment => {
    return {
        type: 'ADD_COMMENTS',
        comment
    };
}


export const commentsFetch = url => {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((comments) => dispatch(commentsFetchSuccess(comments)))
            .catch((e) => {
            	console.log("xxxxx"+e);
            });
    };
}

