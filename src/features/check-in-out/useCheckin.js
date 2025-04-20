import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-in',
        isPaid: true,
      }),

    onSuccess: (data) => {
      toast.success(`Bookign #${data.id} checked in successfully`);
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },

    onError: (error) => {
      toast.error(`There was and error while checking in`);
    },
  });

  return { checkin, isCheckingIn };
}
