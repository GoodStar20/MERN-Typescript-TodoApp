import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchNotes = async () => {
  const result = await axios.get(`${url}/todos`);
  return result;
};

export const postNotes = async (title: string) => {
  const result = await axios.post(`${url}/todos`, { title: title });
  return result;
};

export const deleteNotes = async (id: string) => {
  const result = await axios.delete(`${url}/todos/${id}`);
  return result;
};
export const putNotes = async (id: string, title: string) => {
  const result = await axios.put(`${url}/todos/${id}`, { title: title });
  return result;
};
