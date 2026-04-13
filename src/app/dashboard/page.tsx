"use client";
import { useEffect, useState } from "react";
import { Meal } from "@/src/types/meal";
import { getMeals, deleteMeal, clearMeals } from "@/src/lib/storage";
import Navbar from "@/src/components/dashboard/Navbar";
import Sidebar from "@/src/components/dashboard/Sidebar";
import { dashboardStats, recentMeals } from "@/src/lib/mock-data";
import StatCard from "@/src/components/dashboard/StatCard";
import RecentMealCard from "@/src/components/dashboard/RecentMealCard";

export default function DashboardPage() {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    setMeals(getMeals());
  }, []);
  
  const loadMeals = () => setMeals(getMeals());

  useEffect(() => {
    loadMeals();
  }, []);

  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Delete this meal?");
    if (!confirmDelete) return;

    deleteMeal(id);
    loadMeals();
  };

  const handleClearAll = () => {
    const confirmClear = confirm("Clear all meals?");
    if (!confirmClear) return;

    clearMeals();
    loadMeals();
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dashboardStats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
              />
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Recent Meals</h2>
            {meals.length > 0 && (
              <button
                onClick={handleClearAll}
                className="border rounded-lg px-4 py-2"
              >
                Clear All
              </button>
            )}
            {meals.length === 0 ? (
              <div className="rounded-2xl border border-dashed p-8 text-center">
                <p className="text-lg font-medium">No meals added yet 🍱</p>
                <p className="text-sm text-gray-500 mt-2">
                  Upload your first meal to start tracking
                </p>
              </div>
            ) : (
                <div className="space-y-4">
                  {meals.map((meal) => (
                    <RecentMealCard
                      key={meal.id}
                      meal={meal}
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
            )}
          </div>

          <div className="mt-8 rounded-2xl border p-6">
            <h2 className="text-xl font-bold mb-4">Daily Goal Progress</h2>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-black h-4 rounded-full w-3/4"></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              75% of calorie goal completed
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
