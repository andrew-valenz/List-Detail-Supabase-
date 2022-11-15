const SUPABASE_URL = 'https://rgjgonabtsbaljvvbolx.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnamdvbmFidHNiYWxqdnZib2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MzI0NDEsImV4cCI6MTk4NDEwODQ0MX0.HeAaKRZ1xnZqK_sYxZHbVkw-xqmxk25eYNFoF6EEZRE';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getMinerals() {
    const response = await client.from('minerals').select();

    return checkError(response);
}

export async function getMineral(id) {
    const response = await client.from('minerals').select().match({ id: id }).single();
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
