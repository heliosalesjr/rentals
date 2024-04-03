
import {Hero} from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes'
import Footer from '@/components/Footer';
import HomeProperties from '@/components/HomeProperties';

const HomePage = () => {
  console.log(process.env.MONGODB_URI)
  return (
    
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      <Footer />
      
    </>
  );
};
export default HomePage;