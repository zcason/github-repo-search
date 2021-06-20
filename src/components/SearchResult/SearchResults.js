import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SearchResults() {
    const results = useSelector(state => state.results);

    return (
        <div>
            {!results && <p>search for Repo</p>}
            {results && <ul>
                {results.items.map(result => {
                    return <li key={result.id}>
                        <p>{result.name}</p>
                        <p>{result.language}</p>
                        <Link 
                            to={`/details/${result.id}`}
                            >Button</Link>
                    </li>
                })}
            </ul>}
        </div>
    );
}

export default SearchResults;