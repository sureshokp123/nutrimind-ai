"use client";

import { useEffect } from "react";
import { supabase } from "@/src/lib/supabase";

export default function TestSupabasePage() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from("meals")
        .select("*")
        .limit(1);

      console.log("Supabase Data:", data);
      console.log("Supabase Error:", error);
    }

    testConnection();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        Supabase Connection Test
      </h1>
      <p>Open browser console to verify response.</p>
    </div>
  );
}
