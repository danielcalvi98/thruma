import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Webstore from './views/Webstore';
import ScrollToTop from './components/ScrollToTop';
import ItemDetail from './components/ItemDetail/icelandicDetails';
import ItemDetail2 from './components/ItemDetail/englishDetails';
import ItemDetail3 from './components/ItemDetail/danishDetails';
import About from './views/About';
import english from './views/About/english';
import danish from './views/About/danish';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/bars" component={ Webstore } />
        <Route exact path="/bars/is/:id" component={ ItemDetail } />
        <Route exact path="/bars/en/:id" component={ ItemDetail2 } />
        <Route exact path="/bars/da/:id" component={ ItemDetail3 } />
        <Route exact path="/about/is" component={ About } />
        <Route exact path="/about/da" component={ danish } />
        <Route exact path="/about/en" component={ english } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
