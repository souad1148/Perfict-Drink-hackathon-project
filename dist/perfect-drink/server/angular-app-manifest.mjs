
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Perfect-Drink-hackathon-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Perfect-Drink-hackathon-project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14493, hash: 'b9321ff9afddaed949765beab4e03d3e483b921b0d34ff1a5c8deb3b7b934802', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8904, hash: '46c67c6d062c73a301a6234bb8f498164e602d6b7cb3a45c287409889c6a2801', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36382, hash: '36e7826d082e470fa8c905308290fdab2e7b84d4136c98d72675af4af09292fa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7NWEUDIG.css': {size: 24226, hash: 'akk+qZIrnlo', text: () => import('./assets-chunks/styles-7NWEUDIG_css.mjs').then(m => m.default)}
  },
};
