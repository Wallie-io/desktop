import { Button, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Link to={"/username"}>
        <Flex w={"full"} justifyContent={"center"}>
            <Button mx={"auto"}>Visit the profile Page</Button>
        </Flex>

    </Link>
  )
}

export default HomePage