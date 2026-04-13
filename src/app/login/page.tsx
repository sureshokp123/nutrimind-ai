import AuthCard from "@/src/components/auth/AuthCard";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthCard title="Login to NutriMind AI">
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
      </AuthCard>
    </div>
  );
}
