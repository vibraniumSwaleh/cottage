import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import { HiPencilSquare, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import { useCreateCabin } from './useCreateCabin';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

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

function CabinRow({ cabin }) {
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

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  }

  return (
    <Table.Row>
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
        <button onClick={handleDuplicate}>
          <HiSquare2Stack />
        </button>

        <Modal>
          <Modal.Open opens='edit'>
            <button>
              <HiPencilSquare />
            </button>
          </Modal.Open>
          <Modal.Window name='edit'>
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Open opens='delete'>
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name='delete'>
            <ConfirmDelete
              resourceName='cabins'
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>

        <Menus.Menu>
          <Menus.Toggle id={cabinId} />

          <Menus.List id={cabinId}>
            <Menus.Button>
              <HiSquare2Stack />
            </Menus.Button>

            <Menus.Button>
              <HiPencilSquare />
            </Menus.Button>

            <Menus.Button>
              <HiTrash />
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </ButtonGroup>
    </Table.Row>
  );
}

export default CabinRow;
