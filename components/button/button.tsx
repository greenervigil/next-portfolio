import React from 'react';

interface ButtonProps {
    label: string;
    ariaLabel?: string;
    handleOnclick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    ariaLabel,
    handleOnclick
}) => {
    return (
        <button 
            type='button' 
            aria-label={ariaLabel || label} 
            className='bg-teal-600 rounded-lg border-slate-800 text-black text-center text-lg h-10 w-auto px-4 shadow-2xl shadow-slate-700 hover:bg-teal-900 hover:text-white hover:rounded-lg hover:shadow-2xl hover:shadow-teal-600 font-mono' 
            onClick={handleOnclick}
        >
            {label}
        </button>
    )
} 

export default Button;