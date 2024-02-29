import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post, Comment } from "../../intefaces";

export interface IPost {
	posts: Post[];
	comments: Comment[];
}

const initialState: IPost = {
	posts: [],
	comments: [],
};

const postsReducer = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setPosts: (state, action: PayloadAction<Post[]>) => {
			state.posts = action.payload;
		},
		setComments: (state, action: PayloadAction<Comment[]>) => {
			state.comments = action.payload;
		},
	},
});

export const { setComments, setPosts } = postsReducer.actions;

export default postsReducer.reducer;
