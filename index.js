let $ = (name) => document.querySelector(name);
let $$ = (name) => document.querySelectorAll(name);

class List {
    constructor() {
        this.sectionPosition = [];
        this.sectionTitle = ["Loading","风车","手风琴菜单","B站长按三连","轮播图"]
        this.init();
    }

    init() {
        this.getSectionPosition();
        this.createList();
        this.screenScroll();
    }

    createList() {
        for (let i = 0; i < $$("section").length; i++) {
            const newLi = document.createElement("li");
            newLi.title = this.sectionTitle[i];
            newLi.position = this.sectionPosition[i];
            newLi.classList.add("navigation-list");
            $(".nav-list ul").append(newLi);
        }
        $(".nav-list ul li").classList.add("active");
    }

    getSectionPosition() {
        for (let i = 0; i < $$("section").length; i++) {
            this.sectionPosition.push($$("section")[i].offsetTop);
        }
        console.log(this.sectionPosition);
    }

    changListActive(y){
        this.sectionPosition.forEach((item,index)=> {
            if(y >= item) {
                this.sectionPosition.forEach((item,index)=> {
                    $$(".navigation-list")[index].classList.remove("active")
                })
                $$(".navigation-list")[index].classList.add("active")
            }
        })
    }


    screenScroll() {
        // 这里需要加入一个节流防抖
        window.onscroll = (event) => {
            console.log(event.path[1].scrollY);
            this.changListActive(event.path[1].scrollY)
        };

        $(".nav-list ul").onclick = (event) => {
            window.scrollTo(0,event.target.position);
        }

    }
}


new List();