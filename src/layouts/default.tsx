import { Outlet } from 'react-router-dom';
import { PageWrapper } from './styles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function DefaultLayout() {
  return (
    <PageWrapper>
      <Header />
      <Outlet />
      <Footer />
    </PageWrapper>
  );
}
