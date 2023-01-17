import axios from "axios";
import { useState } from "react";
import { Stack, Button, Input, Heading, Box } from "@chakra-ui/react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/user/login", {
        email: email,
        password: password,
      });
      window.location.replace("/welcome");
    } catch (error) {
      if (error) {
        alert("Pone bien las cosas papá");
        console.log(error);
      }
    }
  };

  return (
    <Box as={"form"}>
      <Heading color={"white"} textAlign={"center"} paddingY={8}>
        Login
      </Heading>
      <Stack width={"400px"} margin={"auto"}>
        <Input
          color={"white"}
          variant={"outline"}
          placeholder="Your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
        <Input
          color={"white"}
          variant={"outline"}
          placeholder="Your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
        <Button colorScheme={"blackAlpha"} as={"button"} onClick={login}>
          Login
        </Button>
      </Stack>
    </Box>
  );
};
