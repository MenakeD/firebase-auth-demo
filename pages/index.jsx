import { useState } from 'react'
import Container from '../components/common/Container'
import LoginForm from '../components/modules/LoginForm'
import SignUpForm from '../components/modules/SignUpForm'
import Layout from '../components/common/Layout'
import { withPublic } from '../lib/firebase/route'

const IndexPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <Layout title='Firebase Auth Demo'>
      <main className=' bg-gray-100'>
        <Container>
          <section className='flex w-full h-screen justify-center items-center'>
            <div>
              <div className=' py-4 px-6 bg-white rounded-lg shadow my-4'>
                <h1 className='text-center text-2xl font-medium'>
                  Firebase Auth Demo
                </h1>
              </div>
              {isLogin ? (
                <LoginForm setIsLogin={setIsLogin} />
              ) : (
                <SignUpForm setIsLogin={setIsLogin} />
              )}
            </div>
          </section>
        </Container>
      </main>
    </Layout>
  )
}

export default withPublic(IndexPage)
