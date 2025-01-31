import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NewUsers from './pages/Users';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Account from './pages/Account';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='users' element={<NewUsers />} />
        <Route path='bookings' element={<Bookings />} />
        <Route path='cabins' element={<Cabins />} />
        <Route path='account' element={<Account />} />
        <Route path='settings' element={<Settings />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
