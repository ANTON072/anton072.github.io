import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  h1: {
    fontFamily: 'inherit',
  },
})

delete Wordpress2016.googleFonts

const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Helvetica Neue',
  '游ゴシック Medium',
  'Hiragino Kaku Gothic ProN',
  'メイリオ',
]

Wordpress2016.headerFontFamily = fontFamily
Wordpress2016.bodyFontFamily = fontFamily

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
