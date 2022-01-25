import {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import React from 'react';
import {db} from "./firebase_configuration";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {snackbarClasses} from "@mui/material";


function CreateProjet() {
    const [projets, setProjets] = useState([]);

    useEffect(() => {
            onSnapshot(collection(db, "projet"), snapshot =>
                setProjets(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}
                )))
            )

        }, []
    );

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Client</TableCell>
                        <TableCell align="left">Projet</TableCell>
                        <TableCell align="left">Demandeur</TableCell>
                        <TableCell align="left">Type de profil</TableCell>
                        <TableCell align="left">Techno</TableCell>
                        <TableCell align="left">ETP</TableCell>
                        <TableCell align="left">Type projet</TableCell>
                        <TableCell align="left">Localisation</TableCell>
                        <TableCell align="left">Séniorité</TableCell>
                        <TableCell align="left">Nombre de jours</TableCell>
                        <TableCell align="left">Statut</TableCell>
                        <TableCell align="left">Date de début</TableCell>
                        <TableCell align="left">Commentaire</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projets.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.clientid}
                            </TableCell>
                            <TableCell align="left">{row.projetName}</TableCell>
                            <TableCell align="left">{row.demandeur}</TableCell>
                            <TableCell align="left">{row.type_de_profil}</TableCell>
                            <TableCell align="left">{row.techno}</TableCell>
                            <TableCell align="left">{row.etp}</TableCell>
                            <TableCell align="left">{row.type}</TableCell>
                            <TableCell align="left">{row.localisation}</TableCell>
                            <TableCell align="left">{row.seniorite}</TableCell>
                            <TableCell align="left">{row.nombre_de_jours}</TableCell>
                            <TableCell align="left">{row.status}</TableCell>
                            <TableCell align="left">{row.date_de_debut}</TableCell>
                            <TableCell align="left">{row.commentaire}</TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );


}

export default CreateProjet;