// src/app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Login to NutriMind AI</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-4"
        />
        <button className="w-full rounded-lg p-3 bg-black text-white">
          Login
        </button>
      </div>
    </div>
  );
}
