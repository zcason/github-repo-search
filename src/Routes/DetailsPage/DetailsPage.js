import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function DetailsPage({match}) {
    const [repoDetails, setRepoDetails] = useState(null);
    const repos = useSelector(state => state.results.items);
    const {id} = match.params;
    const repo = repos.find(item => item.id === parseInt(id));
    
    useEffect(() => {
        setRepoDetails(repo);
    }, [repo])

    return (
        <div>
            <Link to='/'>Back</Link>
            <h1>DetailsPage Page</h1>
            {repoDetails && 
            <div key={repoDetails.id}>
            <h3>{repoDetails.name}</h3>
            <p>{repoDetails.language}</p>
            </div>
            }
        </div>
    );
}

export default DetailsPage;