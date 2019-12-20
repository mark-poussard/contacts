import Contact from "../../model/contacts/Contact";
import CsvDeserializer from "../deserialization/CsvDeserializer";

const DATA_STORE_ENDPOINT_JSON = "https://gist.githubusercontent.com/mark-poussard/d9f54694ae06cf92c8528725d30f7c2c/raw/contacts.json";
const DATA_STORE_ENDPOINT_CSV = "https://gist.githubusercontent.com/mark-poussard/5255c223752c695ba0846971cbd8d039/raw/contacts.csv";

class DataStore{
    
    private getContactsFromJsonSource = () => {
        return fetch(DATA_STORE_ENDPOINT_JSON)
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                throw new Error("Couldn't reach data store.");
            });
    }

    private getContactsFromCsvSource = () => {
        return fetch(DATA_STORE_ENDPOINT_CSV)
            .then(response => {
                if(response.ok){
                    return response.text();
                }
                throw new Error("Couldn't reach data store.");
            })
            .then(CsvDeserializer.deserialize);
    }

    getContacts = () => {
        return this.getContactsFromCsvSource()
            .then((dto : any[]) => dto.map((x:any, idx : number) => Contact.fromDto(x, idx)));
    }

}
export default new DataStore();