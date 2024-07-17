import React from 'react';
import ResponsiveComponent from './ResponsiveComponent';
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';

const MyComponent: React.FC = () => {
  return (
    <ResponsiveComponent>
      {({ size }) => (size === 'xs' ? <MobileComponent /> : <DesktopComponent />)}
    </ResponsiveComponent>
  );
};

export default MyComponent;