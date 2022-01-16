import { useState } from 'react'
import Container from '../components/common/Container'
import LoginForm from '../components/modules/LoginForm'
import SignUpForm from '../components/modules/SignUpForm'

const Home = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
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
  )
}

export default Home
