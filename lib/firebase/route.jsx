import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/useAuth'

const withPublic = (Component) => {
  const WithPublic = (props) => {
    const { authUser } = useAuth()
    const router = useRouter()
    if (typeof window !== 'undefined') {
      if (authUser) {
        router.push('/home')
        return <h2>Loading...</h2>
      }

      return <Component {...props} auth={authUser} />
    }
    return null
  }

  return WithPublic
}

const withProtected = (Component) => {
  const WithProtected = (props) => {
    const { authUser } = useAuth()
    const router = useRouter()
    if (typeof window !== 'undefined') {
      if (!authUser) {
        router.push('/')
        return <h2>Loading...</h2>
      }

      return <Component {...props} auth={authUser} />
    }
    return null
  }
  return WithProtected
}

export { withPublic, withProtected }
