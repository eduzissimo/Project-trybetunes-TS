import './layout.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/header';

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
