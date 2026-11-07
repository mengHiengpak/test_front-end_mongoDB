import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../config/app";

export const useProduct = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const res = await api.get("/products");
                const json = res.data; // axios already parsed the JSON
                console.log("API Response:", json);

                const list = Array.isArray(json)
                    ? json
                    : Object.values(json ?? {}).find(Array.isArray) ??
                      Object.values(json?.data ?? {}).find(Array.isArray) ??
                      [];

                setData(list);
            } catch (error) {
                if (error.name === "CanceledError") return;
                toast.error(`Error fetching data: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        return () => controller.abort();
    }, []);

    return { data, loading };
};