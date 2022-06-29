import axios, { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
import { ApiResponse, RequestProps } from 'types/apiType';

export function useRequest({ endpoint, method, data }: RequestProps) {
  const [result, setResult] = useState(null);

  const request = useCallback(() => {
    let axiosPromise: Promise<AxiosResponse<ApiResponse>> | undefined;
    if (method === 'post') {
      axiosPromise = axios.post(endpoint, data);
    } else if (method === 'put') {
      axiosPromise = axios.put(endpoint, data);
    } else if (method === 'delete') {
      axiosPromise = axios.delete(endpoint);
    } else {
      axiosPromise = axios.get(endpoint, {
        params: data,
      });
    }

    axiosPromise
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ?.then((res: any) => {
        setResult(res);
      })
      ?.catch((err) => {
        setResult(err);
      });
  }, [endpoint, method, data]);

  return { res: result, request };
}
