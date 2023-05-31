import { Box, Typography } from "@mui/material";
import { Posts, useFindAllPostsQuery } from "../gql/graphql";
import { BLOGS_PER_PAGE } from "../constants";
import toast from "react-hot-toast";
import { BlogCardsList, BlogCardSkeleton } from "../components";
import { TITLE_WITH_BORDER_BOTTOM } from "../styles/constants/index";
import { useContext, useEffect } from "react";
import { PostContext } from "../context/post";
import { Post_Action } from "../reducers/post";

export const Home = () => {
  const { posts, count, dispatchPostAction } = useContext(PostContext);
  // const {
  //   data: allPosts,
  //   loading,
  //   refetch,
  // } = useFindAllPostsQuery({
  //   variables: {
  //     skip: 0,
  //     take: BLOGS_PER_PAGE,
  //   },
  //   onCompleted: (data) => {
  //     dispatchPostAction({
  //       type: Post_Action.Get_Post,
  //       payload: {
  //         posts: data.findAllPosts.items,
  //         count: data.findAllPosts.total,
  //       },
  //     });
  //   },
  //   onError: (error) => toast.error(error.message),
  //   fetchPolicy: "cache-and-network",
  // });

  // const onRefetch = (page: number) => {
  //   refetch({ skip: BLOGS_PER_PAGE * (page - 1), take: BLOGS_PER_PAGE });
  // };
  useEffect(() => {
    console.log("posts data", posts, "count", count);
  });
  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        Recent Posts
      </Typography>
      <Box sx={{ marginTop: "48px" }}>
        {posts !== undefined && (
          <BlogCardsList
            paginate
            perPage={BLOGS_PER_PAGE}
            total={count || 0}
            data={(posts as Posts[]) || []}
          />
        )}

        {[...Array(BLOGS_PER_PAGE)].map((_, index) => {
          return (
            <Box sx={{ marginTop: index === 0 ? "0px" : "48px" }} key={index}>
              <BlogCardSkeleton />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
