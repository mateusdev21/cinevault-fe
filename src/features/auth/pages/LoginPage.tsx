/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import { getDefaultRouteByRole } from '../utils/roleRedirect'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'

const LoginPage = () => {
    const navigate = useNavigate()
    const { login, loading } = useLogin()
    const [showPassword, setShowPassword] = useState(false)

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

                <div>
                    <label className="block text-xs mb-1">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full text-xs border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className='text-gray-500 hover:text-gray-600 focus:outline-none'
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            {showPassword ? (
                                <IoEyeOffOutline size={20} />
                            ) : (
                                <IoEyeOutline size={20} />
                            )}
                        </button>
                    </div>
                </div>

                <div className='flex justify-between items-center align-middle mb-8'>
                    <div className='flex items-center'>
                        <input type="checkbox" name="remember" id="remember" />
                        <label className="text-xs ml-1">Remember me</label>
                    </div>
                    <a href="/forgot-password" className="text-xs text-blue-600 hover:underline">
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {loading ? 'Loading...' : 'Login'}
                </button>

                <div className='flex items-center text-center justify-center mt-2'>
                    <span className='text-xs text-gray-600'>Don't have an account?</span>
                    <button
                        type="button"
                        onClick={() => navigate("/register")}
                        className="ml-2 text-xs text-blue-600 hover:underline hover:cursor-pointer transition"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage