import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./card";
import Nav from "./Navbar";
import axios from "axios";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
const HomePage = () => {
  const [user, setData] = useState([]);

  const getData = async () => {
    let rdata = await axios.get(`https://api.github.com/users/ganeshbahire01`);
    setData(rdata.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(user);
  return (
    <div>
      <Nav />
      <Center py={6}>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={user ? user.avatar_url : ""}
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {user.name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            @{user.login}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {user.bio}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Education At: @MasaiSchool
          </Text>
          <Stack mt={8} direction={"row"} spacing={20}>
            <Link href="https://drive.google.com/file/d/1qODdmSMRThFTKTcFl-UZ4eF9-_-e1koh/view?usp=share_link">
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
              >
                Resume
              </Button>
            </Link>
            <Link href="https://github.com/ganeshbahire01">
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Follow
              </Button>
            </Link>
          </Stack>
        </Box>
      </Center>
    </div>
  );
};

export default HomePage;
