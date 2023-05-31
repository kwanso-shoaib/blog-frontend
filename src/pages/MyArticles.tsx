import { toast } from "react-hot-toast";
import { BLOGS_PER_PAGE } from "../constants";
import { Box, Typography } from "@mui/material";
import { Posts, useMyPostsQuery } from "../gql/graphql";
import { TITLE_WITH_BORDER_BOTTOM } from "../styles/constants";
import { BlogCardSkeleton, BlogCardsList } from "../components";
import { useContext, useEffect } from "react";
import { PostContext } from "../context/post";
import { Post_Action } from "../reducers/post";
export const MyArticles = () => {
  //fetch data from store validate if data exist then populate otherwise fetch and update state as well

  const {
    data: allPosts,
    loading,
    refetch,
  } = useMyPostsQuery({
    variables: {
      skip: 0,
      take: BLOGS_PER_PAGE,
    },
    onError: (error) => toast.error(error.message),
    fetchPolicy: "cache-and-network",
  });

  const onRefetch = (page: number) => {
    console.trace();
    console.log("trace");
    refetch({ skip: BLOGS_PER_PAGE * (page - 1), take: BLOGS_PER_PAGE });
  };

  return (
    <Box>
      <Typography variant="h1" sx={TITLE_WITH_BORDER_BOTTOM}>
        My Articles
      </Typography>

      <Typography sx={{ marginTop: "20px" }}>
        Results: <b>{allPosts?.myPosts.total}</b>
      </Typography>

      <Box sx={{ marginTop: "48px" }}>
        <BlogCardsList
          paginate
          onRefetch={onRefetch}
          perPage={BLOGS_PER_PAGE}
          total={allPosts?.myPosts.total || 0}
          data={(allPosts?.myPosts.items as Posts[]) || []}
        />

        {loading &&
          [...Array(BLOGS_PER_PAGE)].map((_, index) => {
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
