import DtoHelper, { FieldType } from '../deserialization/DtoHelper';
import { stringToHexColour } from '../util/Color';

export default class Contact{

    private id : number;
    private firstname : string;
    private lastname : string;
    private email : string;
    private phone : string;

    constructor(id : number, firstname : string, lastname : string, email : string, phone : string){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
    }

    getId = () => this.id;
    getFirstName = () => this.firstname;
    getLastName = () => this.lastname;
    getEmail = () => this.email;
    getPhone = () => this.phone;

    getFullName = () => {
        return this.getFirstName() + " " + this.getLastName();
    }

    getColor = () => {
        return stringToHexColour(this.getFirstName() + this.getLastName());
    }

    getInitials = () => {
        return this.getFirstName()[0].toLocaleUpperCase() + this.getLastName()[0].toLocaleUpperCase()
    }

    static fromDto = (dto : any, id : number) => {
        DtoHelper.assertFieldAndType(dto, "firstname", FieldType.STRING);
        const firstname = dto.firstname;

        DtoHelper.assertFieldAndType(dto, "lastname", FieldType.STRING);
        const lastname = dto.lastname;

        DtoHelper.assertFieldAndType(dto, "email", FieldType.STRING);
        const email = dto.email;

        DtoHelper.assertFieldAndType(dto, "phone", FieldType.STRING);
        const phone = dto.phone;

        return new Contact(id, firstname, lastname, email, phone);
    }
}