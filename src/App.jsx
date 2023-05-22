import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';

function App() {
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
