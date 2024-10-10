// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// const ENGINE_ID = process.env.REACT_APP_GOOGLE_ENGINE_ID;

// if (!API_KEY || !ENGINE_ID) {
//   console.error("Environment variables are not defined correctly");
// }
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const ENGINE_ID = import.meta.env.VITE_GOOGLE_ENGINE_ID;

if (!API_KEY || !ENGINE_ID) {
  console.error("Environment variables are not defined correctly");
} else {
  console.log("API_KEY:", API_KEY);
  console.log("ENGINE_ID:", ENGINE_ID);
}
