import { StudentForm } from "../StudentForm";

export function AddStudents() {
  return (
    <div className="flex items-center justify-center w-full">
      <StudentForm mode="ADD" />
    </div>
  );
}

export default AddStudents;
