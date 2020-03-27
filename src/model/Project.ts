export class Project  {
    name : String;
    $id?: String; 
    tasks : Task[];
    constructor(name : String, tasks : Task[]) {
        this.name = name;
        this.tasks = tasks;
      }
  }
  export class Task{
      $id?: String; 
      name : String;
      dueDate : Date;
      constructor(name : String, dueDate : Date){
          this.name = name;
          this.dueDate = dueDate;
      }
  }