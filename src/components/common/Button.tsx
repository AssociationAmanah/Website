import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'goldOutline' | 'greenOutline' | 'whiteOutline'; // 👈 Ajouté ici
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  fullWidth = false,
  disabled = false,
}) => {
  const baseStyles = 'font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center shadow-sm';

  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700',
    tertiary: 'bg-tertiary-500 text-white hover:bg-tertiary-600 active:bg-tertiary-700',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
    goldOutline: 'bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600',
    greenOutline: 'bg-transparent border-2 border-[#2e8b57] text-[#2e8b57] hover:bg-[#2e8b57] hover:text-white active:bg-[#276749]',
    whiteOutline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 active:bg-gray-200', // ✅ Nouveau variant
  };

  const widthStyle = fullWidth ? 'w-full' : 'w-full md:w-auto';

  const sizeStyles = {
    sm: 'text-sm py-3 px-4 md:py-2 md:px-3',
    md: 'text-base py-4 px-6 md:py-2 md:px-4',
    lg: 'text-lg py-5 px-8 md:py-3 md:px-6',
  };

  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;