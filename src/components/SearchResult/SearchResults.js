import React from 'react';

function SearchResults(props) {
    const { results } = props;
    // const hasResults = if (results && results.totalCount)  {
        
    // } 

    return (
        <div>
            {!results && <p>search for Repo</p>}
            {results && <ul>
                {results.items.map(result => {
                    return <li key={result.id}>
                        <p>{result.name}</p>
                        <p>{result.language}</p>
                    </li>
                })}
            </ul>}
        </div>
    );
}

export default SearchResults;