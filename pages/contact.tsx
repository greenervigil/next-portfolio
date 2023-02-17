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
                <h1 className="font-mono text-center text-6xl mt-16">Contact</h1>
            </Container>
            <>
                <Card>
                    <Container>
                        <p className="font-mono">Let me know if there is a project you want to work on together.  Hope to hear from you soon. </p>
                    </Container>
                    <form action='https://formsubmit.co/el/rowige' method='POST'>
                        <input type="hidden" name="_subject" value="New Incoming Request!" />
                        <Input label="Name" type="text" name="name" maxLength={136} required/>
                        <Input label="EMail" type="email" name="email" required />
                        <Input label="Phone Number" type="phone" name="phone" maxLength={13} />
                        <input type="hidden" name="_autoresponse" value="Thank you for reaching out.  Please allow up to 24 hours for a response.  I will be in touch soon."></input>
                        <Textarea required rows={13} name="message"/>
                        <button className="m-4 font-mono text-xl border border-yellow-500 rounded-2xl w-36 h-10 hover:bg-yellow-100 hover:text-slate-900" type="submit">Send</button>
                    </form>
                </Card>
            </>
        </>
    )
}

export default Contact;