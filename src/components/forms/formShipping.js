import React from 'react'
import styled from "styled-components"

import { Label, Input, Submit } from "./formItems"
import { Flex, Actions } from "../layoutComponents"
import { ButtonPrimary } from '../buttons'

// to be consistent with FormShipping inputs
const Select = styled.select`
    display: block;
    width: 100%;
    border: 1px solid var(--txt-dark-secondary);
    outline: none;
    padding: 1.2em;
    font-size: var(--fs-sm);
    font-family: var(--ff);

  &:focus {
		outline: 1px solid var(--txt-dark-secondary);
	}
`

export default function FormShipping() {
    return (
        <div className="spacing">
            <Flex>
                {/* flex item 1 */}
                <div>
                    <form action="#" method="POST" className="spacing">
                        <div className="spacing-sm">
                            <Label htmlFor="firstName">* First Name:</Label>
                            <Input type="text" name="firstName" id="firstName" placeholder="First name" required/>
                        </div>
                        <div className="spacing-sm">
                            <Label htmlFor="lastName">* Last Name:</Label>
                            <Input type="text" name="lastName" id="lastName" placeholder="Last name" required/>
                        </div>
                        <div className="spacing-sm">
                            <Label htmlFor="email">* Email:</Label>
                            <Input type="email" name="email" id="email" placeholder="Email address" required/>
                        </div>
                        <div className="spacing-sm">
                            <Label htmlFor="phone">* Phone:</Label>
                            <Input type="tel" name="phone" id="phone" placeholder="Phone number" required/>
                        </div>
                        <div className="spacing-sm">
                            <Label htmlFor="address1">* Address Line 1:</Label>
                            <Input type="text" name="address1" id="address1" placeholder="Address Line 1" required/>
                        </div>
                        <div className="spacing-sm">
                            <Label htmlFor="address2">(Optional) Address Line 2:</Label>
                            <Input type="text" name="address2" id="address2" placeholder="Address Line 2" />
                        </div>
                        <div className="spacing-sm">
                            <Label htmlFor="zip">* ZIP Code:</Label>
                            <Input type="text" name="zip" id="zip" placeholder="Zip"  required/>
                        </div>
                        <div className="spacing-sm">
                            <Label htmlFor="city">* City:</Label>
                            <Input type="text" name="city" id="city" placeholder="City" required/>
                        </div>
                        <div className="spacing-sm">
                            <Label htmlFor="state">* State</Label> 
                            <Select type="text" name="state" id="state" required>
                                <option selected="selected" >---</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </Select>
                        </div>
                        {/* using button for template navigation */}

                        <Actions><ButtonPrimary to="/payment">payment method &#8594;</ButtonPrimary></Actions>
                        {/* <Submit type="submit" id="submit" value="payment method &#8594;" /> */}
                    </form>
                </div>
            </Flex>
        </div>
    )
}
