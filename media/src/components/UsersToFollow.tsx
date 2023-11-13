import {
  Text,
  Heading,
  Grid,
  GridItem,
  Avatar,
  Button,
  Card,
  Flex,
  Box,
  Center,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

const UsersToFollow = () => {
  // Sample user data
  const users = [
    {
      id: 1,
      name: "John Doe",
      username: "@johndoe",
      avatar: "https://example.com/avatar1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "@janesmith",
      avatar: "https://example.com/avatar2.jpg",
    },
    {
      id: 3,
      name: "Jane Smith",
      username: "@johnDoe",
      avatar: "https://example.com/avatar2.jpg",
    },
    {
      id: 4,
      name: "Jane Smith",
      username: "@Michealsmith",
      avatar: "https://example.com/avatar2.jpg",
    },
    // Add more user data here
  ];

  return (
    <Card
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      shadow="md"
      bg="#3c096c"
      width={"100%"}
    >
      <Heading size="md" mb={3} color={"white"}>
        Users to Follow
      </Heading>
      <Grid templateRows="repeat(3, 1fr)" gap={3}>
        {users.map((user) => (
          <GridItem key={user.id} bg="#7b2cbf" borderRadius="lg">
            <Flex direction="row" alignItems="center" p={2} gap={3}>
              <Avatar size="md" name={user.name} src={faker.image.avatar()} />
              <Box width={"100%"}>
                <Text color="white" fontSize="sm" isTruncated>
                  {user.username}
                </Text>
              </Box>
              <Center width={"100%"}>
                <Button
                  color="white"
                  boxShadow="0 0 10px rgba(0, 0, 0, 0.2)"
                  transition="0.2s"
                  bg="#5a189a"
                  size="sm"
                  // Add an onClick handler to follow the user
                  //   onClick={() => followUser(user.id)}
                >
                  Follow
                </Button>
              </Center>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Card>
  );
};

export default UsersToFollow;
