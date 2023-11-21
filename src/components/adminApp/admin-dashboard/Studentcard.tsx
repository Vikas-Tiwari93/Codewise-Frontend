import React from "react";
import styled from "styled-components";
import Image from "../../common/Image";
import Topography from "../../common/Topography";
const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 700px;
  border: 1px solid silver;
  border-radius: 10px;
  padding: 15px;
  .personalInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .personaldetails {
    padding: 15px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .classDetails {
    width: 100%;
    max-height: 250px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .detailfraction {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
  }
  .span {
    grid-column: 1/4;
  }
`;
type StudentCardsProps = {
  student: object | null;
};
export default function Studentcard({ student }: StudentCardsProps) {
  return (
    <StudentInfo>
      <div className="personalInfo">
        <span>
          <Image
            name="studentImg"
            width="100px"
            height="100px"
            isCircle={true}
            type="download"
            url="/public/images/logo.png"
          />
        </span>

        <div className="personaldetails">
          <div className="detailfraction">
            <Topography varient="h3">Name</Topography>
            <Topography varient="subtitle2" textEllipses={true}>
              : Vikas Tiwari
            </Topography>
          </div>
          <div>
            <div className="detailfraction">
              <Topography varient="h3">Email</Topography>{" "}
              <Topography varient="subtitle2" textEllipses={true}>
                : vikast581@gmail.com
              </Topography>
            </div>
          </div>
          <div>
            <div className="detailfraction">
              <Topography varient="h3">Class</Topography>{" "}
              <Topography varient="subtitle2" textEllipses={true}>
                : C9
              </Topography>
            </div>
          </div>
          <div>
            <div className="detailfraction">
              <Topography varient="h3">DOB</Topography>{" "}
              <Topography varient="subtitle2" textEllipses={true}>
                : 25/04/1993
              </Topography>
            </div>
          </div>
          <div>
            <div className="detailfraction">
              <Topography varient="h3">Total Tasks</Topography>
              <Topography varient="subtitle2" textEllipses={true}>
                : 0
              </Topography>
            </div>
          </div>
          <div>
            <div className="detailfraction">
              <Topography varient="h3">Completed</Topography>
              <Topography varient="subtitle2" textEllipses={true}>
                : 0
              </Topography>
            </div>
          </div>
        </div>
      </div>
      <div className="classDetails">
        <div className="detailfraction">
          <Topography varient="h3">Current Projects</Topography>
          <Topography varient="subtitle2" textEllipses={true}>
            : 0
          </Topography>
        </div>
        <div className="detailfraction">
          <Topography varient="h3">Future Projects</Topography>
          <Topography varient="subtitle2" textEllipses={true}>
            : 0
          </Topography>
        </div>
        <div className="detailfraction">
          <Topography varient="h3">Completed Projects</Topography>
          <Topography varient="subtitle2" textEllipses={true}>
            : 0
          </Topography>
        </div>
        <div className="detailfraction span">
          <Topography varient="h4">Incomplete assignments</Topography>
          <Topography varient="h4">Issues</Topography>
        </div>
      </div>
    </StudentInfo>
  );
}
