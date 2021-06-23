const axios = require("axios");

//this one runs last
const contributorCount = (repositories, contributorsList) => {
    console.log("4 - start function contributorCount")
    let repositoryContributorCount = [];
    for (let i = 0; i < repositories.length; i++) {
        repositoryContributorCount.push({
            name: repositories[i].name,
            numberOfContributors: contributorsList[i].length,
        });
    }
    console.log("4 - finish function contributorCount")
    return repositoryContributorCount;
};

//this one runs third (multiple times)
const getRepoContributors = async(repo) => {
    console.log("3 - start function getRepoContributors")
    const contributorsReponse = await axios.get(repo.contributors_url);
    console.log("3 - finish function getRepoContributors")
    return await contributorsReponse.data;
};

// this one runs second
const getAllRepos = (repos) => {
    console.log("2 - start function getAllRepos")
    const newRepos = repos.slice(0, 5);
    return Promise.all(
            newRepos
            .map(getRepoContributors))
        .then((contributors) => {
            console.log("2 - finish function getAllRepos")
            return contributorCount(newRepos, contributors);
        });
};

// this one runs first
function listRepoContributorCounts() {
    console.log("1 - start function listRepoContributorCounts")
    axios
        .get("https://api.github.com/orgs/wesabe/repos")
        .then((response) => response.data)
        .then(getAllRepos)
        .then((repositoryContributorCounts) => {
            console.log("1 - finish function listRepoContributorCounts")
            return repositoryContributorCounts;
        })
        .catch((error) => {
            return error;
        });
}

console.log(listRepoContributorCounts());