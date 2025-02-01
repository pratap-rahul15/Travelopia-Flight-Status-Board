import axios from "axios";

const BASE_URL = "https://flight-status-mock.core.travelopia.cloud/flights";

export const getFlights = async () => {

  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    return [];
  }
};

export const getFlightDetails = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching flight details:", error);
    return null;
  }
  
};
