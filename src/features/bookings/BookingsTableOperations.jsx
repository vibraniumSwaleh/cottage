import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function BookingsTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredValue='status'
        options={[
          { label: 'All', value: 'all' },
          { label: 'Confirmed', value: 'confirmed' },
          { label: 'Checked-in', value: 'checked-in' },
          { label: 'Checked-out', value: 'checked-out' },
          { label: 'Unconfirmed', value: 'unconfirmed' },
        ]}
      />

      <SortBy
        options={[
          { value: 'totalPrice-asc', label: 'Amount (low to high)' },
          { value: 'totalPrice-desc', label: 'Amount (high to low)' },
        ]}
      />
    </TableOperations>
  );
}

export default BookingsTableOperations;
