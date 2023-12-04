import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { sub } from "date-fns"; 

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  isRead?: boolean; 
}

interface PostsState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
  date: string | null;
  selectedPost: Post | null;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
  date: sub(new Date(), { minutes: 10 }).toISOString(),
  selectedPost: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) { 
        state.posts.push(action.payload);
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(), 
            title,
            content,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    },

    selectPost(state, action: PayloadAction<string>) {
      state.selectedPost = state.posts.find((post) => post.id === action.payload) || null;
    },

    clearSelectedPost(state) {
      // Clear the selected post
      state.selectedPost = null;
    },

    markPostAsRead(state, action: PayloadAction<string>) {
      const postIndex = state.posts.findIndex((post) => post.id === action.payload);
      if (postIndex !== -1) {
        state.posts[postIndex].isRead = true;
      }

    },

    fetchPosts(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },

  extraReducers: () => { 

  },
});

export const {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsFailure,
  markPostAsRead,
  selectPost,
  clearSelectedPost,
  postAdded,
} = postsSlice.actions;

export default postsSlice.reducer;
