import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function DetailsPage({match}) {
    const [repoDetails, setRepoDetails] = useState(null);
    const repos = useSelector(state => state.results.items);
    const {id} = match.params;

    useEffect(() => { 
       const repo = repos.find(item => item.id === parseInt(id));
       setRepoDetails(repo);
    }, []); 

    return (
        <div>
            <h1>DetailsPage Page</h1>
            {repoDetails && <h3>{repoDetails.name}</h3>}
        </div>
    );
}

export default DetailsPage;