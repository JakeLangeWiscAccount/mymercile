import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://zymxtgkjyuxhgbarqebs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bXh0Z2tqeXV4aGdiYXJxZWJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxOTYzOTMsImV4cCI6MjAyMzc3MjM5M30.mXv2tZL-I1lnODeZ1jJ8uj6NnwVp9M8OiPiWVG8eV4Q'
export const supabase = createClient(supabaseUrl, supabaseKey)

