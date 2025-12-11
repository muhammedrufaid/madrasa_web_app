import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

import Home from "@/pages/Home" 
import Attendance from "./pages/Attendance"

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />

        <main className="w-full p-4">
          {/* <nav className="flex gap-4">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <Link to="/about" className="text-blue-600 hover:underline">About</Link>
          </nav> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attendance" element={<Attendance />} />
          </Routes>
        </main>
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App