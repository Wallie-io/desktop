import { Button, Image, useColorMode } from '@chakra-ui/react'
import logoutdark from '../assets/logout.solid.svg'
import logoutlight from '../assets/logout.light.svg'



const LogoutButton = () => {

    const { colorMode } = useColorMode()
  return (

	<Button
  position={"fixed"}
  top={"30px"}
  right={"30px"}
  size={"sm"}
  boxShadow="0 0 10px rgba(0, 0, 0, 0.2)" // Adding box shadow
  bgGradient="linear(to-br, #7928CA, #FF0080)" // Adding a gradient background
  _hover={{
    bgGradient: "linear(to-tr, #7928CA, #FF0080)", // Gradient on hover
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)", // Box shadow on hover
  }}
  color="white"
  borderRadius="md"
  transition="0.2s" // Smooth transition
>
  <Image
    cursor={"pointer"}
    src={colorMode === "dark" ? logoutlight : logoutdark}
    boxSize='23px'
    marginRight="0.5rem" // Adding some spacing between image and text
  />
  logout
</Button>
  )
}

export default LogoutButton