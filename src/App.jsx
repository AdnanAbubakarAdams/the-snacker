import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import DirectoryPage from './pages/DirectoryPage/DirectoryPage';
import MemberDetailPage from './pages/MemberDetailPage/MemberDetailPage';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<DirectoryPage />} />
        <Route path="/member/:id" element={<MemberDetailPage />} />
      </Routes>
    </>
  )
}