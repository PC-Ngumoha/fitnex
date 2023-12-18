import { QueryFunctionContext, useQuery, } from "@tanstack/react-query";
import axios from "axios";

type Props<TData> = {
    keys: string[],
    // queryFn?: (context: QueryFunctionContext) => Promise<TData>
    url: string
}
export const useDataFetch = <TData>({ keys, url }: Props<TData>) => {
    return useQuery<TData>({
        queryKey: [keys],
        queryFn: async () => {
            const response = await axios.get(url);
            console.log(response);
            return response.data;
        },
    });
}