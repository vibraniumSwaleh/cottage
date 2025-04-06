import BookingRow from './BookingRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import { useBookings } from './useBookings';
import Spinner from '../../ui/Spinner';
import { useSearchParams } from 'react-router-dom';

function BookingTable() {
  const [searchParams] = useSearchParams();
  const { isLoading, bookings, error } = useBookings();

  if (isLoading) return <Spinner />;

  const filteredValue = searchParams.get('status');

  let filteredBookings;
  switch (filteredValue) {
    case 'all':
      filteredBookings = bookings;
      break;
    case 'confirmed':
      filteredBookings = bookings?.filter(
        (booking) => booking.status === 'confirmed',
      );
      break;
    case 'checked-in':
      filteredBookings = bookings?.filter(
        (booking) => booking.status === 'checked-in',
      );
      break;
    case 'checked-out':
      filteredBookings = bookings?.filter(
        (booking) => booking.status === 'checked-out',
      );
      break;
    case 'unconfirmed':
      filteredBookings = bookings?.filter(
        (booking) => booking.status === 'unconfirmed',
      );
      break;
    default:
      filteredBookings = bookings;
      break;
  }

  if (!bookings.length) return <Empty resourceName='bookings' />;

  return (
    <Menus>
      <Table columns='0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem'>
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredBookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;
