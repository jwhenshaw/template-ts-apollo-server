const tsConfigPaths = require('tsconfig-paths');
const tsConfig = require('./tsconfig.json');

const { outDir, paths: srcPaths } = tsConfig.compilerOptions;

/**
 * In order for our absolute urls to work in the outDir
 * we need to replace src with outDir in our path resolution
 */
const libPaths = Object.keys(srcPaths).reduce((acc, pathKey) => {
  return {
    ...acc,
    [pathKey]: srcPaths[pathKey].map(p => p.replace('src/', `${outDir}/`)),
  };
}, {});

const baseUrl = '.'; // Either absolute or relative path. If relative it's resolved to current working directory.
tsConfigPaths.register({
  baseUrl,
  paths: libPaths,
});
