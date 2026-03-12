import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

const getUser = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export { getUser };

