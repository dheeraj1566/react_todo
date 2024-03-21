import React from "react";
import "./List.css"
import { userData } from "./constant";


function ListChange() {
    const [Person, setPerson]=usestate(userData);
   
 console.log(Person)
    return(
        <main>
            <div>
                <div className="ListData">
                    <p>id:{Person.id}</p>
                    <p>name: {Person.name}</p>                    
                    <p>age: {Person.age}</p>                    
                    <p>email: {Person.email}</p>                    
                    <p>salary: {Person.salary}</p>                    
                    <p>order: {Person.order}</p>     
                    <p>totalspent: {Person.totalspent}</p>                    
                    <p>gender: {Person.gender}</p>                    
                    <p>lasrseen: {Person.salary}</p>                    

                </div>
            </div>
        </main>
    )
}


export default ListChange