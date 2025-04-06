import BookingsTableOperations from '../features/bookings/BookingsTableOperations';
import BookingTable from '../features/bookings/BookingTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Bookings() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All bookings</Heading>
        <BookingsTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
