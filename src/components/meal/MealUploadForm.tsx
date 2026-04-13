"use client";

import { useState } from "react";
import { saveMeal } from "@/src/lib/storage";
import { useRouter } from "next/navigation";

export default function MealUploadForm() {
    const [mealName, setMealName] = useState("");
    const [calories, setCalories] = useState("");
    const [protein, setProtein] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState("");
    const router = useRouter();

    const handleImageChange = (file: File | null) => {
        if (!file) return;
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!mealName || !calories) {
            alert("Meal name and calories are required");
            return;
        }

        const meal = {
            id: Date.now(),
            name: mealName,
            calories: Number(calories),
            protein: Number(protein),
            time: new Date().toLocaleTimeString(),
        };

        saveMeal(meal);

        setMealName("");
        setCalories("");
        setProtein("");
        setImage(null);
        setPreview("");
        
        router.push("/dashboard");

        alert("Meal saved successfully");
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl rounded-2xl border p-8 shadow-sm"
        >
            <h1 className="text-2xl font-bold mb-6">Upload Meal</h1>

            <input
                type="text"
                placeholder="Meal name"
                value={mealName}
                onChange={(e) => setMealName(e.target.value)}
                className="w-full border rounded-lg p-3 mb-4"
            />

            <input
                type="number"
                placeholder="Calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="w-full border rounded-lg p-3 mb-4"
            />

            <input
                type="number"
                placeholder="Protein (g)"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                className="w-full border rounded-lg p-3 mb-4"
            />

            <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                    handleImageChange(e.target.files?.[0] || null)
                }
                className="mb-4"
            />

            {preview && (
                <img
                    src={preview}
                    alt="Meal preview"
                    className="w-full h-64 object-cover rounded-xl mb-4"
                />
            )}

            <button className="w-full rounded-lg p-3 bg-black text-white">
                Save Meal
            </button>
        </form>
    );
}
