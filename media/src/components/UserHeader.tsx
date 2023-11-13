import {
    Avatar,
    Box,
    Flex,
    VStack,
    Text,
    MenuButton,
    Menu,
    Button,
    Portal,
    MenuList,
    MenuItem,
    useToast,
    useColorMode
  } from "@chakra-ui/react";
  import { faker } from "@faker-js/faker";
  import { Link } from "react-router-dom";
  import { BsTwitter } from "react-icons/bs";
  import { CgMoreO } from "react-icons/cg";
  
  const UserHeader = () => {
    const toast = useToast();
    const {colorMode} = useColorMode()
  
    const copyURL = async () => {
      const currentURL = window.location.href;
      navigator.clipboard.writeText(currentURL).then(() => {
        toast({
          title: "Account created.",
          description: "Profile link copied",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log("http://localhost:5173/username");
      });
    };
    return (
      <VStack gap={4} alignItems={"start"}>
        <Flex
          gap={4}
          align="center"
          justify="center"
          direction={"column"}
          w="full"
        >
          <Box>
            <Avatar name="user-name" src={faker.image.avatar()} size="xl" />
            <Text fontSize="2xl" fontWeight="bold" >
              User-name
            </Text>
            <Text color={colorMode === "dark" ? "purple.light" : "purple.800"}>Lead Software-Engineer @wallie.io</Text>
            <Link to="/update">
              <Button size={"sm"} bg={"purple.dark"}  color="purple.light"   boxShadow="0 0 10px rgba(0, 0, 0, 0.2)">
                Update Profile
              </Button>
            </Link>
          </Box>
  
          <Box>
            <Flex gap={2} align="center">
              <Text
                fontSize="xs"
                bg="purple.dark"
                color="purple.light"
                p={2}
                borderRadius="md"
              >
                Threads.next
              </Text>
            </Flex>
          </Box>
        </Flex>
  
        <Flex
          width={"full"}
          justifyContent={"space-between"}
          flex={1}
          borderBottom={colorMode === "dark" ? "1.5px solid white" : "1.5px solid purple"}
        >
          <Flex gap={2} alignItems={"center"}>
            <Text color={colorMode === "dark" ? "purple.light" : "purple.800"}>3.2k followers</Text>
            <Text color={colorMode === "dark" ? "purple.light" : "purple.800"}>1.2k following</Text>
  
            <Box w="1" h="1" bg={"purple.light"} borderRadius={"full"}></Box>
            <Link color={"purple.light"} to={"https://twitter.com/"}>
              Twitter.com
            </Link>
          </Flex>
  
          <Flex >
            <Box className="icon-container">
              <BsTwitter size={24} cursor={"pointer"} />
            </Box>
  
            <Box className="icon-container">
              <Menu>
                <MenuButton>
                  <CgMoreO size={24} cursor={"pointer"} />
                </MenuButton>
                <Portal>
                  <MenuList bg={colorMode === "dark" ? "purple.dark" : "purple.light"}>
                    <MenuItem bg={colorMode === "dark" ? "purple.dark" : "purple.light"} onClick={copyURL}>
                      Copy link
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </Box>
          </Flex>
        </Flex>
  
        <Flex w={"full"}>
          <Flex
            flex={1}
            borderBottom={colorMode === "dark" ? "1.5px solid white" : "1.5px solid purple"}
            justifyContent={"center"}
            pb="3"
            cursor={"pointer"}
          >
            <Text fontWeight={"bold"}>Threads</Text>
          </Flex>
          <Flex
            flex={1}
            borderBottom={colorMode === "dark" ? "1.5px solid white" : "1.5px solid purple"}
            justifyContent={"center"}
            color={"purple.light"}
            pb="3"
            cursor={"pointer"}
          >
            <Text fontWeight={"bold"}>Replies</Text>
          </Flex>
        </Flex>
      </VStack>
    );
  };
  
  export default UserHeader;
  