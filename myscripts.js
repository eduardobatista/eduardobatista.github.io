const njk = require('nunjucks')
const fs = require('fs');

module.exports.buildfiles = function () {
    njk.configure("src",{autoscape: true});
    const filesToRender = ['index.html', 'projects.html', 'teaching.html', 'research.html'];
    filesToRender.forEach( function(fname,i) {
      fs.writeFile("docs/" + fname,njk.render(fname), function (err) {
        if (err) return console.log(err);
        console.log('Done:' + fname);
      });
    });
}
