import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ServicePackages from './components/ServicePackages';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ConsultationBooking from './components/ConsultationBooking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        isLeadMagnetOpen={isLeadMagnetOpen}
        setIsLeadMagnetOpen={setIsLeadMagnetOpen}
      />
      <ProblemSolution />
      <ServicePackages />
      <CaseStudies />
      <Process />
      <Testimonials />
      <ConsultationBooking />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;