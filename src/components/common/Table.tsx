import styled from "styled-components";
import Pagination from "./Pagination";
import React from "react";

type ColumElm<RowItems> = {
  title: string;
  render: (data: RowItems) => React.ReactNode;
  className?: string;
};
type TableProps<RowItems> = {
  rowData: RowItems[];
  columnElm: ColumElm<RowItems>[];
  onRowClick?: (item: RowItems) => void;
  AccordianElm?: JSX.Element;
  onPageChange: (page: number) => void;
  setPage: (data: number) => void;
  totalPages: number;
  currentPage: number;
  onClick: (data: number) => void;
} & React.HtmlHTMLAttributes<HTMLTableElement>;
const StyledTable = styled.table`
  border: 1px solid grey;
  border-radius: 4px;
  width: 90%;
  margin: 5px;
  & th {
    padding: 3px 8px;
    border: 1px solid grey;
    border-radius: 2px;
  }
  & td {
    padding: 3px 8px;
    border: 1px solid grey;
    border-radius: 2px;
  }
  & tr {
    padding: 3px 8px;
    border: 1px solid grey;
    border-radius: 2px;
  }
  & .pagination {
    width: 100%;
    display: flex;
    justify-content: end;
  }
`;
export default function Table<RowItems>({
  rowData,
  columnElm,
  onRowClick,
  AccordianElm,
  onPageChange,
  setPage,
  totalPages,
  currentPage,
  onClick,
  ...rest
}: TableProps<RowItems>) {
  const isAccordianOpen = false;
  const AccordianClone = AccordianElm
    ? React.cloneElement(AccordianElm, { isAccordianOpen })
    : null;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <StyledTable {...rest}>
        <thead>
          <tr>
            {columnElm.map((elm) => (
              <th key={elm.title}>{elm.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((item, index) => (
            <>
              <tr key={index} onClick={() => onRowClick && onRowClick(item)}>
                {columnElm.map((elm, index) => (
                  <td key={index}>{elm.render(item)}</td>
                ))}
              </tr>
              <tr>{AccordianClone && AccordianClone}</tr>
            </>
          ))}
        </tbody>
      </StyledTable>
      <div style={{ width: "90%", display: "flex", justifyContent: "end" }}>
        <Pagination
          setPage={setPage}
          totalPages={totalPages}
          currentPage={currentPage}
          onClick={() => {
            onPageChange(currentPage);
            onClick(currentPage);
          }}
        />
      </div>
    </div>
  );
}
