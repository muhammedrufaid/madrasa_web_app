import { Calendar, Home, Search, Settings, Users, Users2, Users2Icon } from "lucide-react"
import { NavLink } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Attendance",
    url: "/attendance",
    icon: Search,
  },
  {
    title: "ClassRooms",
    url: "/classrooms",
    icon: Calendar,
  },
  {
    title: "Accounts and Fees",
    url: "/accounts-and-fees",
    icon: Calendar,
  },
  {
    title: "Students",
    url: "/students",
    icon: Users2,
  },
  {
    title: "Teachers",
    url: "/teachers",
    icon: Users,
  },
  {
    title: "Staffs",
    url: "/staffs",
    icon: Users2Icon,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Madrass Management</SidebarGroupLabel>
          <div>
            <SidebarTrigger />
          </div>
          <SidebarGroupContent className="p-3">
            <SidebarMenu className=" flex flex-col gap-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        `flex items-center gap-2 rounded-md p-[20px_10px]! transition-colors text-[18px] ${
                          isActive
                            ? "bg-[#fd5d5d] text-white"
                            : "text-gray-700 hover:bg-[#fd5d5d]! hover:text-white!"
                        }`
                      }
                    >
                      <item.icon className="w-10 h-10 shrink-0" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}