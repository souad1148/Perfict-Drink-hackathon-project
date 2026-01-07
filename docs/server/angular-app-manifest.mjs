
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
    'index.csr.html': {size: 14136, hash: '3740bbe519f9c2dc90b3899b17e0cf9ad6372d0e1d2bb099c6b563ec83ff0a4a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8904, hash: '68328f6a287ea743410ae3a045eb89849d202bc110e2f4bab86836182cdb4e19', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36005, hash: '1dd4bca477cbbd3e99a8cb54ff037abd530517367ab9a53634fc27acf8888690', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VIJRCGWA.css': {size: 22853, hash: 'qgtK4blZ6JU', text: () => import('./assets-chunks/styles-VIJRCGWA_css.mjs').then(m => m.default)}
  },
};
