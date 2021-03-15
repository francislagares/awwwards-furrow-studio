import React from 'react';
import HomeBanner from '../components/homePage/homeBanner';
import Layout from '../components/layout';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <HomeBanner />
    </Layout>
  );
};

export default IndexPage;
