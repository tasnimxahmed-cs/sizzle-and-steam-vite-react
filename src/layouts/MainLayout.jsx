import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar' 
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      <Navbar />
      <main className="flex-grow flex flex-col justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
