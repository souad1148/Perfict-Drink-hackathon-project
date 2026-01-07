
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
    'index.csr.html': {size: 14589, hash: '370d5b9219f34ba79d1e0ba9a4d6b9aa5f854e7d5e9a9c36fe4734cd2146f72e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8904, hash: '4fb9dbbe62528806bef7e5b2d567f0bd1d9241f68e58e87d8d1fe3fce3ace815', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 42553, hash: 'cfec50fb7eedf4439a05261328e74bdfe63e620f4bd2f53f3fd5bad9629b036b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DQ4Q65SX.css': {size: 30411, hash: 'nIBxO6KQewE', text: () => import('./assets-chunks/styles-DQ4Q65SX_css.mjs').then(m => m.default)}
  },
};
