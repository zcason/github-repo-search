import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import './DetailsPage.css';

function DetailsPage({match}) {
    const [repoDetails, setRepoDetails] = useState(null);
    const repos = useSelector(state => state.results.items);
    const {id} = match.params;
    const repo = repos.find(item => item.id === parseInt(id));
    
    useEffect(() => {
        setRepoDetails(repo);
    }, [repo])

    return (
        <div className="details-page">
            <Link className="back-link" to='/'>Back</Link>
            <div className="repo-details">
                {repoDetails && 
                <div key={repoDetails.id}>
                    <h2>{repoDetails.name}</h2>
                    <p>{repoDetails.language}</p>
                    <img 
                    src={repo.owner.avatar_url}
                    alt={`${repo.owner.login}`}
                    />
                    <h3>Owner: {repo.owner.login}</h3>
                    <p className="star-container">
                     <AiFillStar className="star" /> {repo.stargazers_count}
                    </p>
                    <p className="repo-desc">{repo.description}</p>
                </div>
                }
            </div>
        </div>
    );
}

export default DetailsPage;