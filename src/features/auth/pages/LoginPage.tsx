/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { getDefaultRouteByRole } from '../utils/roleRedirect'

const LoginPage = () => {
    const navigate = useNavigate()
    const { login, loading } = useLogin()

    const [form, setForm] = useState({
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

        const response = await login(form)

        const role = response.data.user.role
        const redirectPath = getDefaultRouteByRole(role)

        navigate(redirectPath)
    }

    return (
        <div className="w-full max-w-sm p-6 rounded-lg">
            <h1 className="text-2xl font-semibold text-center mb-6">
                Login
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {loading ? 'Loading...' : 'Login'}
                </button>
            </form>
        </div>
    )
}

export default LoginPage