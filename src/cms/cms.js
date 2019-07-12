import CMS from 'netlify-cms-app'

import IndexPagePreview from './components/preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)

const config = {}

if (process.env.NODE_ENV === 'development') {
  const FileSystemBackend = require('netlify-cms-backend-fs')

  config.backend = {
    name: 'file-system',
    api_root: '/api',
  }
  config.display_url = 'http://localhost:8000'

  CMS.registerBackend('file-system', FileSystemBackend)
} else {
  config.backend = {
    name: 'github',
    repo: 'Gabrielbdd/midiall',
    branch: process.env.NODE_ENV === 'development' ? 'develop' : 'master',
  }
}

CMS.init({ config })
