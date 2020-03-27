// ... import your Project interface
import { Document } from "carbonldp/Document";
import { carbonldp } from "../config/CarbonLDPConfiguration";
import {Project,Task} from "../model/Project";


// ... initialize your CarbonLDP object

// ID of the Carbon LDP document you want to retrieve
let projectID:string = "http://localhost:8083/47293a45-ebde-432c-988b-2938db44e186/";

carbonldp.documents.$get<Project>( projectID )
    .then( ( project:Project & Document ) => {
            console.log( project.$id ); // "https://example.com/your-document-id/"
            console.log( project.name ); // "Project X"
    })
    .catch( ( error ) => console.error( error ) );