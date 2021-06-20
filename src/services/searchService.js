const getResults = async(name,language,sortBy) => {
    try {
        const res = await fetch('https://api.github.com/search/repositories?q=' + name + language + sortBy);
        const searchResults = await res.json();

        return searchResults;
    } catch (e) {
        return e.message;
    }
}

export default getResults;