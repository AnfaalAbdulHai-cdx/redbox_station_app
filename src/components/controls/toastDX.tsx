import {Button, ButtonText} from '../ui/button';
import {useToast, Toast, ToastTitle, ToastDescription} from '../ui/toast';
import React, {useState} from 'react';
import ButtonDX from './buttondx';

const ToastDX=(props: any) =>{
  const toast = useToast();
  const [toastId, setToastId] = React.useState('0');

  const handleToast = () => {
    if (!toast.isActive(toastId)) {
      showNewToast();
    }
  };

  const showNewToast = () => {
    const newId = Math.random().toString();
    setToastId(newId);
    toast.show({
      id: newId,
      placement: 'top',
      duration: 3000,
      render: ({id}) => {
        const uniqueToastId = 'toast-' + id;
        return (
          <Toast
            nativeID={uniqueToastId}
            action={props.action}
            variant={props.variant}>
            <ToastTitle>{props.toastTitle}</ToastTitle>
            <ToastDescription>{props.toastDescription}</ToastDescription>
          </Toast>
        );
      },
    });
  };

  return (
    <ButtonDX variant={"solid"} action={handleToast} buttonLabel={"Button Label"} />
  );
}


export default ToastDX;