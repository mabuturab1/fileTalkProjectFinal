import React, { SyntheticEvent } from "react";
import styles from "./PaginatedTable.module.scss";
import TableHeader from "./tableHeader/TableHeader";
import TableRow from "./tableRows/TableRow";
import { Table, Pagination } from "semantic-ui-react";
interface TableProps {
  header?: string[];
  data?: any[];
  totalPages?: number;
  onPageChange?: (event: SyntheticEvent, data: Object) => void;
}
const table = (props: TableProps) => {
  let tableRows = [];
  if (props.data != null)
    for (let i = 0; i < props.data.length; i++) {
      tableRows.push(<TableRow key={i + 1 * 1000} row={props.data[i]} />);
    }
  return (
    <div className={styles.paginationTableWrapper}>
      <Table celled>
        <TableHeader header={props.header} />
        <Table.Body>{tableRows}</Table.Body>
      </Table>
      <div className={styles.paginatedTable}>
        <Pagination
          onPageChange={props.onPageChange}
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={2}
          totalPages={props.totalPages != null ? props.totalPages : 10}
        />
      </div>
    </div>
  );
};
export default table;
