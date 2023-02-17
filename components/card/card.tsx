import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({
    children
}) => {
    return (
        <div className="md:w-3/5 text-white max-h-min text-center my-8 mx-auto p-4 overflow-hidden rounded-lg shadow-2xl shadow-teal-600 border-solid bg-teal-600">
            {children}
        </div>
    )
}

export default Card;