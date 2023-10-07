import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from './utils/context'
import ProtectedRoute from './components/ProtectedRoute';
import Index from './pages/Index'
import Home from './pages/Home'
import Header from './components/Header'

const App = () => {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
  return (
    <>

      <BrowserRouter>
        {isLoggedIn ? <Header /> : ''}

        <Routes>
          <Route index element={<Index />} />
          <Route element={<ProtectedRoute />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
