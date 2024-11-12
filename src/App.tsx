import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Login } from './auth/components/Login'
import { AuthProvider } from './auth/AuthContext'
import PrivateRoute from './auth/components/PrivateRoute'
import { Main } from './components/Main'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<PrivateRoute><Main></Main></PrivateRoute>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
