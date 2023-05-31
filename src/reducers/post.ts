import { PostStore } from "../types";
import { CreatePostMutation, PostPayload, Posts } from "../gql/graphql";
import { Dispatch } from "react";
export enum Post_Action {
  Create_Post = "createPost",
}

export type CreatePostAction = {
  type: Post_Action.Create_Post;
  payload: {
    post: Posts;
  };
};

export type PostAction = CreatePostAction;

export const postStoreDefaultValue: PostStore = {
  posts: [],
  count: 0,
  dispatchPostAction: () => {
    return;
  },
};
export type intialStateProps = {
  posts: Posts[] | [];
  dispatchPostAction: Dispatch<CreatePostAction>;
  count: number;
};
export type returnType = {
  posts: Posts[];
  count: number;
};
export const postReducer = (state: PostStore, action: CreatePostAction) => {
  const { type, payload } = action;

  switch (type) {
    case Post_Action.Create_Post: {
      return {
        ...state,
        post: [state.posts, payload.post],
        count: state.count + 1,
      };
    }

    default:
      return state;
  }
};
