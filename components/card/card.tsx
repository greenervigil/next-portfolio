import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({
    children
}) => {
    return (
        <div className="w-1/2 text-black h-52 text-center my-0 mx-auto pt-1 overflow-y-hidden rounded-md bg-slate-500">
            {children}
        </div>
    )
}

export default Card;