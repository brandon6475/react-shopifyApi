import React from 'react'

import { Company } from "./company"

export default function ContactInfo() {
    return (
        <div className="spacing">
            <div>
                <p className="body--large">{Company.name}</p>
                <p>{Company.street1}</p>
                <p>{Company.city1}</p>
                <p>USA</p>
            </div>
            <div>
                <p className="body--large">Call Us</p>
                <a href="tel: 877-358-2583">{Company.tel1}</a>
            </div>
            <div>
                <p className="body--large">Sales Representatives</p>
                <a href="mailto: cgrimm@tractor1.com">{Company.mail1}</a>
                <a href="mailto: tlasage@tractor1.com">{Company.mail2}</a>
                <a href="mailto: cpalframan@tractor1.com">{Company.mail3}</a>
            </div>
            <div>
                <p className="body--large">Business Hours</p>
                <p>{Company.hours}</p>
            </div>
        </div>
    )
}
