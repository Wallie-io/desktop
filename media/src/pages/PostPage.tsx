import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import blog from "../assets/Blogchat.jpg";
import verified from "../assets/verified.png";
import { faker } from "@faker-js/faker";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";
import waveEmoji from "../assets/wave.png";
import Comment from "../components/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src={faker.image.avatar()} size={"md"} name="user-name" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              User-name
            </Text>
            <Image src={verified} w="4" h={4} ml={4} />
          </Flex>
        </Flex>

        <Flex gap={4} alignItems={"center"}>
          <Text
            fontSize={"sm"}
            color={colorMode === "dark" ? "purple.light" : "purple.dark"}
          >
            1d
          </Text>
          <BsThreeDots size={23} />
        </Flex>
      </Flex>

      <Text
        fontWeight={"bold"}
        fontSize={{ base: "md", md: "lg", lg: "2xl" }}
        my={3}
      >
        Lets talk about post
      </Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px none"}
        // border={colorMode === "dark" ? "1px solid white" : "1px solid purple"}
      >
        <Image src={blog} w={"full"} />
      </Box>
      <Text>
        Uzi is the founder of UZIMEDIA, a creative digital agency in the Bay
        Area with over 15 years of experience in print and digital design,
        branding, web design and development, AI design, and business
        automation. His design philosophy is characterized by simplicity and a
        mission to capture the true spirit of a brand. As an agency owner, Uzi
        emphasizes authenticity, integrity, and deep connections in his work.
        Uzi believes in making the right thing right. When it comes to AI and
        technology, we must never forget our own nature and the natural world,
        shaped by the divine, God, and the greater forces that birthed us. Uzi
        is thrilled to collaborate with Evyatar and aims to bring added value to
        the USA market.
      </Text>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={colorMode === "dark" ? "purple.light" : "purple.dark"}>
          {" "}
          234 replies
        </Text>
        <Box
          w={0.5}
          h={0.5}
          borderRadius={"full"}
          bg={colorMode === "dark" ? "purple.light" : "purple.dark"}
        ></Box>
        <Text color={colorMode === "dark" ? "purple.light" : "purple.dark"}>
          {" "}
          {54 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>

      <Divider my={4} bg={colorMode === "dark" ? "9d4edd" : "purple.dark"} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>
            <Image src={waveEmoji} w={6} />
          </Text>
          <Text color={colorMode === "dark" ? "purple.light" : "purple.dark"}>
            Get the app to like, reply and post.
          </Text>
        </Flex>
        <Button bg={"purple.dark"} color={"white"} size="md" boxShadow="md">
          Get
        </Button>
      </Flex>

      <Divider my={4} bg={"[#9d4edd]"} />
      <Comment
        comment="looks really good"
        createdAt="2d"
        likes={23}
        username={"Hermstar"}
        userAvatar={faker.image.avatar()}
      />
      <Comment
        comment="Wow i am very impressed"
        createdAt="3w"
        likes={3}
        username={"jackal"}
        userAvatar={faker.image.avatar()}
      />
      <Comment
        comment="You are getting better"
        createdAt="1d"
        likes={7}
        username={"Star-boy"}
        userAvatar={faker.image.avatar()}
      />
    </>
  );
};

export default PostPage;
