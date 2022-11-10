import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Navbar />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
