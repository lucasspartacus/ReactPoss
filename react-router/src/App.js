import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import {Provider} from "react-redux";
import store from './store';
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core"

export const queryClient = new QueryClient({

  defaultOptions:{
      queries:{
         staleTime: 30 * 1000,//Realiza requisições a cada 30 segundos
         retry: false
      }
  }

})

function App() {
  return (
    <QueryClientProvider client = {queryClient}>
      <Provider store={store}>
        <RouterProvider router={routes}/>
      </Provider>
    </QueryClientProvider>
    
  );
}

export default App;
