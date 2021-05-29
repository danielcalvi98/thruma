import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Webstore from './views/Webstore';
import ScrollToTop from './components/ScrollToTop';
import ItemDetail from './components/ItemDetail';
import About from './views/About';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/bars" component={ Webstore } />
        <Route exact path="/bars/:id" component={ ItemDetail } />
        <Route exact path="/about" component={ About } />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
