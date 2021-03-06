function update(moduleName) {
  const exists = require('npm-exists')
  const exec = require('executive')

  exists(moduleName).then(moduleExists => {
      if (moduleExists) {
        exec.quiet(`npm uninstall -g ${moduleName}`)
        // exec.quiet('npm cache clean')
        exec(`npm i -g ${moduleName}`)
      } else {
          console.log(`Did you have ${moduleName} on your machine earlier?!`)
      }
  });
}

module.exports.update = update
