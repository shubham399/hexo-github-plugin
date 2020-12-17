/* global hexo */
'use strict;'

const github = require("./github")



hexo.extend.filter.register('before_post_render', function(data){
  data.title = data.title.toLowerCase();
  if(data.tile == 'project' || data.tile == 'projects')
  {
      console.log("It is Project",data); // Call The Correct Thing
  }
  return data;
});
