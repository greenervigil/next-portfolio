import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    ariaLabel?: string;
    children: any;
}

const Button: React.FC<ButtonProps> = ({
    label,
    ariaLabel,
    children
}) => {
    return (
        <button 
            type='button' 
            aria-label={ariaLabel || label} 
            className='bg-yellow-500 text-slate-900 text-center rounded-lg shadow-2xl shadow-teal-600 min-w-36 h-9 px-4 hover:bg-yellow-600 hover:text-white hover:shadow-teal-500' 
        >
            {children}
        </button>
    )
} 

export default Button;