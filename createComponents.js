const fs = require('fs');

const componentDir = process.argv[2]
const componentName = process.argv[3];

const componetTemplate = `import s from './${componentName}.module.scss';
const ${componentName} = () => {
  return (
    <div className={s.root}>
    
    </div>
  );
}
 
export default ${componentName};`;

const indexTemplate = `import ${componentName} from './${componentName}';

export default ${componentName};`

const createComponents = new Promise((resolve, reject ) => {
  const path = `./src/${componentDir}/${componentName}`;

  if(fs.existsSync(path)) {
    reject('Component is exist');
  }

  fs.mkdir(path, {recursive: true}, (err) => {
    if(err !== null) {
      reject(err);
      console.log('Ooops', err);
    } else {
      resolve(path);
    }
  });
});

console.log('>>>>: Start creating component');
createComponents.then(async (dirPath) => {
  await fs.writeFile(`${dirPath}/${componentName}.js`, componetTemplate, (err) => {
    if(err !== null) {
      Promise.reject(err);
    }
  });

  return dirPath;
}).then(async (dirPath) => {
  await fs.writeFile(`${dirPath}/${componentName}.module.scss`, ".root {/n/n}", (err) => {
    if(err !== null) {
      Promise.reject(err);
    }
  });

  return dirPath;
}).then(async (dirPath) => {
  await fs.writeFile(`${dirPath}/index.js`, indexTemplate, (err) => {
    if(err !== null) {
      Promise.reject(err);
    }
  });

  return dirPath;
}).catch((err) => {
  console.log('THIS IS ERROR - ', err);
})

console.log('>>>>: Component created');