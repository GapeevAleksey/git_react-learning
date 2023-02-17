import React, { useState } from 'react';
import styles from './SearchForm.module.scss';

type SearchFormProps = {
  searchHandler: (value: string) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ searchHandler }) => {
  const [search, setSearch] = useState<string>('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form className={styles.searchForm}>
        <input
          type="text"
          placeholder="Find repositories..."
          onChange={inputHandler}
          value={search}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (search.length > 2) {
              searchHandler(search);
              setSearch('')
            }
          }}
        >
          search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
