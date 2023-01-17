import { Stack } from "@chakra-ui/react";
import { Post } from "./Post";

export const PostList = ({ posts }) => {
  return (
    <Stack margin={"auto"} direction={"column"} gap={4} width={96}>
      <Post posts={posts} />
    </Stack>
  );
};
