import styled from "styled-components";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
  onClick: (page: number) => void;
};
const PaginationComp = styled.span`
  display: inline-flex;
  flex-direction: column;
  & .pagination-top {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: 2px solid silver;
    border-radius: 4px;
    margin: 2px 5px;
    font-weight: 600;
  }

  & .icons {
    padding: 4px 6px;
    display: inline-flex;
    width: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 100%;
    border: 2px solid grey;
  }
  & .pages {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    font-weight: 700;
    margin: 0px 4px;
    height: inherit;
    padding: 4px 15px;
  }
  & .reset {
    padding: 4px;
  }
  & .icons:hover {
    opacity: 0.7;
  }
  & .reset:hover {
    opacity: 0.7;
  }
  & .pages:hover {
    opacity: 0.7;
    background-color: silver;
    border-radius: 4px;
  }
  & .selected {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    font-weight: 700;
    margin: 0px 4px;
    height: inherit;
    padding: 4px 15px;
    background-color: grey;
    border-radius: 4px;
  }
  & .info {
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;
  }
`;
export default function Pagination({
  setPage,
  totalPages,
  currentPage,
  onClick,
}: PaginationProps) {
  console.log(currentPage);
  const pagesArray =
    currentPage === 1
      ? [currentPage, currentPage + 1, currentPage + 2]
      : currentPage < totalPages
      ? [currentPage - 1, currentPage, currentPage + 1]
      : [currentPage - 2, currentPage - 1, currentPage];
  return (
    <PaginationComp>
      <div className="pagination-top">
        <span className="reset" onClick={() => setPage(1)}>
          First page
        </span>
        <span className="icons">
          <IoChevronBack
            onClick={() => (currentPage > 1 ? setPage(currentPage - 1) : null)}
          />
        </span>
        {pagesArray.map((elm) => {
          return (
            <span
              key={elm}
              className={elm === currentPage ? "selected" : "pages"}
              onClick={() => {
                setPage(elm);
                onClick(elm);
              }}
            >
              {elm}
            </span>
          );
        })}
        <span className="icons">
          <IoChevronForward
            onClick={() =>
              currentPage < totalPages - 1 ? setPage(currentPage + 1) : null
            }
          />
        </span>
        <span className="reset" onClick={() => setPage(totalPages)}>
          Last Page
        </span>
      </div>
      <div className="info">
        <div>Page : {currentPage} </div>
        <div>Total pages: {totalPages}</div>
      </div>
    </PaginationComp>
  );
}
