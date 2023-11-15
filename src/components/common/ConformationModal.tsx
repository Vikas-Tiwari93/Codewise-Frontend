import styled from "styled-components";
import Buttons from "./Buttons";
type ConformationProps = {
  isOpen: boolean;
  setClose: () => void;
  message: string;
};
type StyledDialogeProps = {
  open: boolean;
};
const StyledDialogue = styled.dialog<StyledDialogeProps>`
  position: absolute;
  z-index: 100;
  border: none;
  background: transparent;
  top: 0px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  backdrop-filter: blur(4px);
  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  & .dialogue {
    border-radius: 4px;
    background: white;
    max-width: 600px;
    padding: 40px 60px;
    border: 2px solid grey;
  }
`;
export default function ConformationModal({
  isOpen,
  setClose,
  message,
}: ConformationProps) {
  return (
    <StyledDialogue open={isOpen}>
      <div className="dialogue">
        {message}
        <Buttons title={"close"} width="small" onClick={() => setClose()} />
      </div>
    </StyledDialogue>
  );
}
