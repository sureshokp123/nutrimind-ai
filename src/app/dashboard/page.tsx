// src/app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">NutriMind Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl border p-6">Calories</div>
        <div className="rounded-xl border p-6">Protein</div>
        <div className="rounded-xl border p-6">Water</div>
      </div>
    </div>
  );
}
