import React, { ChangeEvent, Dispatch, Fragment, SetStateAction } from "react";
import styles from "../styles/Search.module.css";
import { CiSearch } from 'react-icons/ci'

interface SearchProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
const Search = ({ search, setSearch }: SearchProps) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <form className={styles.searchForm}>
      <input
        className={styles.search}
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search"
      />
      <CiSearch className={styles.searchSvg} />
    </form>
  );
};

export default Search;
