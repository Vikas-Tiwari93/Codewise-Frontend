import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import Studentcard from "./Studentcard";
import { MoonLoader } from "react-spinners";
import { AppThemeContext } from "../../../themes/ThemeProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import SmallCards from "./SmallCards";

const StudentMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  border: 1px solid silver;
  width: 100%;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 10px;
  overflow-y: scroll;
`;
type StudentsProps = {
  studentData: string;
  classData: string;
};
export default function Students({ studentData, classData }: StudentsProps) {
  const { theme } = useContext(AppThemeContext);
  const [isLoading, setisLoading] = useState(false);
  const [student, setStudent] = useState(null);
  const [displayDataOf, setDisplayDataOf] = useState("totalclasses");
  const studentDataMutation = useMutation();
  const classDataMutation = useMutation();
  const totalClassDataQuery = useQuery();
  return (
    <StudentMain>
      {isLoading ? (
        <MoonLoader size={`70`} color={theme === "dark" ? "silver" : "grey"} />
      ) : (
        <>
          {displayDataOf === "totalclasses" &&
            totalClassDataQuery.isFetched && <SmallCards type="student" />}
          {displayDataOf === "studentData" && studentDataMutation.isSuccess && (
            <Studentcard student={student} />
          )}
          {displayDataOf === "classData" && classDataMutation.isSuccess && (
            <SmallCards type="class" />
          )}
        </>
      )}
    </StudentMain>
  );
}
