import React from 'react';
import {BrandStory, Footer, HowItWorks, Investor, Navbar, Plans, Platform, Showoff, Testimonials} from './components/index'

function App() {
  return (
    <div>
      <div className='flex py-6'>
      <Navbar />
      </div>
      <Investor />
      <BrandStory />
      <Platform />
      <Plans />
      <HowItWorks />
      <Plans />
      <Testimonials />
      <Showoff />
      <Footer />
    </div>
  );
}

export default App;
