const getResults = async(name,language,sortBy) => {
    const res = await fetch('https://api.github.com/search/repositories?q=' + name + language + sortBy);
    return await ((!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json());
}

export default getResults;