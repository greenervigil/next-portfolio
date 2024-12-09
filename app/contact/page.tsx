'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/select/select";

import Card from "../../components/card/card";
import Container from "../../components/container/container";
import Input from "../../components/input/input";
import { NextPage } from "next";
import Textarea from "../../components/textarea/textarea";
import emailjs from '@emailjs/browser';
import { redirect } from "next/navigation";
import { useRef } from "react";

const Contact: NextPage = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_lok6uwg', 'template_67v6axp', form.current, 'qK9FJKLdEwQqCCZ4-')
        .then(
          () => {
            redirect('/thank-you');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

    return (
        <>
            <Container>
                <h1 className="font-mono text-center text-6xl mt-16">Contact</h1>
            </Container>
            <div className="mb-20">
                <Card>
                    <Container>
                        <p className="font-mono text-neutral-900">Let me know if there is a project you want to work on together.  Hope to hear from you soon. </p>
                    </Container>
                    <form onSubmit={sendEmail} className="flex flex-col items-center gap-6" ref={form}>
                        <Input className="w-[500px]" id="name" type="text" name="from_name" maxLength={136} required placeholder="Name"/>
                        <Input className="w-[500px]" id="email" type="email" name="user_email" required placeholder="Email"/>
                        <Input className="w-[500px]" id="number" type="phone" name="phone" maxLength={13} placeholder="Phone number"/>
                        <Input className="w-[500px]" id="business" type="text" name="business" maxLength={136} placeholder="Company name"/>
                        <Select name="website_type">
                            <SelectTrigger className="w-[500px]">
                                <SelectValue placeholder="Type of website" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="personal">Personal</SelectItem>
                                <SelectItem value="educational">Educational</SelectItem>
                                <SelectItem value="fitness">Sport/Fitness</SelectItem>
                                <SelectItem value="school">School</SelectItem>
                                <SelectItem value="smallBusiness">Small Business</SelectItem>
                                <SelectItem value="mediumBusiness">Medium Business</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select name="pages">
                            <SelectTrigger className="w-[500px]">
                                <SelectValue placeholder="Number of pages" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="one">1</SelectItem>
                                <SelectItem value="upToFive">2 - 5</SelectItem>
                                <SelectItem value="fiveToEight">6 - 8</SelectItem>
                                <SelectItem value="ten">Up to 10</SelectItem>
                                <SelectItem value="custom">10 +</SelectItem>
                            </SelectContent>
                        </Select>
                        <Textarea className="w-[500px]" required rows={13} name="message" placeholder="Provide a brief summary of the work you are looking to have done."/>
                        <button className="m-4 text-center text-neutral-900 border border-yellow-500 rounded-lg shadow-2xl shadow-slate-900 w-44 h-9 p-1 hover:bg-yellow-100 hover:text-slate-900" type="submit">Send</button>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default Contact;