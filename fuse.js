const { FuseBox, WebIndexPlugin } = require('fuse-box');
const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'demo/$name.js',
  plugins: [WebIndexPlugin({ title: 'React Maps Loader' })]
});
fuse.dev(); // launch http server
fuse
  .bundle('app')
  .instructions(' > demo/index.tsx')
  .hmr()
  .watch();
fuse.run();
