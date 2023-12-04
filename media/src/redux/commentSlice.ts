import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
    id: string;
    userId: string | number;
    postId: number;
    text: string;
    date: string;
}

interface CommentsState {
    comments: Comment[]
    isLoading: boolean;
    error: string | null;
}

const initialState: CommentsState = {
    comments: [],
    isLoading: false,
    error: null,
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        fetchComments: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            const { postId, userId, text } = action.payload;
            state.comments.push({
                id: nanoid(),
                postId,
                userId,
                text,
                date: new Date().toISOString(),
              });
          },
          
        deleteComment: (state, action: PayloadAction<Comment>) => {
            state.comments.unshift(action.payload);
        },

        fetchCommentsSuccess: (state, action: PayloadAction<Comment[]>) => {
            state.comments = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        fetchCommentsFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }

    }
})

export const { fetchComments, fetchCommentsSuccess, fetchCommentsFailure, addComment, deleteComment } = commentsSlice.actions;
export default commentsSlice.reducer