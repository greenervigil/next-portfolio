import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({
    children
}) => {
    return (
        <div className="w-1/2 text-black min-h-max text-center my-0 mx-auto p-4 overflow-y-hidden rounded-lg shadow-2xl shadow-cyan-400 border-solid bg-slate-400">
            {children}
        </div>
    )
}

export default Card;