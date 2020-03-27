// ... import your Project interface
import { Document } from "carbonldp/Document";
import { carbonldp } from "../config/CarbonLDPConfiguration";
import {Project,Task} from "../model/Project";


let project:Project & Document;

// ID of the Carbon LDP document you want to retrieve
let projectID:string = "http://localhost:8083/47293a45-ebde-432c-988b-2938db44e186/";

// 1) Retrieve the document
carbonldp.documents.$get<Project>( projectID )
    .then( ( retrievedProject:Project & Document ) => {

        // 2) Modify the document
        retrievedProject.name = "Project's New Name";
        retrievedProject.tasks.push( {
            name: "Task 3",
            dueDate: new Date( "2040-05-02" )
        } );

        project = retrievedProject;

        // 3) Save the changes
        return retrievedProject.$save();
    } )
    .then( ( savedProject:Document ) => {

        console.log( savedProject === project ); // true
        return savedProject.$refresh();
    })
    .then( ( refreshedProject:Document ) => {

        console.log( refreshedProject === project ); // true
        // Continue doing stuff...
    })
    .catch( ( error ) => console.error( error ));