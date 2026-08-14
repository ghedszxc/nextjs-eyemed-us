// import { VideoPlayerIconSymbols } from '@components/common/components/VideoPlayer/VideoPlayerControlsIcons'
import type { Parameters, Preview } from '@storybook/nextjs'

// import { withCookies, withReduxStore } from './decorators'
// import i18n from './i18n'

import '../src/styles/index.scss'
import { viewports } from './viewports'
// import '../src/styles/storybook.css'
// import '../src/styles/global.stories.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    viewport: {
      options: viewports,
    },
  },
}

export const parameters: Parameters = {}
export default preview
