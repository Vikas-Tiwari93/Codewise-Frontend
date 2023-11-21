import React, { useState } from "react";
import styled from "styled-components";
import Topography from "../../common/Topography";
import Buttons from "../../common/Buttons";
import { useNavigate } from "react-router-dom";

const AdminNav = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid grey;
  justify-content: space-between;
  padding: 5px;
  .navlinks {
    display: flex;
    gap: 20px;
  }
  .classselected {
    font-weight: 600;
    color: #4495ed;
  }
  .notselected:hover {
    background: silver;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.7;
  }
`;
export default function AdminNavbar() {
  const navigate = useNavigate();
  const [selected, setselected] = useState(0);
  const tabs = [
    { name: "Dashbord", link: "/admin/homepage/dashboard" },
    { name: "Classes", link: "/admin/homepage/classes" },
    { name: "Assignments", link: "/admin/homepage/assignments" },
    { name: "Topics", link: "/admin/homepage/topics" },
  ];
  return (
    <AdminNav>
      <div className="navlinks">
        {tabs.map((elm, index) => {
          return (
            <Topography
              className={selected === index ? "classselected" : "notselected"}
              varient="subtitle2"
              onClick={() => {
                navigate(elm.link);
                setselected(index);
              }}
            >
              {elm.name}
            </Topography>
          );
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
