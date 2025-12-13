import type { ColumnDef } from "@tanstack/react-table";

type UserStatus = "active" | "inactive";

export type User = {
  id: string; // UUID
  user_id: string; // FK to users
  name: string;
  department: string;
  qualification: string;
  joining_date: string; // Date in ISO format (YYYY-MM-DD)
  status: UserStatus;
};

export const teachersData: User[] = [
  {
    id: "1",
    user_id: "user_1",
    name: "Ahmed Khan",
    department: "Quran",
    qualification: "Hafiz-ul-Quran, Ijazah in Qira'at",
    joining_date: "2020-01-15",
    status: "active",
  },
  {
    id: "2",
    user_id: "user_2",
    name: "Fatima Ali",
    department: "Fiqh",
    qualification: "Alimiyyah Degree, Specialization in Fiqh",
    joining_date: "2019-05-22",
    status: "active",
  },
  {
    id: "3",
    user_id: "user_3",
    name: "Yusuf Abdullah",
    department: "Hadeeth",
    qualification: "Masters in Hadith Sciences",
    joining_date: "2021-03-10",
    status: "active",
  },
  {
    id: "4",
    user_id: "user_4",
    name: "Aisha Mohammed",
    department: "Arabic",
    qualification: "PhD in Arabic Language and Literature",
    joining_date: "2018-11-05",
    status: "active",
  },
  {
    id: "5",
    user_id: "user_5",
    name: "Omar Farooq",
    department: "Islamic History",
    qualification: "MA in Islamic History and Civilization",
    joining_date: "2022-02-18",
    status: "active",
  },
  {
    id: "6",
    user_id: "user_6",
    name: "Maryam Ibrahim",
    department: "Quran",
    qualification: "Hafiza, Qaria with Ijazah in Hafs 'an 'Asim",
    joining_date: "2021-07-10",
    status: "active",
  },
  {
    id: "7",
    user_id: "user_7",
    name: "Khalid Hassan",
    department: "Fiqh",
    qualification: "Alim Course, Specialization in Hanafi Fiqh",
    joining_date: "2020-09-15",
    status: "active",
  },
];

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "user_id",
    header: "User ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "qualification",
    header: "Qualification",
  },
  {
    accessorKey: "joining_date",
    header: "Joining Date",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  // {
  //   accessorKey: "actions",
  //   header: "",
  // },
];
