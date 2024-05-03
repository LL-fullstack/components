import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer'; 
import coffee1 from './images/coffee1.jpg';
import coffee2 from './images/coffee2.jpg';
import coffee3 from './images/coffee3.jpg';
import coffee4 from './images/coffee4.jpg';

function App() {
  let title = "CaféJoy";
  let primaryButtonName = "Learn more";
  let secondaryButtonName = "Order now";
  let primaryButtonStyle = "primaryBtn";
  let secondaryButtonStyle = "secondaryBtn";
  let bannerTitle = "Brewing Joy, One Cup at a Time!";
  let bannerText = 
  "Savor every sip at CaféJoy, where bliss meets brew. Indulge in our aromatic blends, crafted with passion and care. Experience pure delight in every cup, only at CaféJoy."
  let navList = ["Menu", "Rewards", "Gift Cards", "Contact Us"];
  let footerList = ["Index", "About Us", "Wholesale", "Contact Us"];
  let footerCopyright = "CaféJoy @2024";

  const imageList = [
    {
      id: 1001,
      url: coffee1
    },
    {
      id: 1002,
      url: coffee2
    },
    {
      id: 1003,
      url: coffee3
    },
    {
      id: 1004,
      url: coffee4
    }
  ];

  return (
    <div className="App">
      <Header title={title}
              navList={navList} />;

      <Banner primaryButtonName={primaryButtonName} 
              secondaryButtonName={secondaryButtonName} 
              primaryButtonStyle={primaryButtonStyle}
              secondaryButtonStyle={secondaryButtonStyle} 
              bannerTitle={bannerTitle} 
              bannerText={bannerText} />;

      <Gallery imageList={imageList}/>;

      <Footer footerList={footerList}
              footerCopyright={footerCopyright} />;
    </div>
  );
}

export default App;
