import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
// Usa localStorage si existe (web), si no AsyncStorage (móvil)
const storage = typeof window !== "undefined" ? window.localStorage : AsyncStorage;
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_API_KEY_;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables: EXPO_PUBLIC_SUPABASE_URL or EXPO_PUBLIC_SUPABASE_API_KEY");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});


console.log("SUPABASE_URL:", process.env.EXPO_PUBLIC_SUPABASE_URL);
console.log("SUPABASE_KEY:", process.env.EXPO_PUBLIC_SUPABASE_API_KEY_);