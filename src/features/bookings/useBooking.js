import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';

export function useBooking(id) {
  const {
    data: booking,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['booking', id],
    queryFn: () => getBooking(id),
    retry: false,
  });

  return {
    booking,
    isLoading,
    error,
  };
}
