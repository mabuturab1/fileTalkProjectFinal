import React from "react";
import { Table } from "semantic-ui-react";
interface HeaderProps {
  header?: string[];
}
const tableHeader = (props: HeaderProps) => {
  let list = [];
  if (props.header != null)
    for (let i = 0; i < props.header.length; i++)
      list.push(<Table.HeaderCell key={i}>{props.header[i]}</Table.HeaderCell>);
  return (
    <Table.Header>
      <Table.Row>{list}</Table.Row>
    </Table.Header>
  );
};
export default tableHeader;
