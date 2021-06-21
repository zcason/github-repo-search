import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import './SearchResults.css';

function SearchResults() {
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage] = useState(5); 
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    // Search results from the store 
    const results = useSelector(state => state.results);
    const totalRepos = results ? results.items.length : null;
    // Gets current repositories
    const currentRepos = results ? results.items.slice(indexOfFirstRepo, indexOfLastRepo) : 0;
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {totalRepos === 0 && 
            <p className="no-repos">Sorry, there are no repositories that matches this search.</p>
            }
            {totalRepos > 0 && <ul className="repo-list" >
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
                totalRepos={totalRepos} 
                paginate={paginate}
                />
            </div>
        </div>
    );
}

export default SearchResults;