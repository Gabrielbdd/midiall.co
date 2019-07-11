import CMS from 'netlify-cms-app'

import IndexPagePreview from './components/preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)

if (process.env.NODE_ENV === 'development') {
  const config = {
    backend: {
      name: 'github',
      repo: 'Gabrielbdd/gatsby-starter-netlify-cms',
      branch: 'develop',
    },
  }

  CMS.init(config)
} else {
  CMS.init()
}
