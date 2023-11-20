import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bvyolsimwfjkfeqyrnuh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2eW9sc2ltd2Zqa2ZlcXlybnVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NzExMzIsImV4cCI6MjAxNjA0NzEzMn0.o_OEfl4oQgMoHbA6orjNPe1Q8XF6h6yGoImS8ZXC64I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
