import 'tailwindcss/tailwind.css'
import { UserAuthContextProvider } from '../hooks/useAuth'

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthContextProvider>
      <Component {...pageProps} />
    </UserAuthContextProvider>
  )
}

export default MyApp
