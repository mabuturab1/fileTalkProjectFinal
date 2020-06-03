import React, { useState } from "react";
import styles from "./SearchResultsPage.module.scss";
import SearchBar from "../../components/searchBar/searchBar";
import { SingleFileProps } from "../singleFile/singleFile";
import FileList from "../fileList/fileList";
import Pdf from "../../assets/images/Pdf.png";
import { routes } from "../../interfaces/routes";
import { Divider, Tab, TabProps } from "semantic-ui-react";
const SearchResultsPage = (props: any) => {
  const [searchResults, setSearchResults] = useState("");
  const [fileList] = useState<SingleFileProps[]>([
    {
      src: Pdf,
      fileName: "Market place analysis pdf",
      fileSize: "12Mb",
      author: "Zeck Warren",
      date: "July 7 2016",
      toLink: routes.fileView,
    },
    {
      src: Pdf,
      fileName: "Market place analysis pdf",
      fileSize: "12Mb",
      author: "Zeck Warren",
      date: "July 7 2016",
      toLink: routes.fileView,
    },
  ]);
  const panes = [
    {
      menuItem: "Files " + fileList.length,
      render: () => (
        <Tab.Pane attached={false}>
          <FileList list={fileList} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Messages",
      render: () => (
        <Tab.Pane attached={false}>
          <div></div>
        </Tab.Pane>
      ),
    },
  ];
  const handleTabChange = (e: any, data: TabProps) => {};
  const handleSearch = (value: string) => {
    setSearchResults(value);
  };

  return (
    <div className={styles.searchResultsPageWrapper}>
      <div className={styles.containerWrapper}>
        <SearchBar value={searchResults} onChange={handleSearch} />
      </div>
      <Divider />
      <div className={styles.searchFileWrapper}>
        <Tab
          className="tabs"
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          onTabChange={handleTabChange}
        />
      </div>
    </div>
  );
};
export default SearchResultsPage;
