import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { AppWidgetSummary } from '../@dashboard/app';
import WhereToVoteRoundedIcon from '@mui/icons-material/WhereToVoteRounded';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

function HomeBenifit() {
  return (
    <Container sx={{ py: 15 }}>
      <Stack alignItems="center" justifyContent="center" gap={1} mb={5}>
        <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
          để có cuộc sông tốt đẹp hơn
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Mọi người đều xứng đáng có được trải nghiệm sống tốt hơn.
        </Typography>
      </Stack>
      <Grid container columnSpacing={5}>
        <Grid item xs={12} md={4}>
          <AppWidgetSummary
            title="Tất cả các môn thể thao bạn muốn, đều có trong TheThaoPlus. "
            total="Tích hợp"
            color="success"
            icon={<AccountTreeIcon fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AppWidgetSummary
            title="Tìm kiếm và đặt sân dễ dàng chỉ với vài thao tác"
            total="Tiện lợi"
            color="info"
            icon={<AccessAlarmIcon fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AppWidgetSummary
            title="Không mất chi phí dịch vụ, nhưng rất nhiều lợi ích bổ sung."
            total="100% Miễn phí"
            color="secondary"
            icon={<WhereToVoteRoundedIcon fontSize="large" />}
          />
        </Grid>
      </Grid>
      <Box sx={{ px: 24.8 }}>
        <Grid container columnSpacing={5} mt={5}>
          <Grid item xs={12} md={6}>
            <AppWidgetSummary
              title="Cập nhật tự động thông tin tìm kiếm hàng giờ."
              total="Cập nhật tự động"
              color="warning"
              icon={<AccountTreeIcon fontSize="large" />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AppWidgetSummary
              title="Cùng nhau tạo ra một lối sống lành mạnh chỉ trong vài bước."
              total="Sức khỏe"
              color="error"
              icon={<WhereToVoteRoundedIcon fontSize="large" />}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default HomeBenifit;
