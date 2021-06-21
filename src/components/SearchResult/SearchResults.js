import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import './SearchResults.css';

function SearchResults() {
    const repos = useSelector(state => state.results.items);
    // Checks to see if there are any repositories that matches the user's search details
    const hasResults = repos.length >= 1;
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(5); 
    // Get current repositories
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {!repos && <p>search for Repo</p>}
            {(repos && !hasResults) && 
            <p>Sorry, there are no repositories that matches this search.</p>
            }
            {(repos && hasResults) && <ul className="repo-list" >
                {currentRepos.map(repo => {
                    return <li key={repo.id} className="repo-card">
                        <img 
                        src={repo.owner.avatar_url}
                        alt={`${repo.owner.login}`}
                        />
                        <div className="repo-card-details">
                            <p>{repo.name}</p>
                            <p>{repo.language}</p>
                        </div>
                        <Link className="repo-link"
                        to={`/details/${repo.id}`}
                        >Details</Link>
                    </li>
                })}
            </ul>}
            <div className="center-paginator">
                <Pagination
                currentPage={currentPage}
                reposPerPage={reposPerPage} 
                totalRepos={repos.length} 
                paginate={paginate}
                />
            </div>
        </div>
    );
}

export default SearchResults;