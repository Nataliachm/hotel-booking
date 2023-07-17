import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      _children: [
          {
              path: '/',
              element: <Home />,
          },
          {
              path: '/posts',
              element: <Posts />,
              loader: loaderPost
          },
          {
              path: '/posts/:id',
              element: <Article />,
              loader: loaderArticle
          },
          {
              path: '/profile',
              element: <PrivateRoute> <Profile /> </PrivateRoute>
          }
      ],
      get children() {
          return this._children;
      },
    set children(value) {
      this._children = value;
    },
  },
]);

export default router;
