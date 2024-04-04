
import {Hero} from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes'
import Footer from '@/components/Footer';
import HomeProperties from '@/components/HomeProperties';
import connectDB from '@/config/database';

const HomePage =  () => {
  

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