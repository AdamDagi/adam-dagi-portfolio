import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Varela Round', 'sans-serif']
  }
})

function App() {
  return (
    <div className="main">
      <Header />
      <div className="page-conteiner">
        <div className="info-card">
          <div className="section profile-picture-section">
            <div className="profile-picture">
            </div>
          </div>
          <div className="section profile-name-section">
            <h1 className="profile-name">Adam Dagi</h1>
          </div>
          <div className="section profile-location-section">
            <div className="profile-location-icon"></div>
            <div className="location">New York 🇺🇸 </div>
          </div>
          <div className="section profile-bio-section">
            <div className="profile-bio">
            Ambitious student finishing Columbia Engineering Coding Boot Camp and ready for further study and progress in a new profession. 
            Energetic, responsible, sociable with management skills in the restaurant and a Bachelor's degree in law. 
            Flexible hard worker ready to learn and contribute to team success. 
            Organized and motivated employee eager to apply time management and organizational skills in various environments. 
            Seeking entry-level opportunities to expand skills while facilitating company growth.
            My experience of working in a team will undoubtedly help me in improving the quality of the work performed, 
            and the experience of working with clients will help me see any product from the consumer's side.     
            </div>
          </div>
          <div className="section uversity-section">
            <div className="graduation-icon"></div>
            <div className="graduation-uni">Columbia Engineering Coding Boot Camp</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
