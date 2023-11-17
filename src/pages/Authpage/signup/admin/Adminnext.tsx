import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Input from "../../../../components/common/Input";
import { AdminSignupForm, ContextType } from "../Signup";
import Buttons from "../../../../components/common/Buttons";
import { IoArrowBack } from "react-icons/io5";
import Topography from "../../../../components/common/Topography";
import styled from "styled-components";
import ImageUpload from "../../../../components/common/ImageUpload";
import SelecterInputs from "../../../../components/common/SelecterInputs";
import { securityQuestions } from "../../../../constants/auth";
import Checkbox from "../../../../components/common/Checkbox";

import { SignUpasAdminService } from "../../../../services/pagesAPI/auth/apiService";

import { useMutationWhitToastAndNavigation } from "../../../../hooks/reactQuery";
const StyledAdminform = styled.div`
  padding: 10px;

  & .imageContainer {
    display: flex;
    justify-content: center;
  }
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
  & .agreement {
    font-weight: 700;
    margin-top: 5px;
    grid-column: 1/3;
  }
  .submit {
    margin-top: 7px;
    display: flex;
    justify-content: center;
  }
`;

export default function Adminnext() {
  const navigate = useNavigate();
  const { control, handleSubmit, errors } = useOutletContext<ContextType>();
  const submitfn = handleSubmit((data) => {
    const signUpData = { ...data } as Partial<AdminSignupForm>;
    console.log(signUpData);
    delete signUpData.gender;
    delete signUpData.DOB;
    signUpData.organisationName =
      signUpData.firstName || "" + signUpData.lastName || "";

    SignupAdminMutation.mutate(signUpData);
  });
  const [securityQn, setSecurityQn] = useState("");
  const radioInput = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
  ];

  const SignupAdminMutation = useMutationWhitToastAndNavigation(
    SignUpasAdminService,
    "/",
    true
  );

  return (
    <StyledAdminform>
      <div
        className="goback"
        onClick={() => {
          navigate("/auth/signup/admin");
        }}
      >
        <IoArrowBack size={19} /> <Topography varient="h3">Go back</Topography>
      </div>
      <div className="imageContainer">
        <ImageUpload
          width="100px"
          height="100px"
          isCircle={true}
          name="attachment"
          control={control}
        />
      </div>
      <div className="mainForm">
        <Topography varient="h3">Date of birh</Topography>
        <Input label="dd/mm/yyyy" name="DOB" control={control} />
        <Topography varient="h3">Gender</Topography>
        <SelecterInputs
          name="gender"
          control={control}
          type="radio"
          options={radioInput}
          helperText={errors.gender?.message}
        />
        <Topography varient="h3">Security Qn.</Topography>
        <SelecterInputs
          name="secutity"
          type="select"
          options={securityQuestions}
          onUncontrolledChange={setSecurityQn}
        />
        <Topography varient="h3">Answer</Topography>
        <Input
          label="Answer"
          name={securityQn}
          control={control}
          disabled={!securityQn}
        />
        <span className="agreement">
          <Checkbox
            defaultValue={false}
            control={control}
            name="isAgreement"
            type="checkbox"
            varient="outlined"
            label="We abide to protect your personal Info but we take no responsibility in case of data breech"
            helperText={errors.isAgreement?.message}
          />
        </span>
      </div>
      <div className="submit">
        <Buttons
          title={"submit"}
          width="medium"
          onClick={submitfn}
          isLoading={SignupAdminMutation.isPending}
        />
      </div>
    </StyledAdminform>
  );
}
