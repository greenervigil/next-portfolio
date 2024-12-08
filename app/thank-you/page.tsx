import Container from "../../components/container/container";
import { NextPage } from "next";

const ThankYou: NextPage = () => {
    return (
        <div className="font-mono text-center text-6xl mt-16">
            <h1>Thank You</h1>

            <Container>
                        <p className="font-mono text-neutral-900">Thank you for reaching out.  Please allow up to 24 hours for a response.  I will be in touch soon. </p>
                    </Container>
        </div>
    )
}

export default ThankYou;