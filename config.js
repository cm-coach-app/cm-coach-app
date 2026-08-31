// Supabase project connection (publishable key — safe to expose in client code)
const SUPABASE_URL = "https://xlivsvbmvggtkysqlnkr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_WqtmcMggE4kL3dibk_lNyw_GLD30Ip1";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
