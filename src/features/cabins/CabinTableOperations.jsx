import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredValue='discount'
        options={[
          { label: 'All', value: 'all' },
          { label: 'No discount', value: 'no-discount' },
          { label: 'With discount', value: 'with-discount' },
        ]}
      />

      <SortBy
        options={[
          { value: 'name-asc', label: 'Name (A-Z)' },
          { value: 'name-desc', label: 'Name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Price (low to high)' },
          { value: 'regularPrice-desc', label: 'Price (high to low)' },
          { value: 'maxCapacity-asc', label: 'Capacity (low to high)' },
          { value: 'regularCapacity-desc', label: 'Capacity (high to low)' },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
