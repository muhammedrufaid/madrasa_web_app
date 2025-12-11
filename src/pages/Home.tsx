import { SidebarTrigger } from "@/components/ui/sidebar"

export function Home() {
  return (
    <div className="w-full p-4">
      <SidebarTrigger />

      <div className="mt-4">
        <h1 className="text-2xl font-bold">Welcome to Madrasa Web App</h1>
        <p className="mt-2">Your content goes here...</p>
      </div>
    </div>
  )
}

export default Home
