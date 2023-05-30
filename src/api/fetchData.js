import axios from 'axios';

async function fetchData(setItems, setIsLoading, category, sort, searchValue, currentPage) {
  const cat = category > 0 ? `&category=${category}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';
  const API = `https://6454d733a74f994b334a6d83.mockapi.io/items?page=${currentPage}&limit=4${cat}${search}&sortBy=${sort.property}&order=${sort.type}`;
  const response = await axios.get(API);
  setIsLoading(true);
  setItems(response.data);
  setIsLoading(false);
  window.scrollTo(0, 0);
}
export default fetchData;
