import React from 'react'

import { Label, Input, TextArea, Submit } from "./formItems"
import { Flex } from "../layoutComponents"
import ContactInfo from "../contactInfo"

export default function FormQuote() {
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
                            <Label htmlFor="location">* ZIP Code:</Label>
                            <Input type="text" name="zip" id="zip" placeholder="Your ZIP" required/>
                        </div>
                        <div className="spacing-sm">
                            <Label htmlFor="msg">* Please list titles, part numbers, brands for item to quote:</Label>
                            <TextArea name="msg" id="msg" cols="30" rows="10" placeholder="Enter part info" required />
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
