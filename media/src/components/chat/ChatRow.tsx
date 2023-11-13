import { Box, Flex, Heading, VStack, Text, useColorMode } from '@chakra-ui/react'


const ChatRow = () => {
  const {colorMode} = useColorMode()
  return (
    <Flex py={4} 
    px={8}
    w={"full"}
    alignItems={"center"}
    borderBottomColor={"purple.dark"}
    borderBottomWidth={1}
    style={{ transition: "background 300ms"}}
    _hover={{bg: "purple.300", cursor: "pointer"}}

    >
<Box rounded="full" bg="gray.500" minW={14} minH={14}/>
    <VStack
      overflow={"hidden"}
      flex={1}
      ml={3}
      spacing={0}
      alignItems={"flex-start"}
    >
      <Heading fontSize={12} w="full">
        John Shinoda
      </Heading>
      <Text overflow={"hidden"}
      textOverflow={"ellipsis"}
      whiteSpace={"nowrap"}
      w="full"
      fontSize={"xs"}
      color={colorMode === "dark" ? "gray.300": "purple.dark"}
      >
        Sample text message
      </Text>
    </VStack>
    <Text ml={3} fontSize={"xs"} color={colorMode === "dark" ? "gray.100": "purple.dark"}>
      08:30pm
    </Text>
    </Flex>
  )
}

export default ChatRow