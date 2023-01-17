import { Box, Text, Heading, Stack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/user/register", {
        email: email,
        username: username,
        password: password,
      });
      window.location.replace("/login");
    } catch (error) {
      if (error) {
        alert("poneme bien las cosas man");
        console.log(error);
      }
    }
  };

  return (
    <Stack margin={"auto"} maxWidth={"400px"}>
      <Heading textAlign={"center"} padding={8}>
        Register
      </Heading>
      <Stack as={"form"} direction={"column"} gap={2}>
        <Box>
          <Text>Email Address:</Text>
          <Input
            type={"email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your email..."
            marginY={1}
            value={email}
            required
          />
        </Box>
        <Box>
          <Text>Username:</Text>
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Your username"
            marginY={1}
            value={username}
            required
          />
        </Box>
        <Box>
          <Text>Password:</Text>
          <Input
            type={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Your password"
            marginY={1}
            value={password}
            required
          />
        </Box>
      </Stack>
      <Button
        marginTop={4}
        as={"sub"}
        colorScheme={"blackAlpha"}
        onClick={register}
      >
        Register
      </Button>
    </Stack>
  );
};
