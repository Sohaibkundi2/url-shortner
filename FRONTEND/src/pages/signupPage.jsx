import RegisterForm from '../compunents/registerForm'

const signupPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <RegisterForm />
      </div>
    </div>
  )
}

export default signupPage