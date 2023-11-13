import { Box, VStack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

type Props = {
  message: string;
  dateSent: string;
  from: "me" | "others";
};

const ChatBubble = ({ message, dateSent, from }: Props) => {
  const { colorMode } = useColorMode();
  const isMe = from === "me";
  const alignment = isMe ? "flex-end" : "flex-start";
  const bottomRightRadius = isMe ? 0 : 32;
  const bottomLeftRadius = isMe ? 32 : 0;

  return (
    <VStack mt={6} alignItems={alignment} alignSelf={alignment}>
      <Box
        bg={isMe ? "purple.400" : "purple.700"}
        px={6}
        py={4}
        maxW={80}
        borderTopLeftRadius={32}
        borderTopRightRadius={32}
        borderBottomLeftRadius={bottomLeftRadius}
        borderBottomRightRadius={bottomRightRadius}
      >
        <Text fontSize="md" color={isMe ? "white" : "gray.300"}>
          {message}
        </Text>
      </Box>
      <Text
        fontSize="xs"
        color={colorMode === "dark" ? "gray.300" : "purple.dark"}
      >
        {dateSent}
      </Text>
    </VStack>
  );
};

export default ChatBubble;
