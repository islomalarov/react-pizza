import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={252}
    height={450}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="124" cy="114" r="101" />
    <rect x="0" y="259" rx="10" ry="10" width="252" height="32" />
    <rect x="0" y="306" rx="10" ry="10" width="252" height="88" />
    <rect x="0" y="416" rx="10" ry="10" width="86" height="54" />
    <rect x="100" y="407" rx="24" ry="24" width="147" height="66" />
  </ContentLoader>
);

export default Skeleton;
