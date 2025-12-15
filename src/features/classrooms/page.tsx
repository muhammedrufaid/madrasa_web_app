import { DataTable } from "@/components/data-table";
import { classroomColumns, classroomData } from "@/lib/data";

export function ClassRooms() {
  return (
    <div className="w-full bg-white p-[20px_30px] rounded-[20px]">
      <div className="mt-4">
        <h1 className="text-2xl font-bold">
          Welcome to Madrasa Web App - Class Rooms Management
        </h1>
        <p className="mt-2">Manage class rooms here...</p>
      </div>

      {/* create a datatable for teachers */}
      <div className="pt-4">
        <DataTable
          columns={classroomColumns}
          data={classroomData}
          filterColumn="name"
          entityType="classroom"
          onRemove={async (id) => {
            // TODO: Replace with your actual API call
            console.log("Removing classroom with ID:", id);
            // Example API call (uncomment when you're ready to implement):
            // await fetch(`/api/classrooms/${id}`, { method: 'DELETE' });
            // Refresh the data after removal
            // fetchTeachers();
          }}
        />
      </div>
    </div>
  );
}

export default ClassRooms;
