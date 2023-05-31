import { PostProviderProps, PostStore } from "../../types/index";
import { PostContext } from "./PostContext";
import { useReducer, useMemo, Reducer, useEffect } from "react";
import {
  PostAction,
  Post_Action,
  postReducer,
  postStoreDefaultValue,
} from "../../reducers/post";
import { useFindAllPostsQuery } from "../../gql/graphql";
import { BLOGS_PER_PAGE } from "../../constants";
export const PostProvider = ({ children }: PostProviderProps) => {
  const [postStore, dispatchPostAction] = useReducer<
    Reducer<PostStore, PostAction>
  >(postReducer, postStoreDefaultValue);
  const store = useMemo(() => {
    return { ...postStore, dispatchPostAction };
  }, [postStore]);

  const { data, loading, refetch } = useFindAllPostsQuery({
    variables: {
      skip: 0,
      take: BLOGS_PER_PAGE,
    },
    onError: (error) => console.log("error message", error.message),
  });
  const onRefetch = (page: number) => {
    refetch({ skip: BLOGS_PER_PAGE * (page - 1), take: BLOGS_PER_PAGE });
  };

  useEffect(() => {
    dispatchPostAction({
      type: Post_Action.Get_Post,
      payload: {
        posts: data?.findAllPosts.items,
        count: data?.findAllPosts.total || 0,
      },
    });
  }, [data]);
  return (
    <PostContext.Provider value={{ ...store }}>{children}</PostContext.Provider>
  );
};
