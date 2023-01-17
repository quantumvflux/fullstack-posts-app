import { Box, Heading, Text } from "@chakra-ui/react";

export const Post = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Box
          color={"white"}
          height={36}
          maxWidth={96}
          border={"1px"}
          borderColor={"blackAlpha.900"}
          key={post._id}
          padding={4}
        >
          <Heading fontSize={"2xl"}>{post.title}</Heading>
          <Text>{post.body}</Text>
        </Box>
      ))}
    </>
  );
};
