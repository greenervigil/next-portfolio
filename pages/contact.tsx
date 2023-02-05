import { NextPage } from "next";
import Button from "../components/button/button";
import Card from "../components/card/card";
import Container from "../components/container/container";
import Input from "../components/input/input";
import styles from '../styles/Home.module.css';

const Contact: NextPage = () => {
    return (
        <>
            <Container>
                <h1 className="font-mono text-center text-6xl m-5">Contact</h1>
            </Container>
            <Container>
                <Card>
                    <form className="w-full">
                        <Input label="Name" type="text" name="name" length={136}/>
                        <Input label="EMail" type="email" name="email" />
                        <Input label="Phone Number" type="phone" name="phone" length={13} />
                        <Button label="send" />
                    </form>
                </Card>
            </Container>
        </>
    )
}

export default Contact;