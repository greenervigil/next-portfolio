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
            className='bg-cyan-300 rounded-lg border-cyan-400 text-black text-center text-lg h-10 w-28 shadow-md hover:bg-cyan-800 hover:text-cyan-400 hover:rounded-lg hover:shadow-2xl hover:shadow-cyan-400 font-mono' 
            onClick={handleOnclick}
        >
            {label}
        </button>
    )
} 

export default Button;