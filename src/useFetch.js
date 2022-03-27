import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)

        fetch(url)
        .then(res => res.json())
        .then(
            (res) => {
                setIsLoading(false);
                setItems(res);
            },
            () => {
                setIsLoading(false);
                setError("An error occurred when fetching data");
            }
        )
    },[url])
    return { items, error, isLoading }
  }
    
  export default useFetch;