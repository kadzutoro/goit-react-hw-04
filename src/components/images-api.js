import axios from 'axios';

const API_KEY = 'RznIehdOF4W57uWXw3qFMgWDbDMdsriZNPT9IdEEeT4';


axios.defaults.baseURL = `https://api.unsplash.com/`;
axios.defaults.params = {
    client_id: API_KEY,
    per_page: 12,
};

export const fetchImages = async (params = {}) => {
     const { data } = await axios.get('search/photos/', {
        params,
     });
     return data.results;
}
