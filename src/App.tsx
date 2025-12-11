import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-4">
        <SidebarTrigger />
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Welcome to Madrasa Web App</h1>
          <p className="mt-2">Your content goes here...</p>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default App