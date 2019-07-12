import CMS from 'netlify-cms-app'

import IndexPagePreview from './components/preview-templates/index-page-preview'

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
    name: 'git-gateway',
  }
}

CMS.init({ config })
