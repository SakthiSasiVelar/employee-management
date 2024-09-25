import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import EmployeeDetailsPage from './Pages/EmployeeDetailsPage/EmployeeDetailsPage.jsx'
import EmployeeProvider from './Components/EmployeeProvider/EmployeeProvider.jsx'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.jsx'


const appConfig = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <ErrorBoundary />
  },
  {
    path : '/employee/:employeeId',
    element: <EmployeeDetailsPage />
    
  }
]);


createRoot(document.getElementById('root')).render(
  <EmployeeProvider >
      <RouterProvider router={appConfig} />
  </EmployeeProvider>
  
)
