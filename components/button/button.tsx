import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    ariaLabel?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    label,
    ariaLabel,
    type
}) => {
    return (
        <button 
            type='button' 
            aria-label={ariaLabel || label} 
            className='bg-teal-600 rounded-lg border-slate-800 text-black text-center text-lg h-10 w-auto px-4 shadow-2xl hover:bg-teal-900 hover:text-white hover:rounded-lg hover:shadow-2xl shadow-teal-600 font-mono dark:bg-yellow-500' 
        >
            {label}
        </button>
    )
} 

export default Button;