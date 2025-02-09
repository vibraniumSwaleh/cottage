import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';

export function useSettings() {
  const {
    isLoading: isSettings,
    error,
    data: settings,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });

  return { isSettings, error, settings };
}
