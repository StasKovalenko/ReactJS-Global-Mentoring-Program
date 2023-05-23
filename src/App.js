import MovieListPage from '../src/modules/MovieListPage/MovieListPage';
import ErrorBoundary from '../src/modules/ErrorBoundary/ErrorBoundary';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MovieDetailsWrapper from './modules/MovieDetails/components/MovieDetailsWrapper';

import './styles/index.css';
import Header from './modules/Header/Header';
import AddFormModal from './modules/MovieForm/components/AddFormModal/AddFormModal';
import EditFormModal from './modules/MovieForm/components/EditFormModal/EditFormModal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Header />,
        children: [
          {
            path: '/:new',
            element: <AddFormModal />
          }
        ]
      },
      {
        path: '/movie/:movieId',
        element: <MovieDetailsWrapper />,
      },
      {
        path: '/movie/:movieId/edit',
        element: <EditFormModal />
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;