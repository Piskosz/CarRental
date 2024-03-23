import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const Home = lazy(() => import('./pages/Home/home'));
const Login = lazy(() => import('./pages/Login/login'));
const Rejestracja = lazy(() => import('./pages/Rejestration/Rejestration'));
const Wypozyczalnia = lazy(() => import('./pages/Rental/Rental'));
const ToyotaInfo = lazy(() => import ('./Cars/Toyota/Toyotainfo'));
const FordMustangInfo = lazy(() => import ('./Cars/Ford/FordMustangInfo'));
const MazdaMX5Info = lazy(() => import ('./Cars/Mazda/MazdaMX5Info'));
const FordReservation = lazy(() => import ('./Cars/Ford/FordReservation'));
const MazdaReservation = lazy(() => import ('./Cars/Mazda/MazdaReservation'));
const ToyotaReservation = lazy(() =>import ('./Cars/Toyota/ToyotaReservation'));


const Routing = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/logowanie',
      element: <Login />,
    },
    {
      path: '/rejestracja',
      element: <Rejestracja />,
    },
    {
      path: '/wypozyczalnia',
      element: <Wypozyczalnia />,
    },
    {
      path: '/wypozyczalnia',
      element: <Wypozyczalnia />,
    },
    {
      path: '/toyota',
      element: <ToyotaInfo/>,
    },
    {
      path: '/ford',
      element: <FordMustangInfo/>,
    },
    {
      path: '/mazda',
      element: <MazdaMX5Info/>,
    },
    {
      path: '/fordreservation',
      element: <FordReservation/>,
    },
    {
      path: '/mazdareservation',
      element: <MazdaReservation/>,
    },
    {
      path: '/toyotareservation',
      element: <ToyotaReservation/>,
    },
   
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default Routing;
