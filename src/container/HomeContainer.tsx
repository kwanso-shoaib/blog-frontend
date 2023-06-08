import { useContext } from "react";
import { PostContext } from "../context/post";
import { BlogCardsList } from "../components";
import { BLOGS_PER_PAGE } from "../constants";
import { Box } from "@mui/material";
import { Posts } from "../gql/graphql";

export const HomeConainer = () => {
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
  // });

  const onRefetch = (page: number) => {
    //refetch({ skip: BLOGS_PER_PAGE * (page - 1), take: BLOGS_PER_PAGE });
  };

  // useEffect(() => {
  //   dispatchPostAction({
  //     type: PostActions.GET_POST,
  //     payload: {
  //       posts: allPosts?.findAllPosts.items,
  //       count: allPosts?.findAllPosts.total,
  //     },
  //   });
  // }, [allPosts]);
  return (
    <Box sx={{ marginTop: "48px" }}>
      {posts != undefined && (
        <BlogCardsList
          paginate
          onRefetch={onRefetch}
          perPage={BLOGS_PER_PAGE}
          total={count || 0}
          data={(posts as Posts[]) || []}
        />
      )}
    </Box>
  );
};
