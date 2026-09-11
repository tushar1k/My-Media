import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import FeedPage from "./pages/FeedPage";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/feed" />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </>
  );
}

export default App;