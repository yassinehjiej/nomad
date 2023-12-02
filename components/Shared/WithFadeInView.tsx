import React from 'react';
import FadeInView from './FadeInView';

const withFadeInView = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => (
    <FadeInView>
      <WrappedComponent {...props} />
    </FadeInView>
  );
};

export default withFadeInView;
