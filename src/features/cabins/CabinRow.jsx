import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import {
  HiOutlinePencil,
  HiPencilSquare,
  HiSquare2Stack,
  HiTrash,
} from 'react-icons/hi2';
import { useCreateCabin } from './useCreateCabin';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;

  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const ShowForm = styled.div`
  border-bottom: 1.5px solid var(--color-grey-400);
`;

function CabinRow({ cabin, setActiveCabinId, isActive }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;
  // console.log('CabinRow: ', cabin);
  const newCabin = {
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  };
  //console.log('newCabin: ', newCabin);

  return (
    <>
      <TableRow role='row'>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fit up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <ButtonGroup>
          <button onClick={() => createCabin(newCabin)}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setActiveCabinId(isActive ? null : cabinId)}>
            {isActive ? <HiPencilSquare /> : <HiOutlinePencil />}
          </button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </ButtonGroup>
      </TableRow>
      {isActive && (
        <ShowForm>
          <CreateCabinForm cabinToEdit={cabin} />
        </ShowForm>
      )}
    </>
  );
}

export default CabinRow;
