import {Routes, Route} from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Varela Round', 'sans-serif']
  }
})

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="home" element={<Home />}/>
          <Route path="portfolio" element={<Portfolio />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="resume" element={<Resume />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;