// import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
// import { PostList } from "./components/PostList";
import { Login } from "./pages/Login";
import { Routes, Route } from "react-router";
import { Welcome } from "./pages/Welcome";
import { Register } from "./pages/Register";

export const App = () => {
  // const [posts, setPosts] = useState([{}]);
  // useEffect(() => {
  // fetch("http://localhost:5000/api/posts")
  // .then((res) => res.json())
  // .then((jsonRes) => setPosts(jsonRes));
  // }, []);

  return (
    <Box backgroundColor={"blackAlpha.800"} color={"white"} height={"100vh"}>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Box>
  );
};
