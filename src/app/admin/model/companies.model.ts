export class Companies {
public name: string
public tin: string
public registrationNumber: string
public contactInfo : ContactInfo
public contactPerson : ContactPerson
}

export class ContactInfo {
    public street1: string
    public street2: string
    public city: string
    public state: string
    public country: string
    public email: string
    public phone: string
    public website: string
}

export class ContactPerson {
    public fullName: string
    public jobTitle: string
    public email: string
    public phone: string
    public extension: string
}