import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './app.router.jsx'
import { AuthProvider } from './features/auth/auth.context.jsx'

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
