// ... import your Project interface
import { Document } from "carbonldp/Document";
import { carbonldp } from "../config/CarbonLDPConfiguration";
import {Project,Task} from "../model/Project";


// ... initialize your CarbonLDP object

// ID of the Carbon LDP document you want to delete
let projectID:string =  "http://localhost:8083/47293a45-ebde-432c-988b-2938db44e186/";

carbonldp.documents.$delete( projectID )
    .then( () => {
        // continue doing stuff...
        console.log("deleted");
    } )
    .catch( ( error ) => console.error( error ) );