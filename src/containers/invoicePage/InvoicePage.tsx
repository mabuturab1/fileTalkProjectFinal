import React, { SyntheticEvent } from "react";
import styles from "./InvoicePage.module.scss";
import Table from "../../components/paginatedTable/PaginatedTable";
import { tableData } from "../../interfaces/dummyData";

const InvoicePage = (props: any) => {
  const onPageChange = (event: SyntheticEvent, data: object) => {};
  return (
    <div className={styles.invoiceWrapper}>
      <h6 className={styles.titleText}>Invoices</h6>
      <div className={styles.contentWrapper}>
        <Table
          onPageChange={onPageChange}
          header={["Date", "Number", "Amount", "Download"]}
          data={tableData}
          totalPages={10}
        />
      </div>
    </div>
  );
};
export default InvoicePage;
