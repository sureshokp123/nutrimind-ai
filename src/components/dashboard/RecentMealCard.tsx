// src/components/dashboard/RecentMealCard.tsx
import { Meal } from "@/src/types/meal";

interface Props {
  meal: Meal;
}

export default function RecentMealCard({ meal }: Props) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <h3 className="font-semibold">{meal.name}</h3>
      <p>{meal.calories} kcal</p>
      <p>{meal.protein} g protein</p>
      <p className="text-sm text-gray-500">{meal.time}</p>
    </div>
  );
}
