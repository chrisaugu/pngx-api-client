import { useState, useEffect } from 'react';
import {useGetCompaniesQuery} from "@/services/company";

export default function Companies() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    let {data: companies, } = useGetCompaniesQuery();

    useEffect(() => {
        setLoading(true)
        fetch('/api/stocks')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div>
            <h1>{data.code}</h1>
            <p>{data.bid}</p>
        </div>
    );
}