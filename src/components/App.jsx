import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from 'styles/GlobalStyle';
import UserRoutes from './UserRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <Loader/>}
      {!isRefreshing && <UserRoutes />}
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

// npm i prop-types
// npm i react-toastify
// npm i nanoid
// npm i react
// npm i react-icons
// npm i yup
// npm i formik
// npm i styled-components
// npm i modern-normalize
// npm i react-redux
