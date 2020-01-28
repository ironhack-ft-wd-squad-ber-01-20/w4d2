### get current version

`node -v`

### install nvm

[nvm](https://github.com/nvm-sh/nvm)  
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash`

### get current nvm version

`nvm --version`

### install a node version with nvm

`nvm install 12`

### force a node version with nvm

`nvm alias default 12`

### run javascript code with node

`node <path of the file>`  
eg `node foo/bar.js`

### initialize a package.json

`npm init`  
or `npm init -y`

### add a package to the dependencies of a node project (creates a `node_modules` folder and adds a dependency to the `package.json`)

`npm install <name of package>`

### install a package globally

`npm install -g <name of package>`
