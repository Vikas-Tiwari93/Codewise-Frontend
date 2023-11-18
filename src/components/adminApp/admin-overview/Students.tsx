import React from "react";
import { styled } from "styled-components";

const StudentMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 61vh;
  border: 1px solid silver;

  border-radius: 0.5rem;

  justify-content: start;
  align-items: center;
  gap: 1rem;
  padding: 10px;
  overflow-y: scroll;

  & div {
    width: 185px;
    height: 130px;
    border: 1px solid Black;
    border-radius: 0.7rem;
  }
`;

export default function Students() {
  return (
    <StudentMain>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StudentMain>
  );
}
