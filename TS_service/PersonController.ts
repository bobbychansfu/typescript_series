import * as Model from './Person'
import Person = Model.Person

interface PersonServices {
    add(p:Person): void
    showAll(): Person[]
    delete(id:number): void
    // edit
    // search
}

export class PeopleController implements PersonServices {
    people: Person[]

    constructor(){
        this.people = []
    }

    add(p:Person) {
        this.people.push(p)
        localStorage.UserArray = JSON.stringify(this.people)
        console.log("added " + p.id)
    }
    showAll(): Person[] {
        // return this.people
        return JSON.parse(localStorage.UserArray)
    }
    delete(id:number) {
        this.people = this.people.filter((p)=>{
            return p.id != id
        })
        localStorage.UserArray = JSON.stringify(this.people)
    }
}