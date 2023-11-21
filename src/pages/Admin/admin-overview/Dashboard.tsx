import { useState } from "react";
import Adminheader from "../../../components/adminApp/admin-dashboard/Adminheader";
import Students from "../../../components/adminApp/admin-dashboard/Students";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
  const [studentData, setStudentData] = useState("");
  const [classData, setClassData] = useState("");
  return (
    <>
      <Adminheader
        setStudentData={setStudentData}
        studentData={studentData}
        setClassData={setClassData}
        classData={classData}
      />
      <Students studentData={studentData} classData={classData} />
    </>
  );
}
