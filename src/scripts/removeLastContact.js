
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
try {
    const contacts = await readContacts();

    if(contacts.length===0){
        console.log('Contacts list is empty!');
        return;
    }
    contacts.pop();
    await writeContacts(contacts);
} catch(error){ console.error('Remove last Contact: ', error);}
};

removeLastContact();
