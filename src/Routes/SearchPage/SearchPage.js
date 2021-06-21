import SearchInput from '../../components/SearchInput/SearchInput';
import SearchResults from '../../components/SearchResult/SearchResults';
import './SearchPage.css';

function SearchPage() {

    return (   
            <div>
                <h1 className="header">Search for a repository</h1>
                <SearchInput />
                <SearchResults />
            </div>
    );
}

export default SearchPage;