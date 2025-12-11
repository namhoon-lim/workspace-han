import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { routes } from './config/routes'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={route.element} 
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
