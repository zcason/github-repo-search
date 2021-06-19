import React, { useEffect, useState } from 'react';

function DetailsPage({match}) {
    const [repoDetails, setRepoDetails] = useState(null);
    const {owner, repo} = match.params;
    const getRepo = async () => {
        try {
            const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
            const details = await res.json();

            setRepoDetails(details);
            console.log(details)
        } catch (e) {
            alert(e);
        }
    }

    useEffect(() => { 
        getRepo();
    }, []); 

    return (
        <div>
            <h1>DetailsPage Page</h1>
            {repoDetails && <h3>{repoDetails.name}</h3>}
        </div>
    );
}

export default DetailsPage;