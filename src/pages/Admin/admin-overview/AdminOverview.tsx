import React from "react";
import styled from "styled-components";
import LeftColumn from "../../../components/adminApp/admin-overview/LeftColumn";

import Adminheader from "../../../components/adminApp/admin-overview/Adminheader";
import Topics from "../../../components/adminApp/admin-overview/Topics";
import Students from "../../../components/adminApp/admin-overview/Students";
import AdminNavbar from "../../../components/adminApp/admin-overview/AdminNavbar";

const Divmain = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px;
  margin: 10px;
  display: flex;
  gap: 10px;
  .overviewbody {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default function AdminOverview() {
  return (
    <Divmain>
      <LeftColumn />
      <div className="overviewbody">
        <AdminNavbar />
        <Adminheader />
        <Topics />
        <Students />
      </div>
    </Divmain>
  );
}
