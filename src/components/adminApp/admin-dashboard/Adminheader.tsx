import { styled } from "styled-components";
import Buttons from "../../common/Buttons";
import Input from "../../common/Input";
const Head = styled.div`
  display: flex;
  padding: 0.3rem;
  border-radius: 1rem;

  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  & #classes {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }
  .buttons {
    display: flex;
    gap: 10px;
  }
  .dashsearch {
    display: flex;
    gap: 10px;
  }
`;
type AdminHeaderProps = {
  setStudentData: React.Dispatch<React.SetStateAction<string>>;
  setClassData: React.Dispatch<React.SetStateAction<string>>;
  classData: string;
  studentData: string;
};
export default function Adminheader({
  setStudentData,
  setClassData,
  classData,
  studentData,
}: AdminHeaderProps) {
  return (
    <Head>
      <div id="classes">
        <div className="dashsearch">
          <Input
            name="Student"
            type="text"
            label="Student search"
            varient="standard"
            value={studentData}
            onChange={setStudentData}
            onReset={() => {
              setStudentData("");
            }}
          />
          <Input
            name="Student"
            type="text"
            label="Class serch"
            varient="standard"
            value={classData}
            onChange={setClassData}
            onReset={() => {
              setStudentData("");
            }}
          />
        </div>
        <div className="buttons">
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
      </div>
    </Head>
  );
}
