import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import blog from "../assets/Blogchat.jpg";
import project from "../assets/project.jpg";
import flask from "../assets/flask.png";
import {
  Box,
  Grid,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import UsersToFollow from "../components/UsersToFollow";

const UserPage = () => {
  const gridColumnLeft = useBreakpointValue({ base: "1", sm: "1", md: "auto" });
  const gridColumnRight = useBreakpointValue({
    base: "2",
    sm: "2",
    md: "auto",
  });
  const templateColumns = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "60% 40%",
  });

  return (
    <>
      <UserHeader />
      <Grid templateColumns={templateColumns} gap={4}>
        {/* Left Side */}
        <Box gridColumn={gridColumnLeft}>
          {/* Your post elements */}
          <UserPost
            likes={1200}
            replies={481}
            postImg={blog}
            postTitle="lets talk about posts"
          />
          <UserPost
            likes={250}
            replies={81}
            postImg={project}
            postTitle="lets talk about work space and team building"
          />
          <UserPost
            likes={900}
            replies={281}
            postImg={flask}
            postTitle="lets talk about flask and python"
          />
          <UserPost
            likes={900}
            replies={281}
            postTitle="lets talk about why herman cant land a job"
            postImg={""}
          />
        </Box>

        {/* Right Side */}
        <Box gridColumn={gridColumnRight}>
          <VStack align="start" spacing={4} p={10}>
            {/* Elements inside the right side in a column layout */}
            {/*FEED GOES HERE, USERS TO FOLLOW GOES HERE, NEWS */}
            <UsersToFollow />
          </VStack>
        </Box>
      </Grid>
    </>
  );
};

export default UserPage;
