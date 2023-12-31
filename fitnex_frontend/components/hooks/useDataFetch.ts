import { useStore } from '@/store';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';


type Props<TData> = {
  keys: string[];
  url: string;
  options?: AxiosRequestConfig;
};

export const useDataFetch = <TData>({ keys, url, options }: Props<TData>) => {
  const store = useStore();
  const token = store.authUser

   const dataOptions = {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }

  return useQuery<TData>({
    queryKey: [keys],
    queryFn: async () => {
      try {
        const response = await axios.get(url, options=dataOptions)
        return response.data;
      } catch (error: any) {
        console.error('Error:', error);
        throw error;
      }
    },
  });
};
