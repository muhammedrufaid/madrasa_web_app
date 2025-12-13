import type { ColumnDef } from "@tanstack/react-table"

export type User = {
  id: string
  name: string
  email: string
  department: string
}

export const teachersData: User[] = [
  { id: '1', name: "John Doe", email: "john@example.com", department: "Math" },
  { id: '2', name: "Jane Smith", email: "jane@example.com", department: "Science" },
  { id: '3', name: "Bob Johnson", email: "bob@example.com", department: "English" },
  { id: '4', name: "Alice Brown", email: "alice@example.com", department: "History" },
  { id: '5', name: "Charlie Wilson", email: "charlie@example.com", department: "Physics" },
  { id: '6', name: "Eve Davis", email: "eve@example.com", department: "Chemistry" },
  { id: '7', name: "Frank Garcia", email: "frank@example.com", department: "Biology" },
  { id: '8', name: "Grace Lee", email: "grace@example.com", department: "Geography" },
  { id: '9', name: "Henry Martinez", email: "henry@example.com", department: "Literature" },
  { id: '10', name: "Jack Anderson", email: "jack@example.com", department: "Art" },
  { id: '11', name: "Kate Clark", email: "kate@example.com", department: "Music" },
  { id: '12', name: "Liam Walker", email: "liam@example.com", department: "Computer Science" },
  { id: '13', name: "Mia Hall", email: "mia@example.com", department: "Physical Education" },
  { id: '14', name: "Noah Young", email: "noah@example.com", department: "Psychology" },
  { id: '15', name: "Olivia King", email: "olivia@example.com", department: "Philosophy" },
  { id: '16', name: "Paul Scott", email: "paul@example.com", department: "Economics" },
  { id: '17', name: "Quinn Reed", email: "quinn@example.com", department: "Political Science" },
  { id: '18', name: "Ryan Cox", email: "ryan@example.com", department: "Sociology" },
  { id: '19', name: "Sophia Morgan", email: "sophia@example.com", department: "Anthropology" },
  { id: '20', name: "Thomas Baker", email: "thomas@example.com", department: "Architecture" },
  { id: '21', name: "Uma Carter", email: "uma@example.com", department: "Fine Arts" },
  { id: '22', name: "Victor Phillips", email: "victor@example.com", department: "Drama" },
  { id: '23', name: "Wendy Roberts", email: "wendy@example.com", department: "Culinary Arts" },
  { id: '24', name: "Xander Turner", email: "xander@example.com", department: "Design" },
  { id: '25', name: "Yara Phillips", email: "yara@example.com", department: "Journalism" },
  { id: '26', name: "Zoe Edwards", email: "zoe@example.com", department: "Marketing" },
  { id: '27', name: "Aaron Turner", email: "aaron@example.com", department: "Data Science" }
];

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  // {
  //   accessorKey: "actions",
  //   header: "",
  // },
]


