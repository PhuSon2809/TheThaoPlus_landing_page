import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeBenifit from 'src/sections/home/HomeBenifit';
import HomeGalary from 'src/sections/home/HomeGalary';
import HomeIntro from 'src/sections/home/HomeIntro';
import HomeUtitlities from 'src/sections/home/HomeUtitlities';

function HomePage() {
  return (
    <div>
      <Helmet>
        <title> Trang chủ | TheThaoPlus </title>
      </Helmet>

      <HomeIntro />
      <HomeUtitlities />
      <HomeBenifit />
      <HomeGalary />
    </div>
  );
}

export default HomePage;
