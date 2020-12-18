/* global hexo */
'use strict;'

const github = require("./lib/github")

const makeContent = ({
    name,
    description,
    watchers,
    clone_url,
    language
}) => {
    return `### [${name}](${clone_url})\n **Description:** ${description}\n **Stars:** ${watchers} \n **Language:** ${language} \n\n`
}

const getContent = async (username, count) => {
    let githubContent = await github.get(username);
    return githubContent.slice(0, Math.min(count, githubContent.length)).map(makeContent).join('\n')
}

hexo.extend.filter.register('before_post_render', async function(data) {
    let title = data.title.toLowerCase();
    let config = hexo.config.projects
    if (!config) {
        throw new Error("Please Set The Configurations project:\nusername:<githubusername>")
    }
    let username = config.username;
    if (!username) {
        throw new Error("Github Username not found;")
    }
    let projectCount = config.projects_count || 5;
    if ((title == 'project' || title == 'projects') && data.layout === 'page') {
        data.content += await getContent(username, projectCount)
    }
    return data;
}, 0, {
    async: true
});
