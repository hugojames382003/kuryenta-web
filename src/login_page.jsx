function Login() {
  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/icons/kuryenta-logo.jpg"
            alt="Kuryenta Logo"
            className="h-24 w-auto"
          />
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-center text-gray-700 font-semibold mb-6">
            SIGN IN
          </h2>

          {/* Username */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">
              User Name
            </label>
            <input
              type="text"
              placeholder="Jhon"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Forgot password */}
          <div className="text-right mb-5">
            <button className="text-xs text-gray-500 hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 rounded-full bg-blue-900 text-white font-semibold text-sm hover:bg-blue-800 transition">
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
