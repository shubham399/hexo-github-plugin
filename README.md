# hexo-github-plugin

![build](https://github.com/shubham399/hexo-github-plugin/workflows/build/badge.svg)
[![npm version](https://badge.fury.io/js/hexo-github-plugin.svg)](https://badge.fury.io/js/hexo-github-plugin)

This Project Will pull repo Details from github and append the content in the `Project` page


To Use this Plugin Add the Config in `_config.yml` file as below in the example


```yml
projects:
 username: <github-username>
 projects_count: 5
```

example

```yml
projects:
 username: shubham399
 projects_count: 5
```

And create a project/projects page.

and run `hexo g` to generate the pages.



Note: This will only pull project if that has a description and is not forked and not archived.
