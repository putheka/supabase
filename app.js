const { createClient } = supabase;

const supaUrl = "https://phktosytadnvmvwtosfi.supabase.co";
const supaAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoa3Rvc3l0YWRudm12d3Rvc2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyOTgxMzYsImV4cCI6MjAyMTg3NDEzNn0.MRmlyw3yTIbG12OHE61ZaSRw2xzHfPMozaNqBq212B0";

const supaClient = createClient(supaUrl, supaAnonKey);

const loginButton = document.getElementById("signInBtn");

loginButton.addEventListener("click", () => {
    supaClient.auth.signInWithOAuth({
        provider: "google",
    });
    
});
