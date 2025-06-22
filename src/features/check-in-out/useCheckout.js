import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),

    onSuccess: (data) => {
      toast.success(`Bookign #${data.id} checked out successfully`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: (error) => {
      toast.error(`There was and error while checking out`);
    },
  });

  return { checkout, isCheckingOut };
}
