import { DataTable } from "@/components/data-table";
import { staffColumns, staffData } from "@/lib/data";

export function Staffs() {
  return (
      <div className="w-full bg-white p-[20px_30px] rounded-[20px]">
        <div className="mt-4">
          <h1 className="text-2xl font-bold">
            Welcome to Madrasa Web App - Staff Management
          </h1>
          <p className="mt-2">Manage staff and their departments here...</p>
        </div>
  
        {/* create a datatable for teachers */}
        <div className="pt-4">
         <DataTable
            columns={staffColumns}
            data={staffData}
            filterColumn="name"
            entityType="staff"
            onRemove={async (id) => {
              // TODO: Replace with your actual API call
              console.log("Removing staff with ID:", id);
              // Example API call (uncomment when you're ready to implement):
              // await fetch(`/api/teachers/${id}`, { method: 'DELETE' });
              // Refresh the data after removal
              // fetchTeachers();
            }}
          />
        </div>
      </div>
    );
}

export default Staffs
