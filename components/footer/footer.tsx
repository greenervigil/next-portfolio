import Container from "../container/container"

const Footer: React.FC = () => {
    return (
        <Container>
            <footer className="bottom-0 w-full flex justify-center align-baseline border-t border-t-teal-600">
            <p className="font-mono m-3 ">Greener-Vigil &copy; {new Date().getFullYear()}</p>
            </footer>
        </Container>
    )
};

export default Footer;