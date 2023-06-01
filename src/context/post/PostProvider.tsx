import { PostProviderProps, PostStore } from "../../types/index";
import { PostContext } from "./PostContext";
import { useReducer, useMemo, Reducer, useEffect } from "react";
import {
  PostAction,
  postReducer,
  postStoreDefaultValue,
} from "../../reducers/post";
export const PostProvider = ({ children }: PostProviderProps) => {
  const [postStore, dispatchPostAction] = useReducer<
    Reducer<PostStore, PostAction>
  >(postReducer, postStoreDefaultValue);
  const store = useMemo(() => {
    return { ...postStore, dispatchPostAction };
  }, [postStore]);
  return (
    <PostContext.Provider value={{ ...store }}>{children}</PostContext.Provider>
  );
};
