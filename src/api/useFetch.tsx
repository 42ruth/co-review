/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
export interface ApiResponseType {
  data: any;
  status: number;
}

export interface FetchProp {
  endpoint: string;
  method: string;
  data?: any;
}

export interface FetchDataType {
  isLoading: boolean;
  error: any | null;
  data: any | null;
  request: () => void;
}

export function useFetch({ endpoint, method, data }: FetchProp): FetchDataType {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  };

  const request = useCallback(() => {
    setIsLoading(true);
    let axiosPromise: Promise<AxiosResponse<ApiResponseType>> | null;
    if (method === 'post') {
      axiosPromise = axios.post(endpoint, data, { headers });
    } else if (method === 'put') {
      axiosPromise = axios.put(endpoint, data, { headers });
    } else if (method === 'delete') {
      axiosPromise = axios.delete(endpoint, { headers });
    } else {
      axiosPromise = axios.get(endpoint, {
        headers,
        params: data,
      });
    }

    axiosPromise
      ?.then((res: ApiResponseType) => {
        console.log(res);
        setResult(res.data);
        setError(null);
      })
      ?.catch((err) => {
        setResult(null);
        setError(err);
      })
      ?.finally(() => {
        setIsLoading(false);
      });
  }, [endpoint, method, data]);

  return { isLoading, error, data: result, request };
}
