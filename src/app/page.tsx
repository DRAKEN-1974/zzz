import React from 'react';
import Top from './components/Top';
import Middle from './components/Middle';
import Third from './components/Third';
import Last from './components/last';
import Footer from './components/footer';

const Page = () => {
  return (
    <div>
      <Top />
      <Middle />
      <Third />
      <Last />
      <Footer />
    </div>
  );
};

export default Page;