const comments = (state = [], action) => {
    switch (action.type) {
            case 'COMMENTS_FETCH_SUCCESS':
                return action.comments;
            case 'ADD_COMMENTS':
                return [...state,action.comment];

            default:
                return state;
        }
}

const comment = (state = {}, action) => {
    switch (action.type) {
            case 'ADD_COMMENTS3':
                return action.comment;

            default:
                return state;
        }
}

const comment2 = (state = {}, action) => {
    switch (action.type) {
            case 'ADD_COMMENTS2':
                return action.comment;

            default:
                return state;
        }
}

export {
comments,
comment,
comment2	
} 