import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get('status');
  const sortBy = searchParams.get('sortBy') || 'totalPrice-asc';

  const filter =
    !filteredValue || filteredValue === 'all'
      ? null
      : { field: 'status', value: filteredValue, method: '' };

  const [field, direction] = sortBy.split('-');
  const sortByValue = {
    field,
    direction,
  };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortByValue],
    queryFn: () => getBookings({ filter, sortByValue }),
  });

  return { isLoading, bookings, error };
}
