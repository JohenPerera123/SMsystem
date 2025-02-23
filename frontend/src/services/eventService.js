import axios from '../axios';

export const getEvents = async () => {
    try {
      const response = await axios.get('events');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  export const addEvent = async (eventData) => {
    try {
      const response = await axios.post('events', eventData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };