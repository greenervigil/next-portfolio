interface ContainerProps {
    children?: any;
}
const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="p-4 mt-3 w-full">
            {children}
        </div>
    )
}

export default Container;