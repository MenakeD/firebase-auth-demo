import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import Layout from '../components/common/Layout'
import { useAuth } from '../hooks/useAuth'
import { withProtected } from '../hooks/route'

const HomePage = () => {
  const { authUser, logOut } = useAuth()
  const [error, setError] = useState('')

  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logOut()
      router.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Layout title='Firebase Auth Demo'>
      <main className=' bg-gray-100'>
        <Container>
          <section className='flex w-full h-screen justify-center items-center'>
            <div>
              <div className=' py-4 px-6 w-72 sm:w-96 bg-white rounded-lg shadow my-4'>
                <h1 className='text-center text-2xl font-medium'>
                  Firebase Auth Demo
                </h1>
              </div>
              <section className='py-4 px-6 bg-white rounded-lg shadow my-6 flex justify-center space-x-2'>
                <div>
                  <p className='text-center text-xl py-3 font-medium'>
                    Welcome
                  </p>
                  <p className='text-center py-1.5'>
                    {authUser && authUser.email}
                  </p>
                </div>
              </section>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </section>
          {error && (
            <section className='fixed bottom-0 right-8 py-4 px-6 bg-red-300 rounded-lg shadow my-6 flex justify-center '>
              <p>{error}</p>
            </section>
          )}
        </Container>
      </main>
    </Layout>
  )
}

export default withProtected(HomePage)
