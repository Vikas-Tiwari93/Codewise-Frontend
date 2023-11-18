import { styled } from "styled-components";

import { useState } from "react";
import ProfileImage from "../../common/Image";
import Topography from "../../common/Topography";

const Cards = styled.div`
  height: 5rem;
  padding: 15px 10px;
  margin: 5px 10px;
  border: 1px solid silver;
  display: flex;
  border-radius: 0.7rem;
  align-items: center;
  justify-content: centre;
`;
type LeftColumn = {
  $bgcolor: string;
};
const AsideMain = styled.div<LeftColumn>`
  height: 100%;
  border: 1px solid silver;
  display: flex;
  border-radius: 0.7rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .profile {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .options {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
  }

  & #imagebg {
    border: 1px solid silver;
    background-color: ${(props) => props.$bgcolor};
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & #imagebg div {
    width: 85%;
    height: 85%;
    background-color: white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & #details {
    display: grid;
    grid-template-columns: 0.6fr 1.4fr;
    margin: 0.7rem;
  }
`;

export default function LeftColumn() {
  const [details] = useState({
    name: "Vikas Tiwari",
    email: "abASDFGHSDFGc@gmail.com",
    classId: 123456,
  });
  const cards = [
    { label: "Good practices for a topic", link: "" },
    { label: "Bad practices for a topic", link: "" },
    { label: "Responsiveness Designs ", link: "" },
    { label: "Major Achievements Pool", link: "" },
    { label: "Post your problem", link: "" },
    { label: "Good practices for a topic", link: "" },
    { label: "Good practices for a topic", link: "" },
  ];
  return (
    <AsideMain $bgcolor={"green"}>
      <div className="profile">
        <div id="imagebg">
          <ProfileImage
            type="download"
            width="95%"
            height="95%"
            name="profile"
          />
        </div>
        <div id="details">
          <Topography varient="subtitle3">Name</Topography>
          <Topography varient="subtitle3">: {details.name}</Topography>
          <Topography varient="subtitle3">Email</Topography>
          <Topography varient="subtitle3" textEllipses={true}>
            : {details.email}
          </Topography>
          <Topography varient="subtitle3">Org</Topography>
          <Topography varient="subtitle3">: {details.classId}</Topography>
        </div>
      </div>
      <div className="options">
        {cards.map((elm) => {
          return (
            <Cards key={elm.label}>
              <Topography varient="h3" textEllipses={true}>
                {elm.label}
              </Topography>
            </Cards>
          );
        })}
      </div>
    </AsideMain>
  );
}
