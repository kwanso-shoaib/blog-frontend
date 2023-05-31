import { PostProviderProps, PostStore } from "../../types/index";
import { PostContext } from "./PostContext";
import { useReducer, useMemo, Reducer } from "react";
import {
  CreatePostAction,
  postReducer,
  postStoreDefaultValue,
} from "../../reducers/post";
export const PostProvider = ({ children }: PostProviderProps) => {
  const [postStore, dispatchPostAction] = useReducer<
    Reducer<PostStore, CreatePostAction>
  >(postReducer, postStoreDefaultValue);
  const store = useMemo(() => {
    return { ...postStore, dispatchPostAction };
  }, [postStore]);
  return (
    <PostContext.Provider value={{ ...store }}>{children}</PostContext.Provider>
  );
};
