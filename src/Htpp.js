import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com`
export const FetchArticals = async (query, page) => {
    const params = {
        client_id: "6ehSoNGmoC-uCFq6pGCTlOjiIFDhveZWOpqpU5_N8e8",
        query: query,
        per_page: 20,
        page: page
    };

    const response = await axios.get("/search/photos", { params });
    return response.data.results
};
