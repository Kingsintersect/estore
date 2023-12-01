interface IUser {
    firstName: string,
    lastName: String,
    email: string,
    password?: string,
    role: String,
    mobile: String,
    address: Array<Address>,
    payment_information: [],
    rating: [],
    review: [],
}

export interface Address {
    userId: String,
    streetAddress: String,
    city: String,
    state: String,
    zip_code: String,
    mobile: String,
}

export default IUser;