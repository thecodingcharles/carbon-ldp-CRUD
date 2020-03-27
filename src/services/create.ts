// ... import your Project interface
import * as Document from "carbonldp/Document";
import { carbonldp } from "../config/CarbonLDPConfiguration";
import {Project,Task} from "../model/Project";
// ... initialize your CarbonLDP object
let task1 : Task = {
    name: "hoasd",
    dueDate: new Date( "2016-04-02" )
}
let task2 : Task = {
    name: "Task 2",
    dueDate: new Date( "2016-04-08" )
}
let project:Project = {
    name: "Project X",
    tasks: [
        task1,
        task2
    ]
};

carbonldp.documents.$create( "/", project ).then(
    ( projectDocument:Project & Document.Document ) => {
        console.log( project === projectDocument ); // true
        console.log( project.$id ); // document's URI
    }
).catch( error => console.error( error ) );