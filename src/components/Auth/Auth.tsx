import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import { useFetch, FetchDataType } from 'api/useFetch';
import { API_ORIGIN } from 'constants/';
import { userContext } from 'contexts/userContext';

const provider = 'github';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get('access_token');

  const auth = useContext(userContext);

  const { data, request }: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/auth/${provider}/callback`,
    method: 'get',
    data: {
      access_token: token,
    },
  });
  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    if (data) {
      auth?.login(data.user, data.jwt);
      navigate('/');
    }
  }, [data]);

  return <div></div>;
};

export default Auth;
