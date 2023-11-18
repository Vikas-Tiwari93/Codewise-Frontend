import { styled } from "styled-components";
import Buttons from "../../common/Buttons";
const Head = styled.div`
  display: flex;
  border: 1px solid silver;

  padding: 0.3rem;
  border-radius: 1rem;
  border-radius: 1px 1px 1px silver;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  & #classes {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }
`;

export default function Adminheader() {
  return (
    <Head>
      <div id="classes">
        <Buttons
          title={"Create Class"}
          varient="outlined"
          onClick={() => {}}
          width="medium"
        />
        <Buttons
          title={"Create Topic"}
          varient="outlined"
          onClick={() => {}}
          width="medium"
        />
        <Buttons
          title={"Create assignment"}
          varient="outlined"
          onClick={() => {}}
          width="medium"
        />
        <Buttons
          title={"Create challenge"}
          varient="outlined"
          onClick={() => {}}
          width="medium"
        />
      </div>
    </Head>
  );
}
