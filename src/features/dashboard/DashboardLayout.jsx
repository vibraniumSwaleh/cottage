import styled from 'styled-components';
import { useRecentBookings } from './useRecentBookings';
import Spinner from '../../ui/Spinner';
import { useRecentStays } from './useRecentStays';
import Stats from './Stats';
import { useCabins } from '../cabins/useCabins';
import SalesChart from './SalesChart';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { cabins, isLoading: isCabinLoading } = useCabins();

  const cabinCount = cabins?.length;
  const {
    bookings,
    numDays,
    isLoading: isBookingsLoading,
  } = useRecentBookings();
  const { confirmedStays, isLoading: isStaysLoading } = useRecentStays();
  if (isBookingsLoading || isStaysLoading || isCabinLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        cabinCount={cabinCount}
        numDays={numDays}
      />
      <div>Today&apos;s activity</div>
      <div>Chart stay durations</div>
      <SalesChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
