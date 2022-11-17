const SUPABASE_URL = 'https://tkqxoqtixhzlrrwspotd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrcXhvcXRpeGh6bHJyd3Nwb3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgzNjMsImV4cCI6MTk4MzY4NDM2M30.HfaWTJoZaFxI5PwxO4xvxCJ0g_pY6oryjIi4l9w_FAM';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchStock() {
    const response = await client.from('stock').select('*').limit(10);
    return response.data;
}

export async function fetchAnimals() {
    const response = await client.from('animals').select('*').limit(10);
    return response.data;
}

export async function fetchCompany() {
    const response = await client.from('company').select('*').limit(10);
    return response.data;
}

export async function fetchAvatar() {
    const response = await client.from('avatar').select('*').limit(10);
    response.data;
}