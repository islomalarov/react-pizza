import axios from 'axios';

async function fetchData(setItems, setIsLoading, category, sortType) {
  const cat = category > 0 ? `category=${category}&` : '';
  const API = `https://6454d733a74f994b334a6d83.mockapi.io/items?${cat}sortBy=${sortType.sort}&order=${sortType.type}`;
  const response = await axios.get(API);
  setItems(response.data);
  setIsLoading(false);
}
export default fetchData;
