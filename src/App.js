import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesList from './pages/CoursesList';
import FavoritesPage from './pages/FavoritesPage';
import CourseDetail from './pages/CourseDetail';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyBookingsPage from './pages/MyBookingsPage';
import TrainingsList from './pages/TrainingsList';
import BookingPage from './pages/BookingPage';
import About from "./pages/About";
import Contacts from "./pages/Contacts";


function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesList />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> 
            <Route path="/bookings" element={<MyBookingsPage />} />
            <Route path="/trainings" element={<TrainingsList />} />
            <Route path="/book/:id" element={<BookingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
