import { DataTable } from "@/components/data-table";
import { columns } from "@/lib/data";

export function Teachers() {
  return (
    <div className="w-full p-4">
      <div className="mt-4">
        <h1 className="text-2xl font-bold">
          Welcome to Madrasa Web App - Teachers Management
        </h1>
        <p className="mt-2">Manage teachers and their departments here...</p>
      </div>

      {/* create a datatable for teachers */}
      <div className="pt-4">
        <DataTable
          columns={columns}
          data={[
            { name: "John Doe", email: "john@example.com", department: "Math" },
            { name: "Jane Smith", email: "jane@example.com", department: "Science" },
            { name: "Bob Johnson", email: "bob@example.com", department: "English" },
            { name: "Alice Brown", email: "alice@example.com", department: "History" },
            { name: "Charlie Wilson", email: "charlie@example.com", department: "Physics" },
            { name: "Eve Davis", email: "eve@example.com", department: "Chemistry" },
            { name: "Frank Garcia", email: "frank@example.com", department: "Biology" },
            { name: "Grace Lee", email: "grace@example.com", department: "Geography" },
            { name: "Henry Martinez", email: "henry@example.com", department: "Literature" },
            { name: "Jack Anderson", email: "jack@example.com", department: "Art" },
            { name: "Kate Clark", email: "kate@example.com", department: "Music" },
            { name: "Liam Walker", email: "liam@example.com", department: "Computer Science" },
            { name: "Mia Hall", email: "mia@example.com", department: "Physical Education" },
            { name: "Noah Young", email: "noah@example.com", department: "Psychology" },
            { name: "Olivia King", email: "olivia@example.com", department: "Philosophy" },
            { name: "Paul Scott", email: "paul@example.com", department: "Economics" },
            { name: "Quinn Reed", email: "quinn@example.com", department: "Political Science" },
            { name: "Ryan Cox", email: "ryan@example.com", department: "Sociology" },
            { name: "Sophia Morgan", email: "sophia@example.com", department: "Anthropology" },
            { name: "Thomas Baker", email: "thomas@example.com", department: "Architecture" },
            { name: "Uma Carter", email: "uma@example.com", department: "Fine Arts" },
            { name: "Victor Phillips", email: "victor@example.com", department: "Drama" },
            { name: "Wendy Roberts", email: "wendy@example.com", department: "Culinary Arts" },
            { name: "Xander Turner", email: "xander@example.com", department: "Design" },
            { name: "Yara Phillips", email: "yara@example.com", department: "Journalism" },
            { name: "Zoe Edwards", email: "zoe@example.com", department: "Marketing" },
            { name: "Aaron Turner", email: "aaron@example.com", department: "Data Science" },
          ]}
          filterColumn="email"
        />
      </div>
    </div>
  );
}

export default Teachers;
