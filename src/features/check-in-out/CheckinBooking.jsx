import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from '../bookings/useBooking';

import styled from 'styled-components';
import BookingDataBox from '../../features/bookings/BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import Spinner from '../../ui/Spinner';
import Checkbox from '../../ui/Checkbox';
import { useEffect, useState } from 'react';
import { formatCurrency } from '../../utils/helpers';
import { useCheckin } from './useCheckin';

import { useSettings } from '../settings/useSettings';

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [checkIsPaid, setCheckIsPaid] = useState(false);
  const [checkIsBreakfast, setCheckIsBreakfast] = useState(false);
  const { booking, isLoading } = useBooking();
  const { checkin, isCheckingIn } = useCheckin();
  useEffect(() => setCheckIsPaid(booking?.isPaid ?? false), [booking?.isPaid]);
  const { settings, isLoading: isSettingsLoading } = useSettings();

  const moveBack = useMoveBack();

  if (isLoading || isSettingsLoading) return <Spinner />;

  const { id: bookingId, guests, totalPrice, numGuests, numNights } = booking;

  const optionalBreakfastPrice =
    settings?.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!checkIsPaid) return;
    if (checkIsBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  if (isCheckingIn) return <Spinner />;

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <Box>
        <Checkbox
          checked={checkIsBreakfast}
          onChange={() => {
            setCheckIsBreakfast((checkIsBreakfast) => !checkIsBreakfast);
            setCheckIsPaid(false);
          }}
          id='breakfast'
        >
          Want to add breakfast for{' '}
          <strong>{formatCurrency(settings.breakfastPrice)}</strong>
        </Checkbox>
      </Box>

      <Box>
        <Checkbox
          checked={checkIsPaid}
          onChange={() => setCheckIsPaid(!checkIsPaid)}
          id='confirm'
          disabled={checkIsPaid || isCheckingIn}
        >
          I confirm that <strong>{guests.fullName}</strong> has paid the total
          amount of{' '}
          <strong>
            {checkIsBreakfast
              ? `${formatCurrency(
                  totalPrice + optionalBreakfastPrice,
                )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                  optionalBreakfastPrice,
                )})`
              : formatCurrency(totalPrice)}
          </strong>
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!checkIsPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
