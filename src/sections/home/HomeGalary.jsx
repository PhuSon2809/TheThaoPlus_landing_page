import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

import './swiper.css';

function HomeGalary() {
  return (
    <Container sx={{ pb: 5 }}>
      <Stack alignItems="center" justifyContent="center" gap={1} mb={5}>
        <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
          giao diện thân thiện của chúng tôi
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Tìm cơ sở thể thao và gặp gỡ những người yêu thích thể thao!
        </Typography>
      </Stack>

      <Swiper
        slidesPerView={5}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box component="img" src="/assets/images/UserHome.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/UserHome.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/UserHome.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/UserHome.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/UserHome.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/UserHome.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/UserHome.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/UserHome.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/UserHome.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/UserHome.png" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default HomeGalary;
