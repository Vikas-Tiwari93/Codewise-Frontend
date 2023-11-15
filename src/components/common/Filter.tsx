import styled from "styled-components";
type FilterProps = {
  fullWidth: boolean;
};
type InputProps = {
  fullWidth: boolean;
};

const Filtercomp = styled.span<InputProps>`
  display: ${(props) => (props.fullWidth ? "block" : "inline")};
`;
export default function Filter({ fullWidth }: FilterProps) {
  return <Filtercomp fullWidth={fullWidth}></Filtercomp>;
}
