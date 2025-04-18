import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

export function useBookings() {
  const queryClient = useQueryClient();
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
    queryFn: () => getBookings({ filter, sortByValue, page }),
  });
  const bookings = data?.data;
  const count = data?.count;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortByValue, page + 1],
      queryFn: () => getBookings({ filter, sortByValue, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortByValue, page - 1],
      queryFn: () => getBookings({ filter, sortByValue, page: page - 1 }),
    });
  }

  return { isLoading, bookings, error, count };
}
