// src/components/dashboard/Sidebar.tsx
export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen border-r p-6 hidden md:block">
      <h2 className="font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li>Dashboard</li>
        <li>Meals</li>
        <li>Goals</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
