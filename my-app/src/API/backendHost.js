let backendUrl = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  backendUrl = "http://localhost:3001/api";
} else {
  backendUrl = "https://nac2022.herokuapp.com/api";
}

export const backend = backendUrl;
