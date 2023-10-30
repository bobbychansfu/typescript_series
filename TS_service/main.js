System.register(["./PersonController", "./Person"], function (exports_1, context_1) {
    "use strict";
    var PersonController_1, Person_1, pc;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (PersonController_1_1) {
                PersonController_1 = PersonController_1_1;
            },
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }
        ],
        execute: function () {
            pc = new PersonController_1.PeopleController();
            document.getElementById("create").addEventListener('click', function () {
                var per = new Person_1.Person("bob", 25);
                pc.add(per);
            });
            document.getElementById("getAll").addEventListener('click', function () {
                console.log(pc.showAll());
            });
        }
    };
});
