import React from "react";
import { Table } from "semantic-ui-react";
interface RowsProps {
  row: any[];
}
const tableRows = (props: RowsProps) => {
  let list = [];
  if (props.row != null)
    for (let i = 0; i < props.row.length; i++)
      list.push(<Table.Cell key={i}>{props.row[i]}</Table.Cell>);
  return <Table.Row>{list}</Table.Row>;
};
export default tableRows;
