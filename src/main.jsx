import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import EmployeeDetailsPage from './Pages/EmployeeDetailsPage/EmployeeDetailsPage.jsx'
import EmployeeProvider from './Components/EmployeeProvider/EmployeeProvider.jsx'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.jsx'
import { QueryClientProvider , QueryClient } from '@tanstack/react-query'
import InvalidRoute from './Components/InvalidRoute/InvalidRoute.jsx'


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      suspense:true
    }
  }
}
);


const appConfig = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : < InvalidRoute/>
  },
  {
    path : '/employee/:employeeId',
    element: <EmployeeDetailsPage />
    
  }
]);


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <EmployeeProvider >
      <RouterProvider router={appConfig} />
    </EmployeeProvider>
  </QueryClientProvider>
  
  
)
