import { supabase } from "./supabase";

export async function uploadMealImage(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("meal-images")
    .upload(fileName, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("meal-images")
    .getPublicUrl(fileName);

  return data.publicUrl;
}
