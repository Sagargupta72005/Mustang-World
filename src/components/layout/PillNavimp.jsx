import React from 'react';
import PillNav from '../components/PillNav ';
// import logoImage from './assets/1000_F_524117145_Ov0d4RbM6LpGRs3yVDbqdSYRItq5sH42-removebg-preview.png';
const PillNavimp = () => {
  return (
    <div>
    <PillNav 
      //  logo={logoImage}
      logoAlt="Company Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'Model', href: '/Model' },
        { label: 'Gallery', href: '/Gallery' },
        { label: 'About', href: '/About' }
      ]}
      activeHref="/"
      className="custom-nav " 
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
    />
    </div>
  );
};

export default PillNavimp;
