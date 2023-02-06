interface ButtonGroupProps {
    children: any;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({children}) => {
    return (
        <div className="flex justify-center items-center gap-5 my-3">
            {children}
        </div>
    )
}

export default ButtonGroup;