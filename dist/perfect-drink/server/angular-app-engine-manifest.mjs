
export default {
  basePath: '/Perfect-Drink-hackathon-project',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
