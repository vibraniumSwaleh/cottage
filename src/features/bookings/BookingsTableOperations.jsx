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
          { label: 'Checked-in', value: 'checked-in' },
          { label: 'Checked-out', value: 'checked-out' },
          { label: 'Unconfirmed', value: 'unconfirmed' },
        ]}
      />

      <SortBy
        options={[
          { value: 'totalPrice-asc', label: 'Amount (low to high)' },
          { value: 'totalPrice-desc', label: 'Amount (high to low)' },
          { value: 'startDate-asc', label: 'Sort by date (recent first)' },
          { value: 'startDate-desc', label: 'Sort by date (old first)' },
        ]}
      />
    </TableOperations>
  );
}

export default BookingsTableOperations;
