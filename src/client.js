import {useEffect, useState} from "react";
import {db} from "./firebase_configuration";
import {collection,addDoc,doc,updateDoc,deleteDoc,onSnapshot,docs} from "firebase/firestore";
import React from 'react';


function Client() {

    const [newName,setNewName] = useState("");
    const [clients, setClients] = useState([]);
    const clientCollectionRef = collection(db, "clients");

    const createClient = async () => {
        await addDoc(clientCollectionRef, { name: newName});
    };
    const updateClient = async (id) =>{
        const clientDoc = doc(db,"clients",id);
        await updateDoc(clientDoc,{ name: newName});
    }

    const deleteClient = async (id) => {
        const clientDoc = doc(db,"clients",id);
        await deleteDoc(clientDoc);
    }

    useEffect(() => {
        onSnapshot(collection(db,"clients"),snapshot =>
            setClients(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
        )
    },[]);

    return (

        <div className="App">
            <input placeholder="name" onChange={(e) => {setNewName(e.target.value)}} />
            <button onClick={createClient}>Create Client</button>
            {clients.map((client) => {
                return(
                    <div key={client.id}>
                        {" "}
                        <h2>{client.name}</h2>
                        <input placeholder="name" onChange={(e) => {setNewName(e.target.value)}} />
                        {newName != null ? <button onClick={() => { updateClient(client.id); }}>
                            {" "}
                            Update Client
                        </button> : <div></div>}
                        <button
                            onClick={() => {
                                deleteClient(client.id);
                            }}
                        >
                            {" "}
                            Delete Client
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Client;