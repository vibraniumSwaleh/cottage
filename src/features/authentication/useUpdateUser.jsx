import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser as updateCurrentUserApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateCurrentUser, isLoading } = useMutation({
    mutationFn: updateCurrentUserApi,
    onSuccess: (user) => {
      toast.success('User data updated successfully');
      queryClient.invalidateQueries({ queryKeys: ['user'] });
    },
    onError: (error) => {
      toast.error(`Failed to update user data: ${error.message}`);
    },
  });

  return { updateCurrentUser, isLoading };
}
