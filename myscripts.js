const njk = require('nunjucks')
const fs = require('fs');

const filesToRender = ['index.html', 'projects.html', 'teaching.html', 'research.html', 'base.html'];
const filesToWatch = ['journalpubs.html','conferencepubs.html']

// njk.configure("src",{autoscape: true});
// const filesToRender = ['index.html', 'projects.html', 'teaching.html', 'research.html'];
// filesToRender.forEach( function(fname,i) {
//   fs.writeFile("docs/" + fname,njk.render(fname), function (err) {
//     if (err) return console.log(err);
//     console.log('Done:' + fname);
//   });
// } );

buildfiles = function () {
    njk.configure("src",{autoscape: true});    
    filesToRender.forEach( function(fname,i) {
      fs.writeFile("docs/" + fname,njk.render(fname), function (err) {
        if (err) return console.log(err);
        console.log('Done:' + fname);
      });
    });
}

filesToRender.forEach( 
  element => fs.watchFile("src/" + element,buildfiles)
);
filesToWatch.forEach( 
  element => fs.watchFile("src/" + element,buildfiles)
);
