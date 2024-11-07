import {useGetStockQuery} from "@/services/stock";
import Analytics from "../../components/Analytics";

export default function PostDetail({ id }: { id: string }) {
    const {
        data: stock,
        isFetching,
        isLoading,
    } = useGetStockQuery(id, {
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    })

    if (isLoading) return <div>Loading...</div>
    if (!stock) return <div>Missing stock!</div>

    return (
        <div>
            {stock.code} {isFetching ? '...refetching' : ''}

            <Analytics />

        </div>
    )
}