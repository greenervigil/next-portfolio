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
            className='bg-yellow-500 rounded-lg border-slate-800 text-black text-center text-lg h-10 w-auto px-4 shadow-2xl hover:bg-teal-900 hover:text-white hover:rounded-lg hover:shadow-2xl shadow-teal-600 font-mono' 
        >
            {children}
        </button>
    )
} 

export default Button;