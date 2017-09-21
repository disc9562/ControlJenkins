var jenkinsapi = require('jenkins-api');

var jenkins = jenkinsapi.init('http://admin:*Lab1321*@140.124.181.114:8080');

jenkins.all_jobs(function(err, data) {
  if (err){ return console.log(err); }
  // console.log(typeof(data))
  data.forEach(function(element) {
    if(element.color != 'notbuilt'){
      jenkins.disable_job(element.name, function(err, data){
        if (err){ return console.log(err); }
        console.log(data)
      })
    }
  }, this);
});