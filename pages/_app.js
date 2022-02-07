import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
import '@fortawesome/fontawesome-svg-core/styles.css'
function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
export default MyApp
