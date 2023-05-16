import axios from "axios";

export const CoreInstance = axios.create({
    baseURL: `https://www.centralfile-sisadcloud.com:11470/api/`
    // baseURL:`https://localhost:1919/api/`
    // baseURL:`https://localhost:7171/api/`
});

// export const Instance = `https://localhost:1919/api/`;
// export const Instance = `https://localhost:7171/api/`;
export const Instance = `https://www.centralfile-sisadcloud.com:11470/api/`;