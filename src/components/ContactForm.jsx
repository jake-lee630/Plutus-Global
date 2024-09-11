import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const form = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("PLUTUS_GLOBAL", "PLUTUS_CONTACT", form.current, {
                publicKey: "WoS8054nYtGN2sxvv",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    e.target.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
        
            navigate('/thank-you');
    };

    return (
        <div className="min-h-screen p-6 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div className="bg-3E97FF text-[white] font-dmmono rounded p-4 px-4 md:p-8">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <div>
                            <p className="font-large text-xl">Contact Form</p>
                            <p>Please fill out all fields</p>
                        </div>

                        <div className="lg:col-span-2">
                            <form ref={form} /*onSubmit={handleSubmit}*/>{/* uncomment onSubmit attribute when ready/*/}
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
                                    <label
                                        for="Company"
                                        className="md:col-span-4"
                                    >
                                        Company Name
                                        <input
                                            required
                                            type="text"
                                            name="Company"
                                            id="Company"
                                            className="h-10 mt-1 rounded px-4 w-full bg-DCECFF text-[black]"
                                            placeholder="company name"
                                        />
                                    </label>
                                    <label for="Name" className="md:col-span-4">
                                        {" "}
                                        Name
                                        <input
                                            required
                                            type="text"
                                            name="Name"
                                            id="Name"
                                            className="h-10 mt-1 rounded px-4 w-full bg-DCECFF text-[black]"
                                            placeholder="first last"
                                        />
                                    </label>
                                    <label
                                        for="Email"
                                        className="md:col-span-4"
                                    >
                                        Email Address
                                        <input
                                            required
                                            type="email"
                                            name="Email"
                                            id="Email"
                                            className="h-10 mt-1 rounded px-4 w-full bg-DCECFF text-[black]"
                                            placeholder="email@domain.com"
                                        />
                                    </label>
                                    <label
                                        for="Phone"
                                        className="md:col-span-4"
                                    >
                                        Phone Number
                                        <input
                                            required
                                            type="tel"
                                            name="Phone"
                                            id="Phone"
                                            className="h-10 mt-1 rounded px-4 w-full bg-DCECFF text-[black]"
                                            placeholder="##########"
                                        />
                                    </label>
                                    <label
                                        for="Address"
                                        className="md:col-span-3"
                                    >
                                        City
                                        <input
                                            type="text"
                                            name="City"
                                            id="City"
                                            className="h-10 mt-1 rounded px-4 w-full bg-DCECFF text-[black]"
                                            placeholder="city"
                                        />
                                    </label>
                                    <label
                                        for="Zipcode"
                                        className="md:col-span-1"
                                    >
                                        Zipcode
                                        <input
                                            required
                                            type="text"
                                            name="Zipcode"
                                            id="Zipcode"
                                            className="h-10 mt-1 rounded px-4 w-full bg-DCECFF text-[black]"
                                            placeholder="zipcode"
                                        />
                                    </label>
                                    <label
                                        for="Message"
                                        className="md:col-span-4"
                                    >
                                        Reason for Contact
                                        <textarea
                                            required
                                            type="text"
                                            name="Message"
                                            id="Message"
                                            rows="15"
                                            className="mt-1 rounded px-4 w-full bg-DCECFF text-[black]"
                                            placeholder="messsage"
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="md:col-start-4 border-white py-2 px-4 rounded-md font-[DMMONO bold] hover:bg-DCECFF hover:text-[black] hover:border-[black]"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
