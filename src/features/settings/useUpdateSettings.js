import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSetting as updateSettingApi } from '../../services/apiSettings';

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateSettings } = useMutation({
    mutationFn: (newSetting) => updateSettingApi(newSetting),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['settings'],
      });
      toast.success(`Settings successfuly updated`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSettings };
}
