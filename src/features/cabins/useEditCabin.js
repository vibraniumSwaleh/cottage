import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ editCabinData, id }) => createEditCabin(editCabinData, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      toast.success(`Cabin successfuly edited`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
