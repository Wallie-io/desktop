import "./App.css";
import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import PostPage from "./pages/PostPage"
import Header from "./components/Header"
import SignIn from "./pages/registration/SignIn";
import Signup from "./pages/registration/Signup";
import ResetPassword from "./pages/registration/ResetPassword";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <Container maxWidth="1256px">
      <Header />
      <Routes>
       <Route path="/" element={<HomePage />}/>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/:username/post/:id" element={<PostPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/update" element={<UpdateProfilePage />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
      <LogoutButton />
    </Container>
  );
}

export default App;
