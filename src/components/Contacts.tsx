import React, { useEffect, useState } from 'react';
import AddContacts from './AddContacts';
import Contact from "./Contact"



export interface ContactType{
id:number,
name:string,
email:string,
phone:number
}



const Contacts = () =>{
const [contacts, setContacts] = useState<ContactType[]>( [ 
    { id: 1, name: "blagica", email: "blagica@brainster.co", phone: 5641231234},
    { id: 2, name: "kristijan", email: "kristijan@brainster.co", phone: 5654744},
    {id: 3, name: "ognen", email: "ognen@brainster.co" , phone: 123456789}
    ]
);

useEffect (() =>{
const StorageItem = localStorage.getItem('contact');
 
if (StorageItem) {
setContacts (
    JSON.parse(StorageItem)
)

}
},[])






const nekojaFunkcija = (contact:ContactType) =>{
    console.log("klik",contact);
    setContacts([...contacts,contact]);

localStorage.setItem('contact', JSON.stringify([...contacts,contact]));



};

const handleDelete = (id:number) => {
    console.log(id);
    const filteredContacts=contacts.filter(contact => contact.id !== id);
    setContacts (filteredContacts);
    localStorage.setItem('contact', JSON.stringify(filteredContacts));
};

return <div>
    <AddContacts NekojaFunkcija={nekojaFunkcija}
  
    />
    {contacts.map (contact =>{
    return(
      
      <Contact
      handleDelete = {() => handleDelete(contact.id)}
      key={contact.id}
            {...contact} />
    )

}
)}</div>






}





export default Contacts