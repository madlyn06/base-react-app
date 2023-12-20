import React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './src/layout/MainLayout'
const useRouterElements = () => {
  //   const { isAuthenticated } = useContext(AppContext)
  //   function ProtectedRoute() {
  //     return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
  //   }
  //   function RejectedRoute() {
  //     return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
  //   }
  const elements = useRoutes([
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <div>123</div>
        </MainLayout>
      )
    }
  ])
  return elements
}

export default useRouterElements
