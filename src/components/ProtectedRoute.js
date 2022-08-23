// import React from 'react';
// import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';


// const ProtectedRoute = ({ component: Component, ...props }) => {

//   return (
//     <Route>
//       {
//         () => props.loggedIn ?
//           <Component exact {...props} /> : <Navigate to="/signin" replace />
//       }
//     </Route>
//   )
// }


// export default ProtectedRoute;


import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = (props) => {
  return props.loggedIn ? <Outlet /> : <Navigate to="/signin" replace />
}

export default ProtectedRoute



