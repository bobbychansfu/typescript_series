import { PeopleController } from './PersonController'
import { Person } from './Person'

var pc = new PeopleController()

document.getElementById("create")!.addEventListener('click', function(){
    var per = new Person("bob",25)
    pc.add(per)
})

document.getElementById("getAll")!.addEventListener('click', function(){
    console.log(pc.showAll())
})