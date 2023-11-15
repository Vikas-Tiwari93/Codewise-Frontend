import React from "react";
import Topography from "../../../../components/common/Topography";
import Buttons from "../../../../components/common/Buttons";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { ContextType } from "../Signup";
const StyledSelect = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  & .button {
    display: flex;
    justify-content: center;
  }
`;

export default function Select() {
  const navigate = useNavigate();
  const { setsignupAs } = useOutletContext<ContextType>();
  return (
    <StyledSelect>
      <div className="eachSelect">
        <Topography varient="subtitle3">
          Sign Up as a Admin to watch over group of coders through an admin Id
        </Topography>
        <div className="button">
          <Buttons
            title={"Sign Up as Admin"}
            width="medium"
            onClick={() => {
              navigate("/auth/signup/admin");
              setsignupAs(" as admin");
            }}
          ></Buttons>
        </div>
      </div>
      <div className="eachSelect">
        <Topography varient="subtitle3">
          Sign Up as a student to associate with an admin through unique admin
          Id
        </Topography>
        <div className="button">
          <Buttons
            title={"Sign Up as Student"}
            width="medium"
            onClick={() => {
              navigate("/auth/signup/student");
              setsignupAs(" as student");
            }}
          ></Buttons>
        </div>
      </div>
    </StyledSelect>
  );
}
