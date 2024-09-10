const siteConfig = require('./src/config/siteConfig');

module.exports = {
  siteUrl: siteConfig.siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteConfig.siteUrl}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom transformation for priority and changefreq
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'monthly';
    } else if (['/about', '/services', '/contact'].includes(path)) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (['/experience', '/blog'].includes(path)) {
      priority = 0.7;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
};