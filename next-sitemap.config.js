/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kivocado.de', // später echte Domain
  generateRobotsTxt: true,
  exclude: ['/admin', '/api/*'], 
};
