import {
  HStack,
  Heading,
  VStack,
  Text,
  Box,
  Divider,
  Input,
  List,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import UserAvatar from "./UserAvatar";
import ChatRow from "./ChatRow";

const onlineFriends = [
  "Michael Jackson",
  "Tony Romo",
  "lebron James",
  "Batman",
  "Clark Kent",
  "The Juice",
  "Warren Buffet",
  "Elon Musk",
  "Son of Oden",
];

const ChatHistoryBar = () => {
  const { colorMode } = useColorMode();
  return (
    <VStack h={"full"} alignItems={"center"} w="full" spacing={6}>
      <HStack px={8} w={"full"} justifyContent={"space-between"}>
        <Heading size="xs">Friends Online</Heading>
        <Text fontSize="sm" color={colorMode === "dark" ? "gray.100": "purple.dark"} fontWeight="semibold">
          5
        </Text>
      </HStack>
      ///////
      <HStack
        overflow={"auto"}
        minH={24}
        px={8}
        w="full"
        justifyContent={"flex-start"}
        spacing={3}
      >
        {onlineFriends.map((friend) => (
          <UserAvatar name={friend} key={friend} />
        ))}
      </HStack>
      /////////
      <Box px={8} w={"full"}>
        <Divider color="purple.dark" />
      </Box>
      //////////////
      <Box px={8} w="full">
        <Heading size="xs" w="full">
          Chats
        </Heading>
        <Input
          variant={"filled"}
          borderColor={colorMode === "dark" ? "" : "gray.300"}
          mt={2}
          minH={10}
          rounded="full"
          placeholder="search chat"
        />
      </Box>
      <Box w="full" overflowY={"auto"}>
            <List w="full" spacing={0}>
              <ListItem>
                <ChatRow/>
                </ListItem>  
                <ListItem>
                <ChatRow/>
                </ListItem>  
                <ListItem>
                <ChatRow/>
                </ListItem>  
                <ListItem>
                <ChatRow/>
                </ListItem>  
                <ListItem>
                <ChatRow/>
                </ListItem>  
                <ListItem>
                <ChatRow/>
                </ListItem>  
            </List>
      </Box>
    </VStack>
  );
};

export default ChatHistoryBar;
