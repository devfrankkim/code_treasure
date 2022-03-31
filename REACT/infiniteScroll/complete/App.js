import React, { useState, useEffect, useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  const { books, hasMore, loading } = useBookSearch(pageNumber);

  const observer = useRef();
  const lastComponent = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
          console.log("last component detected");
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <div>
        {books.map((book, index) => {
          if (books.length === index + 1) {
            return (
              <div
                ref={lastComponent}
                style={{ marginBottom: 400 }}
                key={index + 1}
                className="last component"
              >
                <div>Last!!!!!!!! {book}</div>
              </div>
            );
          } else {
            return (
              <div style={{ marginTop: 100 }} key={index + 1}>
                <div> {book} </div>
                <hr />
              </div>
            );
          }
        })}
        <div>{loading && "Loading....."}</div>
      </div>
    </>
  );
}

export default App;
