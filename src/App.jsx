import React from 'react';
import {BrandStory, Footer, HowItWorks, Investor, Navbar, Plans, Platform, Showoff, Testimonials} from './components/index'

function App() {
  return (
    <div className="text-3xl font-bold underline"> 
      <Navbar />
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
