import type { ColumnDef } from "@tanstack/react-table"

export type User = {
  name: string
  email: string
  department: string
}

export const columns: Array<ColumnDef<User>> = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>,
  },
]
