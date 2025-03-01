import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useState } from 'react';
import { useCabins } from './useCabins';
import Table from '../../ui/Table';

function CabinTable() {
  const { isLoading, cabins, error } = useCabins();
  const [activeCabinId, setActiveCabinId] = useState(null);

  if (isLoading) return <Spinner />;

  return (
    <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
      <Table.Header role='row'>
        <div>image</div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div>Action</div>
      </Table.Header>
      <Table.Body
        data={cabins}
        render={(cabin) => (
          <CabinRow
            cabin={cabin}
            key={cabin.id}
            setActiveCabinId={setActiveCabinId}
            isActive={activeCabinId === cabin.id}
          />
        )}
      />
    </Table>
  );
}

export default CabinTable;
