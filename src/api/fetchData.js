import axios from 'axios';

const API = 'https://6454d733a74f994b334a6d83.mockapi.io/items';

async function fetchData(setItems, setIsLoading) {
  const response = await axios.get(API);
  setItems(response.data);
  setIsLoading(false);
}
export default fetchData;
