import { useRef, useState } from 'react';

import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

import { useUser } from './useUser';
import { useUpdateUser } from './useUpdateUser';
import SpinnerMini from '../../ui/SpinnerMini';

function UpdateUserDataForm() {
  const { updateCurrentUser, isLoading } = useUpdateUser();
  const fileInputRef = useRef();

  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName) return;

    updateCurrentUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setFullName('');
          if (fileInputRef.current) fileInputRef.current.value = '';
        },
      },
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label='Email address'>
        <Input value={email} disabled />
      </FormRow>

      <FormRow label='Full name'>
        <Input
          type='text'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id='fullName'
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label='Avatar image'>
        <FileInput
          ref={fileInputRef}
          id='avatar'
          accept='image/*'
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        <Button
          type='reset'
          variation='secondary'
          disabled={isLoading}
          onClick={handleCancel}
        >
          Cancel
        </Button>

        <Button disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : 'Update account'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
