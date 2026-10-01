// Conexion a Supabase.
// La URL y la "anon key" son publicas por diseno (Supabase las protege con RLS),
// pero NUNCA subas aqui la "service_role key": esa si debe mantenerse secreta.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://gnieuyakhpxwkbuhggit.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduaWV1eWFraHB4d2tidWhnZ2l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3ODA5NDQsImV4cCI6MjEwNjM1Njk0NH0.Jq0uIld8W7aHWSqhZ26ijSpjmSfo9rRRetaV8pkuJWI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
