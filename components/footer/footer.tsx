import Container from "../container/container"

const Footer: React.FC = () => {
    return (
        <Container>
            <footer className="flex justify-center align-baseline border-t">
            <p className="font-mono m-3">Greener-Vigil &copy; {new Date().getFullYear()}</p>
            </footer>
        </Container>
    )
};

export default Footer;