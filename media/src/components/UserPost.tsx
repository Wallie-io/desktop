import {
    Avatar,
    Box,
    Flex,
    Image,
    Text,
    useColorMode
  } from "@chakra-ui/react";
  import { faker } from "@faker-js/faker";
  import { Link } from "react-router-dom";
  import verified from "../assets/verified.png";
  import { BsThreeDots } from "react-icons/bs";
  // import projectImg from "../assets/project.jpg";
  import { useState } from "react";
  import Actions from "./Actions";
  import { FC } from "react";
  
  interface UserPostProps {
      postImg: string;
      postTitle: string;
      likes: number
      replies: number
  }
  
  const UserPost: FC<UserPostProps> = ({ postImg, postTitle, likes, replies }) => {
    const [liked, setLiked] = useState<boolean>(false);
    const { colorMode } = useColorMode();
    const description =
      "this is the description of this post... please click and read it. Thank you, this is the description of this post... this is the description of this post... please click and read it. Thank you,  please click and read it. Thank you, this is the description of this post... please click and read it. Thank you ";
    const maxDescriptionWords = 300;
    const limitedDescription = description
      .split(" ")
      .slice(0, maxDescriptionWords)
      .join(" ");
  
    return (
      <Link to={"/username/post/:id"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection="column" alignItems="center">
          <Avatar size="md" name="username" src={faker.image.avatar()} />
          <Box
            w="1px"
            h="full"
            bg={colorMode === "dark" ? "purple.light" : "purple.dark"}
            my={2}
          ></Box>
          <Box position="relative" w="full">
            <Avatar
              size="xs"
              name="username"
              src={faker.image.avatar()}
              position="absolute"
              top="0px"
              left="15px"
              padding="2px"
            />
            <Avatar
              size="xs"
              name="username"
              src={"https://bit.ly/sage-adebayo"}
              position="absolute"
              bottom="0px"
              right="-5px"
              padding="2px"
            />
            <Avatar
              size="xs"
              name="username"
              src={"https://bit.ly/code-beast"}
              position="absolute"
              bottom="0px"
              left="4px"
              padding="2px"
            />
          </Box>
        </Flex>

        <Flex flex={1} flexDirection="column" gap={2}>
          <Flex justifyContent="space-between" w="full">
            <Flex w="full" alignItems="center">
              <Text fontSize="sm" fontWeight="bold">
                Username
              </Text>
              <Image src={verified} w={4} h={4} ml={1} />
            </Flex>
            <Flex gap={4} alignItems="center">
              <Text fontSize="sm" color="purple.light">
                1d
              </Text>
              <BsThreeDots size={23} />
            </Flex>
          </Flex>

          <Text fontSize="md" fontWeight="bold">
            {postTitle}
          </Text>
          {/*POST IMAGE & TEXT */}
          {postImg && (
            <Box borderRadius={6} overflow="hidden" w="100%">
              <Image 
            //   src={projectImg} 
              src={postImg} 
              w="100%" 
              h="md" 
              objectFit="cover" />
            </Box>
          )}
          <Text>{limitedDescription}</Text>
          {/*ACTIONS */}
          <Flex gap={3} my={1}>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>

          <Flex gap={2} alignItems={"center"}>
            <Text color={"purple.light"} fontSize={"sm"}>
              {replies}replies (fake)
            </Text>
            <Box
              w={0.5}
              h={0.5}
              borderRadius={"full"}
              bg={"purple.light"}
            ></Box>
            <Text color={"purple.light"} fontSize={"sm"}>
              {likes} likes (fake)
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
    );
  };
  
  export default UserPost;
  