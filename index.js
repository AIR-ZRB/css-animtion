let $ = (name) => document.querySelector(name);
let $$ = (name) => document.querySelectorAll(name);

class List {
    constructor() {
        this.sectionPosition = [];
        this.init();
    }

    init() {
        this.createList();
        this.getSectionPosition();
        this.screenScroll();
    }

    createList() {
        for (let i = 0; i < $$("section").length; i++) {
            const newLi = document.createElement("li");
            $(".nav-list ul").append(newLi);
        }
        $(".nav-list ul li").classList.add("active");
    }

    getSectionPosition() {
        for (let i = 0; i < $$("section").length; i++) {
            this.sectionPosition.push($$("section")[i].offsetTop);
        }
    }

    changListActive(y){
         
        this.sectionPosition.forEach((item,index)=> {
            y > item ? console.log(index) : null;
        })
    }


    screenScroll() {
    
        window.onscroll = (event) => {
            console.log(event.path[1].scrollY);
            this.changListActive(event.path[1].scrollY)
        };
    }
}


new List();