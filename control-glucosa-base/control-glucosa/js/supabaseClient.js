// Conexion a Supabase.
// La URL y la "anon key" son publicas por diseno (Supabase las protege con RLS),
// pero NUNCA subas aqui la "service_role key": esa si debe mantenerse secreta.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "TU_URL_DE_SUPABASE";
const SUPABASE_ANON_KEY = "TU_ANON_KEY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
