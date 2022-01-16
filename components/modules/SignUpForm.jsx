import Button from '../common/Button'
import InputTag from '../common/InputTag'
import { useForm } from 'react-hook-form'

const SignUpForm = ({ setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='py-4 px-6 bg-white rounded-lg shadow'
      >
        <h1 className='text-2xl font-medium pt-2 pb-4 text-center'>Sign Up</h1>
        <div className=' pb-4 '>
          <InputTag
            width='w-72 sm:w-96'
            placeholder='Email'
            name='email'
            register={register}
            errors={errors}
            validation={{
              required: '*Required',
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Email must be a valid email',
              },
            }}
          />
          <InputTag
            width='w-72 sm:w-96'
            placeholder='Password'
            name='password'
            register={register}
            errors={errors}
            validation={{
              required: '*Required',
              minLength: {
                value: 6,
                message: '*Min 6 charcters',
              },
            }}
          />
          <div className='py-2'>
            <Button>Sign Up</Button>
          </div>
        </div>
      </form>
      <section className='py-4 px-6 bg-white rounded-lg shadow my-6 flex justify-center space-x-2'>
        <p>Already have an account?</p>
        <p
          className='hover:underline text-blue-600 cursor-pointer font-medium transition-all ease-in duration-200'
          onClick={() => {
            setIsLogin(true)
          }}
        >
          Log In
        </p>
      </section>
    </div>
  )
}

export default SignUpForm
