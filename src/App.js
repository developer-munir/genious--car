import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routers/router';

function App() {
  return (
    <div className="max-w-7xl mx-auto" data-theme="light">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
