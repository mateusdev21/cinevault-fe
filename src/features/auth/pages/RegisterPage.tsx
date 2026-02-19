import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegister } from '../hooks/useRegister'
import Button from '../../../shared/components/Button'

const RegisterPage = () => {
  const navigate = useNavigate()
  const { register, loading } = useRegister()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await register(form)

      if (response.status === 201) {
        navigate("/login")
      }

    } catch (error) {
      console.error("Register failed:", error)
    }
  }

  return (
    <div className="w-full max-w-sm p-6 rounded-lg">
      <h1 className="text-xl font-semibold text-center mb-6">
        Registration Form
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full text-xs border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-xs mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full text-xs border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className='mb-6'>
          <label className="block text-xs mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full text-xs border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <Button type="submit" loading={loading} disabled={loading} fullWidth className='rounded-md'>
          Register
        </Button>

        <div className='flex items-center text-center justify-center mt-2'>
          <span className='text-xs text-gray-600'>Already have an account?</span>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="ml-2 text-xs text-blue-600 hover:underline hover:cursor-pointer transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage