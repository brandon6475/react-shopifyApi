import React from 'react'

import { Flex } from "../layoutComponents"
import { Label, Input, TextArea, Submit } from "./formItems"
import ContactInfo from "../contactInfo"


export default function FormContact() {
    return (
        <div className="spacing">
                <Flex>
                    {/* flex item 1 */}
                    <div>
                        <form action="#" method="POST" className="spacing">
                            <div className="spacing-sm">
                                <Label htmlFor="name">* Name:</Label>
                                <Input type="name" name="name" id="name" placeholder="Enter your name" required/>
                            </div>
                            <div className="spacing-sm">
                                <Label htmlFor="email">* Email:</Label>
                                <Input type="email" name="email" id="email" placeholder="Enter your email" required/>
                            </div>
                            <div className="spacing-sm">
                                <Label htmlFor="phone">* Phone:</Label>
                                <Input type="tel" name="phone" id="phone" placeholder="Enter your phone number" required/>
                            </div>
                            <div className="spacing-sm">
                                <Label htmlFor="subject">Subject:</Label>
                                <Input type="text" name="subject" id="subject" placeholder="Subject" required/>
                            </div>
                            <div className="spacing-sm">
                                <Label htmlFor="msg">* Message:</Label>
                                <TextArea name="msg" id="msg" cols="30" rows="10" placeholder="How can we help?" required />
                            </div>
                            <Submit type="submit" id="submit" value="submit" />
                        </form>
                    </div>
                    {/* flex item 2 */}
                    <ContactInfo />
                </Flex>
        </div>
    )
}
