import { useState, useEffect, useCallback, useMemo } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let controller = useMemo(() => new AbortController(), []);

  const fetchData = useCallback(async () => {
    return fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborting");
        } else {
          setIsLoading(false);
        }
      });
  }, [url, controller.signal]);

  const deleteTodo = (id) => {
    fetch("http://localhost:8000/todos/" + id, {
      method: "DELETE",
    }).then(() => {
      fetchData();
    });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
    return () => controller.abort();
  }, [url, fetchData, controller]);

  return { data, deleteTodo, isLoading };
}

export default useFetch;
