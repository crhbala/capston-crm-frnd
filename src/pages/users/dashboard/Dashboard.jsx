import React, { useEffect, useState } from 'react'
import AppWidgetSummary from './AppWIdetSummary'
import { Container, Grid, Typography } from '@mui/material'
import BarChart from '../../../components/customeChart/PieChart'
import PieChart from '../../../components/customeChart/PieChart'
import LineChart from '../../../components/customeChart/LineChart'
import { userApi } from '../../../service/api/user/userApi'
import useGetuserData from '../../../Hooks/useGetuserData'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState();
  const user = useGetuserData();
     const fatchDashBoardData=async()=>{
         try
         { 
              const responce = await userApi.getDashBoardData(user.user.id);
              console.log(responce,"dasgbard");
              setDashboardData(responce.data)
         }catch(error)
         {
           console.log(error,"")
         }
     }
    
    useEffect(()=>{
      fatchDashBoardData();
    }, [])
    
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back 👋
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Total Tickets"
              total={dashboardData?.totalTickets}
              color="success"
              // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Tickets in-Process"
              total={dashboardData?.inProgressTickets}
              color="info"
              // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Tickets Open"
              total={dashboardData?.openTickets}
              color="warning"
              // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Ticket Close"
              total={dashboardData?.closedTickets}
              color="error"
              // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <LineChart />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <PieChart />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard