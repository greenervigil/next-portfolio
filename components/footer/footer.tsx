import Container from "../container/container"

const Footer: React.FC = () => {
    return (
        <Container>
            <footer className="bottom-0 fixed w-full flex justify-center align-baseline border-t border-t-cyan-200">
            <p className="font-mono m-3 ">Greener-Vigil &copy; {new Date().getFullYear()}</p>
            </footer>
        </Container>
    )
};

export default Footer;