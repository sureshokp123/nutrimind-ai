import { Meal } from "@/src/types/meal";

const STORAGE_KEY = "nutrimind_meals";

export function saveMeal(meal: Meal) {
  const existing = getMeals();
  const updated = [meal, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function getMeals(): Meal[] {
  const meals = localStorage.getItem(STORAGE_KEY);
  return meals ? JSON.parse(meals) : [];
}
