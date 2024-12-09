import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({
    children
}) => {
    return (
        <div className="md:w-2/5 text-white max-h-min text-center my-8 mx-auto p-4 overflow-hidden rounded-xl shadow-2xl shadow-teal-600 border-solid bg-teal-600 backdrop-blur-xl">
            {children}
        </div>
    )
}

export default Card;