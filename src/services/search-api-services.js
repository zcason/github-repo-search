const getSearchResults = async(name, language, sortType) => {
        const res = await fetch('https://api.github.com/search/repositories?q=' + name + language + sortType);
        const searchResults = await res.json();

        return searchResults;
}

export default getSearchResults; 

