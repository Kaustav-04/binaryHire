import Assigner from "./components/Assigner/Assigner";
import Dashboard from "./components/Freelancer/Dashboard";
import About from "./components/Home/About";
import Authorize from "./components/Home/Authorize";
import Details from "./components/Home/Details";
import Landing from "./components/Home/Landing";
import PostProject from "./components/Home/PostProject";
import Post from "./components/UI/Post";
import Navigation from "./pages/Navigation";

export default function App() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Navigation />
    </main>
  );
}
