import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredValue='discount'
        options={[
          { label: 'All', value: 'discount' },
          { label: 'With discount', value: 'with-discount' },
          { label: 'No discount', value: 'no-discount' },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
