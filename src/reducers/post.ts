import { PostStore } from "../types";
import { Posts } from "../gql/graphql";
import { Dispatch } from "react";
export enum Post_Action {
  Create_Post = "createPost",
  Get_Post = "getPost",
}

export type CreatePostAction = {
  type: Post_Action.Create_Post;
  payload: {
    post: Posts;
  };
};
export type GetPostAction = {
  type: Post_Action.Get_Post;
  payload: {
    posts: Posts[];
    count: number;
  };
};
export type PostAction = CreatePostAction | GetPostAction;

export const postStoreDefaultValue: PostStore = {
  posts: [],
  count: 0,
  dispatchPostAction: () => {
    return;
  },
};
export type intialStateProps = {
  posts: Posts[] | [];
  dispatchPostAction: Dispatch<PostAction>;
  count: number;
};
export type returnType = {
  posts: Posts[];
  count: number;
};
export const postReducer = (state: PostStore, action: PostAction) => {
  const { type, payload } = action;

  switch (type) {
    case Post_Action.Create_Post: {
      return {
        ...state,
        posts: [...state.posts, payload.post],
        count: state.count + 1,
      };
    }
    case Post_Action.Get_Post: {
      return {
        ...state,
        posts: payload.posts,
        count: payload.count,
      };
    }
    default:
      return state;
  }
};
