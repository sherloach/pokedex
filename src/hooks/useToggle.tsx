import { useState } from 'react';

const useToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggler = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 350);
  };

  return [isOpen, toggler] as const;
};

export default useToggle;
