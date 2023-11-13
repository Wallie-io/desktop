import { HStack, Flex } from '@chakra-ui/react'
import Sidebar from '../components/chat/Sidebar'
import ChatHistoryBar from '../components/chat/ChatHistoryBar'
import Chat from '../components/chat/index'
import ChatFiles from '../components/chat/chatFiles'

const ChatPage = () => {
    // const { colorMode } = useColorMode();
  return (
    <HStack h="100vh" spacing={0} py={10} borderColor={"1px solid purple.dark"}>
        <Flex as="nav" h="full" maxW={12} w="full" >
            <Sidebar/>
        </Flex>
        <Flex as="aside" h="full" maxW="xs" w="full" borderRightColor={"purple.dark"} borderRightWidth={1}>
            <ChatHistoryBar />
        </Flex>
        <Flex  as="main" h="full" flex={1} borderRightColor={"purple.dark"} borderRightWidth={1}>
            <Chat />
        </Flex>
        <Flex  as="aside" h="full" maxW={"xs"} w="full">
            <ChatFiles />
        </Flex>
    </HStack>
  )
}

export default ChatPage