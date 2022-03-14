import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@chakra-ui/react';
import PeriodTab from './components/PeriodTab/PeriodTab';
import SummaryBoard from './components/SummaryBoard/SummaryBoard';
import DashboardDetails from './components/DashboardDetails/DashboardDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDashboardData } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const dashboardData = useSelector(state => state.dashboardData)
  const {dboardData} = dashboardData;

  useEffect(()=>{
    dispatch(getDashboardData())
  },[dispatch])

  console.log('dashboard data',dashboardData)

  return (
    <Container maxW={'container.md'}>
      <Box  as='h1' fontSize='22px' fontWeight='600' pb='24px' paddingTop='40px'>Main metrics</Box>
      <PeriodTab activeCell={3}/>
      {

      dboardData ?
      (
        <>
          <SummaryBoard 
            errors={dboardData?.data[0].errors_yesterday} 
            zeroes={dboardData?.data[0].zeroes_yesterday}
            timeouts={dboardData?.data[0].timeout_yesterday}
            errors_code_listings={dboardData?.errors_yesterday} 
          />
          <DashboardDetails />        
        </>
      ) 
        :null
      }
    </Container>
  );
}

export default App;
