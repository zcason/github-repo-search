import React from 'react';

function Pagination({ reposPerPage, totalRepos, paginate }) {
    const pageNumbers = [];

    for(let i =1; i <= Math.ceil(totalRepos/ reposPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul>
            {pageNumbers.map(number => (
                <li key={number}>
                    <p onClick={() => paginate(number)}>
                        {number}
                    </p> 
                </li>
            ))}
        </ul>
    );
}

export default Pagination;