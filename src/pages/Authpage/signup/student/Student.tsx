import React from "react";
import { IoArrowBack } from "react-icons/io5";
import styled from "styled-components";
import Topography from "../../../../components/common/Topography";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ContextType } from "../Signup";
import Buttons from "../../../../components/common/Buttons";
import Input from "../../../../components/common/Input";
const StyledSignup = styled.div`
  padding: 10px;
  & .goback {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 7px;
    border-radius: 7px;
  }
  & .goback:hover {
    background: grey;
    cursor: pointer;
  }
  & .goback:active {
    opacity: 0.7;
  }
  & .mainForm {
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    place-item: centre;
  }
  .nextPage {
    margin-top: 15px;
    grid-column: 1/3;
    display: flex;
    justify-content: center;
  }
`;
export default function Student() {
  const navigate = useNavigate();
  const { setsignupAs, control } = useOutletContext<ContextType>();
  return (
    <StyledSignup>
      <div
        className="goback"
        onClick={() => {
          navigate("/auth/signup/select");
          setsignupAs("");
        }}
      >
        <IoArrowBack size={19} /> <Topography varient="h3">Go back</Topography>
      </div>
      <div className="mainForm">
        <Topography varient="h3">First Name</Topography>
        <Input label="FirstName" name="firstName" control={control} />
        <Topography varient="h3">Last Name</Topography>
        <Input label="LastName" name="lastName" control={control} />
        <Topography varient="h3">User Name</Topography>
        <Input label="UserName" name="userName" control={control} />
        <Topography varient="h3">Password</Topography>
        <Input
          label="Password"
          name="password"
          control={control}
          type="password"
        />
        <Topography varient="h3">Confirm Password</Topography>
        <Input
          label="Confirm Password"
          name="confirmPassword"
          control={control}
        />
        <Topography varient="h3">Connet to Organisation ID</Topography>
        <Input
          label="Organisation ID"
          name="organisationID"
          control={control}
        />
        <Topography varient="h3">Give an active Email ID</Topography>
        <Input label="Create Organisation ID" name="email" control={control} />
        <div className="nextPage">
          <Buttons
            title={"nextpage"}
            width="medium"
            onClick={() => navigate("/auth/signup/student/nextpage")}
          />
        </div>
      </div>
    </StyledSignup>
  );
}
