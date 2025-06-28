import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log('Login successful', user);
      navigate('/dashboard');
    },
    onError: (error) => {
      console.log('Login failed', error);
      toast.error('Login failed. Please check your credentials and try again.');
    },
  });

  return { login, isLoading };
}
