import React from 'react';
import './Pagination.css';

function Pagination({ reposPerPage, totalRepos, paginate, currentPage }) {
    const pageNumbers = [];

    for(let i =1; i <= Math.ceil(totalRepos/ reposPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="paginator">
            {pageNumbers.map(number => (
                <li 
                key={number} 
                className={ number === currentPage ? "page-number-active" : "page-number"}
                >
                    <p onClick={() => paginate(number)}>
                        {number}
                    </p> 
                </li>
            ))}
        </ul>
    );
}

export default Pagination;