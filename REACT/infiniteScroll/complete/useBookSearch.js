import { useEffect, useState } from "react";
import axios from "axios";

const useBookSearch = (pageNumber = 13) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  //   useEffect(() => {
  //     setBooks([]);
  //   }, [query]);

  // setBooks([...new Set(bookData.data.docs.map((book) => book.title))]);

  //   const response = await axios.get(`${baseURL}?_page=${page}&_limit=10`);
  //   setData(response.data);

  const fetchData = async () => {
    try {
      //   const bookData = await axios.get(
      //     "https://jsonplaceholder.typicode.com/posts",
      //     {
      //       params: { page: pageNumber, _limit: 5 },
      //     }

      //   setBooks((prevArray) => [
      //     ...prevArray,
      //     ...bookData.data.map((book) => book.title),
      //   ]);

      const bookData = await axios.get("http://openlibrary.org/search.json", {
        params: { q: "rect", page: pageNumber, limit: 4 },
      });
      setBooks((prevArray) => [
        ...prevArray,
        ...bookData.data.docs.map((book) => book.title),
      ]);

      setHasMore(bookData.data.docs.length > 0);
      //   setHasMore(bookData.data.length > 0);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchData();
  }, [pageNumber]);

  return { fetchData, loading, books, hasMore, error };
};

export default useBookSearch;
