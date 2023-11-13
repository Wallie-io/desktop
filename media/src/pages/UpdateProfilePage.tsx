'use client'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
//   HStack,
Textarea,
  Avatar,
  Center,
} from '@chakra-ui/react'
// import { SmallCloseIcon } from '@chakra-ui/icons'

export default function UserProfileEdit() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile Edit
        </Heading>
        <FormControl id="userName">
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo"/>
            </Center>
            <Center w="full">
              <Button w="full">Change Avatar</Button>
            </Center>
          </Stack>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            placeholder="Full Name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="user-name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>

        <FormControl  isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>

        <FormControl  isRequired>
          <FormLabel>Bio</FormLabel>
          <Textarea
            placeholder="Your bio info"
            _placeholder={{ color: 'gray.500' }}
            
          />
        </FormControl>

        <FormControl  isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
          />
        </FormControl>

        <Stack spacing={6} direction={['column', 'row']}>

          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancel
          </Button>

          <Button
            bg={'purple.600'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'purple.500',
            }}>
            Submit
          </Button>

        </Stack>
      </Stack>
    </Flex>
  )
}