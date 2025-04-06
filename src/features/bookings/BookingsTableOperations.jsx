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

      {/* <SortBy
        options={[
          { value: 'name-asc', label: 'Name (A-Z)' },
          { value: 'name-desc', label: 'Name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Price (low to high)' },
          { value: 'regularPrice-desc', label: 'Price (high to low)' },
          { value: 'maxCapacity-asc', label: 'Capacity (low to high)' },
          { value: 'maxCapacity-desc', label: 'Capacity (high to low)' },
        ]}
      /> */}
    </TableOperations>
  );
}

export default BookingsTableOperations;
