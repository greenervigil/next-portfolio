interface ContainerProps {
    children?: any;
}
const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="p-4 m-6">
            {children}
        </div>
    )
}

export default Container;