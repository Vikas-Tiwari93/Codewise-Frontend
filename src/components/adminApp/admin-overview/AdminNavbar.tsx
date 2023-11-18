import React from "react";
import styled from "styled-components";
import Topography from "../../common/Topography";
import Buttons from "../../common/Buttons";

const AdminNav = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
  justify-content: space-between;
  padding: 5px;
  .navlinks {
    display: flex;
    gap: 20px;
  }
`;
export default function AdminNavbar() {
  const tabs = [
    { name: "Dashbord", link: "/admin/homepage/overview" },
    { name: "Classes", link: "/admin/homepage/overview" },
    { name: "Assignments", link: "/admin/homepage/overview" },
    { name: "Dashbord", link: "/admin/homepage/overview" },
  ];
  return (
    <AdminNav>
      <div className="navlinks">
        {tabs.map((elm) => {
          return <Topography varient="subtitle2">{elm.name}</Topography>;
        })}
      </div>
      <Buttons
        title={"Sign out"}
        width="small"
        varient="contained"
        onClick={() => {}}
      />
    </AdminNav>
  );
}
