import React, {useState} from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchResults from '../../components/SearchResult/SearchResults';

function SearchPage() {
    const [searchResults, setSearchResults] = useState(null);
    const getResults = async(name,language,sortBy) => {
        try {
            const res = await fetch('https://api.github.com/search/repositories?q=' + name + language + sortBy);
            const searchResults = await res.json();

        setSearchResults(searchResults);
        } catch (e) {
            alert(e);
        }
    }

    return (   
            <div>
                <h1>Find Your Repo</h1>
                <SearchInput getResults={getResults}/>
                <SearchResults results={searchResults}/>
            </div>
    );
}

export default SearchPage;