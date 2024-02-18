import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider, QueryClient } from 'react-query'

import {router} from './routers/index.jsx'
import {RouterProvider} from 'react-router-dom'

// const userContext = React.createContext()

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <userContext.Provider value={}> */}
        <RouterProvider router={router}/>
      {/* </userContext.Provider>     */}
    </QueryClientProvider>
  </React.StrictMode>,
)
