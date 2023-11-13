import { Avatar, Flex, Text, useColorMode, Divider } from "@chakra-ui/react";
// import { faker } from "@faker-js/faker";
import { useState, FC } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

interface commentProps {
  userAvatar: string;
  comment: string;
  createdAt: string;
  likes: number;
  username: string;
}

const Comment: FC<commentProps> = ({
  userAvatar,
  comment,
  createdAt,
  likes,
  username,
}) => {
  const [liked, setLiked] = useState<boolean>(false);
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        gap={4}
        py={2}
        px={2}
        my={2}
        w={"full"}
        borderRadius={"md"}
        border={"0.5px solid #f0e6ef"}
        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      >
        <Avatar 
        src={userAvatar} 
        size={"sm"} 
        />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {username}
            </Text>
            <Flex alignItems={"center"} gap={2}>
              <Text
                fontSize={"sm"}
                color={colorMode === "dark" ? "purple.light" : "purple.dark"}
              >
                {createdAt}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>{comment}</Text>
          <Actions liked={liked} setLiked={setLiked} />
          <Text
            fontSize={"sm"}
            color={colorMode === "dark" ? "purple.light" : "purple.dark"}
          >
            {likes + (liked ? 1 : 0)} likes
          </Text>
        </Flex>
      </Flex>
      <Divider my={4} bg={"9d4edd"} />
    </>
  );
};

export default Comment;
