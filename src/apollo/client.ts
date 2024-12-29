import { ApolloClient, InMemoryCache } from "@apollo/client";

const SUPABASE_URL = "https://vwupjzaodqhzyjtypmcu.supabase.co"; // Your correct URL
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3dXBqemFvZHFoenlqdHlwbWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0NTIxOTEsImV4cCI6MjA1MTAyODE5MX0.H8Hf07LwZ8S4Dv-U1aq3k-qf97nBXnXqR3qwUOpfcmU"; // Replace with your Supabase API key

const client = new ApolloClient({
  uri: `${SUPABASE_URL}/graphql/v1`,
  headers: {
    apikey: SUPABASE_KEY, // Your API key
    Authorization: `Bearer ${SUPABASE_KEY}`, // Authorization header
  },
  cache: new InMemoryCache(),
});

export default client;
