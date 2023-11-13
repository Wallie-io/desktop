import {
  Flex,
  IconButton,
  Image,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import lightlogo from "../assets/Lightlogo.svg";
import darklogo from "../assets/Darklogo.svg";
import { Link } from "react-router-dom";
import {

  IoChatbubbleEllipsesSharp,
  IoFolderOpen,

  // IoSettingsOutline,
} from "react-icons/io5";


import { MdHome } from "react-icons/md";
import { HiUser } from "react-icons/hi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex justifyContent={"space-between"} mt={6} mb="12" width={6}>
      <Tooltip label="color change" placement="right">
        <Image
          cursor={"pointer"}
          src={colorMode === "dark" ? lightlogo : darklogo}
          alt="logo"
          onClick={toggleColorMode}
          mx={2}
        />
      </Tooltip>
        {/* </Flex>
      <Flex alignItems={"center"}> */}

          <>
            <Link to="/">
              <Tooltip label="Home" placement="right">
                <IconButton
                  color="gray.500"
                  icon={
                    <MdHome
                      // color={colorMode === "dark" ? lightlogo : "#240046"}
                      size={23}
                    />
                  }
                  aria-label={"Home"}
                />
              </Tooltip>
            </Link>

            <Link to="/chat">
            <Tooltip label="Chat" placement="right">
            <IconButton
                  color="gray.500"
                  icon={
              <IoChatbubbleEllipsesSharp
                // color={colorMode === "dark" ? lightlogo : "#240046"}
                size={23}
              /> } 
              aria-label={"Chat"}
              />
              </Tooltip>
            </Link>

            <Link to="/">
              <Tooltip label="Chat" placement="right">
              <IconButton color="gray.500" icon={

                <IoFolderOpen
                  // color={colorMode === "dark" ? lightlogo : "#240046"}
                  size={23}
                />
              } aria-label={"File"}/>
              </Tooltip>
            </Link>

            <Link to="/profile">
            <Tooltip label="Profile" placement="right">
              <IconButton 
                color="gray.500"
                icon= {

                  <HiUser
                    // color={useColorModeValue("#240046", "#fff")}
                    // color={colorMode === "dark" ? lightlogo : "#240046"}
                    size={23}
                  />
                }
                aria-label={"profile"}
              />
            </Tooltip>
            </Link>
          </>
      </Flex>
    </>
  );
};

export default Header;
