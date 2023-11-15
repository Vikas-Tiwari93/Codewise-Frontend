import React from "react";
import styled from "styled-components";
import Topography from "../../../../components/common/Topography";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ContextType } from "../Signup";
import Input from "../../../../components/common/Input";
import Buttons from "../../../../components/common/Buttons";

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

export default function Admin() {
  const navigate = useNavigate();
  const { setsignupAs, control, errors } = useOutletContext<ContextType>();
  console.log(control);
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
        <Input
          label="FirstName"
          name="firstName"
          control={control}
          helperText={errors.firstName?.message}
        />
        <Topography varient="h3">Last Name</Topography>
        <Input
          label="LastName"
          name="lastName"
          control={control}
          helperText={errors.lastName?.message}
        />
        <Topography varient="h3">User Name</Topography>
        <Input
          label="UserName"
          name="userName"
          control={control}
          helperText={errors.userName?.message}
        />
        <Topography varient="h3">Password</Topography>
        <Input
          label="Password"
          name="password"
          control={control}
          type="password"
          helperText={errors.password?.message}
        />
        <Topography varient="h3">Confirm Password</Topography>
        <Input
          label="Confirm Password"
          name="confirmPassword"
          control={control}
          helperText={errors.confirmPassword?.message}
        />
        <Topography varient="h3">Create unique Organisation ID</Topography>
        <Input
          label="Create Organisation ID"
          name="organisationId"
          control={control}
          helperText={errors.organisationId?.message}
        />
        <Topography varient="h3">Give an active Email ID</Topography>
        <Input
          label="Create Organisation ID"
          name="email"
          control={control}
          helperText={errors.email?.message}
        />
        <div className="nextPage">
          <Buttons
            title={"nextpage"}
            width="medium"
            onClick={() => navigate("/auth/signup/admin/nextpage")}
          />
        </div>
      </div>
    </StyledSignup>
  );
}
