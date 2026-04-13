import Navbar from "@/src/components/dashboard/Navbar";
import Sidebar from "@/src/components/dashboard/Sidebar";
import StatCard from "@/src/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <div className="grid md:grid-cols-3 gap-4">
            <StatCard title="Calories" value="1200 kcal" />
            <StatCard title="Protein" value="85 g" />
            <StatCard title="Water" value="2.5 L" />
          </div>
        </div>
      </div>
    </div>
  );
}
