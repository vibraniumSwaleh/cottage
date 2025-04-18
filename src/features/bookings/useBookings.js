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

  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const { isLoading, data, error } = useQuery({
    queryKey: ['bookings', filter, sortByValue, page],
    queryFn: () => getBookings({ filter, sortByValue }),
  });
  const bookings = data?.data;
  const count = data?.count;

  return { isLoading, bookings, error, count };
}
