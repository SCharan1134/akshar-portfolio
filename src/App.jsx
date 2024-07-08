import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LogosPage from "./pages/LogosPage";
import PostsPage from "./pages/PostsPage";
import PostersPage from "./pages/PostersPage";

export default function App() {
  return (
    <Routes>
      <Route index path="*" element={<Homepage />} />
      <Route path="/logos" element={<LogosPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posters" element={<PostersPage />} />
    </Routes>
  );
}
