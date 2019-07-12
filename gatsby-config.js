// const fileSystemAPI = require('./src/cms/file-system-api-plugin/fs-express-api')

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-linaria',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-preact',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            subsets: ['latin'],
            variants: [400, 700],
          },
          {
            family: 'Poppins',
            subsets: ['latin'],
            variants: [700],
          },
        ],
        formats: ['woff', 'woff2'],
        fontDisplay: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        manualInit: true,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
