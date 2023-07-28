import './styles.module.scss'
import { AuthProvider } from './hoc/AuthProvider'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import SelectedPost from './pages/SelectedPostPage/SelectedPost';
import SignIn from './pages/SignInPage/SignIn';
import SignUp from './pages/SignUpPage copy/SignUp';
import Success from './pages/SuccessPage/Success';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='SelectedPost/:id' element={<SelectedPost />} />
            <Route path='SignIn' element={<SignIn />} />
            <Route path='SignUp' element={<SignUp />} />
            <Route path='Success' element={<Success />} />
            <Route path='*' element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
