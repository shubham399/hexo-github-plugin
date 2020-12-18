'use strict;'
var axios = require('axios');

const getRepos = async (username) => {
    let url = `https://api.github.com/users/${username}/repos`
    var config = {
        method: 'get',
        url: 'https://api.github.com/users/shubham399/repos',
        headers: {}
    };
    let response = await axios(config)
    return response.data.filter(repo => !repo.fork && repo.description && !repo.archived).map(({
        name,
        description,
        watchers,
        clone_url,
        language
    }) => {
        return {
            name,
            description,
            watchers,
            clone_url,
            language
        }
    }).sort((a, b) => b.watchers - a.watchers);
}

exports.get = getRepos;
