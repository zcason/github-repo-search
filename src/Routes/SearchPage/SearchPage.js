import React from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchResults from '../../components/SearchResult/SearchResults';

function SearchPage(props) {
    return (
        <div>
            <h1>Find Your Repo</h1>
            <SearchInput/>
            <SearchResults />
        </div>
    );
}

export default SearchPage;