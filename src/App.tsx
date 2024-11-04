import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { Login } from './components/Login'
import { AuthProvider } from './AuthContext'
import PrivateRoute from './components/PrivateRoute'
import { Main } from './components/Main'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = { <Layout></Layout> }>
            <Route index element = { <PrivateRoute><Main></Main></PrivateRoute> }></Route>
            <Route path = "/login" element = { <Login></Login> }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
