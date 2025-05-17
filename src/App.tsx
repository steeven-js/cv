
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import HomePage from './pages/HomePage';
import CV1 from './pages/CV1';
import CV2 from './pages/CV2';
import CV3 from './pages/CV3';
import CV4 from './pages/CV4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <DashboardLayout>
            <HomePage />
          </DashboardLayout>
        } />
        <Route path="/cv1" element={
          <DashboardLayout>
            <CV1 />
          </DashboardLayout>
        } />
        <Route path="/cv2" element={
          <DashboardLayout>
            <CV2 />
          </DashboardLayout>
        } />
        <Route path="/cv3" element={
          <DashboardLayout>
            <CV3 />
          </DashboardLayout>
        } />
        <Route path="/cv4" element={
          <DashboardLayout>
            <CV4 />
          </DashboardLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App
