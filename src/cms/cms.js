import CMS from 'netlify-cms-app'

import IndexPagePreview from './components/preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)

CMS.init({
  config: {
    backend: {
      name: 'github',
      repo: 'Gabrielbdd/midiall',
      branch: process.env.NODE_ENV === 'development' ? 'develop' : 'master',
    },
  },
})
