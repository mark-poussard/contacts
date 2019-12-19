import Contact from "../../model/contacts/Contact";

const DATA_STORE_ENDPOINT = "https://gist.githubusercontent.com/mark-poussard/d9f54694ae06cf92c8528725d30f7c2c/raw/contacts.json";

class DataStore{
    
    getContacts = () => {
        return fetch(DATA_STORE_ENDPOINT)
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                throw new Error("Couldn't reach data store.");
            })
            .then((dto : any[]) => dto.map((x:any, idx : number) => Contact.fromDto(x, idx)));
    }

}
export default new DataStore();