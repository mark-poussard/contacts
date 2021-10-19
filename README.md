# Contacts

Front end for a list of contacts stored in either a `.cvs` or `.json` file.

Hosted at : https://mark-poussard.github.io/contacts/

## How to use

Update the `DATA_STORE_ENDPOINT_JSON` and `DATA_STORE_ENDPOINT_CSV` endpoints in `src/business/network/DataStore.ts` (for `json` and `csv` format respectively).

Update the `getContacts` method to use either `getContactsFromJsonSource` or `getContactsFromCsvSource` depending on the source format.
