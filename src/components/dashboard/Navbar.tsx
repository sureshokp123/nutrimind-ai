// src/components/dashboard/Navbar.tsx
export default function Navbar() {
  return (
    <div className="flex items-center justify-between border-b px-6 py-4">
      <h1 className="text-xl font-bold">NutriMind AI</h1>
      <div className="flex gap-4">
        <a href="/dashboard">Dashboard</a>
        <a href="/upload-meal">Upload Meal</a>
      </div>
    </div>
  );
}
