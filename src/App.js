import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Account from './Pages/Account';
import ProtectedRoute from './Components/ProtectedRoute';
import SignUp from './Pages/SignUp';
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;