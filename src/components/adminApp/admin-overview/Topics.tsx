import { styled } from "styled-components";

const Topicdiv = styled.div`
  display: flex;
  border: 1px solid silver;

  padding: 0.3rem;
  border-radius: 0.5rem;

  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  & div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & .topics {
    gap: 1rem;
    padding: 0.1rem;
  }
  & .topics div {
    width: 5rem;
    border: 1px solid silver;
    padding: 0.7rem;
  }
  & .topics:hover {
    cursor: pointer;
  }
`;

export default function Topics() {
  return (
    <Topicdiv>
      <div>
        <h2>Edit Topics</h2>
      </div>
      <div className="topics">
        <div>HTML</div>
        <div>CSS</div>
        <div>Javascript</div>
        <div>React</div>
        <div>Redux</div>
      </div>
    </Topicdiv>
  );
}
