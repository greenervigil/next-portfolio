import { NextPage } from "next";
import Button from "../components/button/button";
import Card from "../components/card/card";
import Container from "../components/container/container";
import Input from "../components/input/input";
import Textarea from "../components/textarea/textarea";

const Contact: NextPage = () => {
    return (
        <>
            <Container>
                <h1 className="font-mono text-center text-6xl m-5">Contact</h1>
            </Container>
            <>
                <Card>
                    <Container>
                        <p className="font-mono">Let me know if there is a project you want to work on together.  Hope to hear from you soon. </p>
                    </Container>
                    <form className="w-full" action="https://formsubmit.co/daniel.julian.vigil@gmail.com" method="POST">
                        <Input label="Name" type="text" name="name" maxLength={136} required/>
                        <Input label="EMail" type="email" name="email" required />
                        <Input label="Phone Number" type="phone" name="phone" maxLength={13} />

                        <Textarea required rows={13}/>
                        <Button label="send" type="submit" />
                    </form>
                </Card>
            </>
        </>
    )
}

export default Contact;