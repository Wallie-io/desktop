import {
  Flex,
  HStack,
  IconButton,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import ChatBubble from "./ChatBubble";
import { IoSend } from "react-icons/io5";

const messages = [
  {
    message: "Hey Travis! Would you like to go out for a coffee?",
    from: "others",
    dateSent: "20:21",
  },
  {
    message: "Sure! At 11:00 am?",
    from: "me",
    dateSent: "20:22",
  },
  {
    message: "That's too early! How about at noon?",
    from: "others",
    dateSent: "20:22",
  },
  {
    message: "That sounds good as well. Where should we meet?",
    from: "me",
    dateSent: "20:23",
  },
  {
    message: "Meet me at the hardware store on 21 Duck Street.",
    from: "others",
    dateSent: "20:23",
  },
  {
    message: "Sounds good. I'll bring my friend with me as well!",
    from: "me",
    dateSent: "20:24",
  },
  {
    message: "Which one? The developer or the designer?",
    from: "others",
    dateSent: "20:24",
  },
  {
    message: "The developer. You remember Tony, right?",
    from: "me",
    dateSent: "20:24",
  },
  {
    message: "Yeah! Tony's a great guy!",
    from: "others",
    dateSent: "20:25",
  },
  {
    message: "Indeed he is! Alright, see you later 👋!",
    from: "me",
    dateSent: "20:25",
  },
];

const Chat = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex w="full" flexDirection={"column"}>
      <HStack
        px={4}
        py={4}
        borderBottomColor={colorMode === "dark" ? "purple.dark" : "gray.300"}
        borderBottomWidth={1}
      >
        <Input
          variant={"filled"}
          borderColor={colorMode === "dark" ? "" : "gray.300"}
          rounded="full"
          placeholder="Search friends"
        />
      </HStack>
      <Flex px={6} overflowY={"auto"} flexDirection={"column"} flex={1}>
        <Stat mt={6}>
          <StatLabel color="">Chatting with</StatLabel>
          <StatNumber>John Shinoda</StatNumber>
        </Stat>
        {messages.map(({ message, from, dateSent }, index) => (
          <ChatBubble
            key={index}
            message={message}
            from={from}
            dateSent={dateSent}
          />
        ))}
      </Flex>
      <Flex pl={4} pr={2} borderTopColor={"gray.100"} borderTopWidth={1} py={1}>
        <Input
          variant="unstyled"
          placeholder="Type your message"
          bg={"purple.800"}
          px={2}
          color="white"
        />
        <Tooltip label="send" placement="right">
          <IconButton
            colorScheme="lightgray"
            aria-label="Send Message"
            variant="ghost"
            icon={<IoSend />}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Chat;
