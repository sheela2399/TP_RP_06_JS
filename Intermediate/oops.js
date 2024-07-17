// oops => object

// template & blueprint of object
class Student {

    // automatically call on creating object
    constructor(fisrt_name, last_name, mobile, batch_code, tech) {

        // current object
        this.name = fisrt_name + last_name;
        this.mobile = mobile;
        // this.firstTech = tech[0];
        this.tech = tech;
    }
    updateMobile(mobile) {
        this.mobile = mobile
    }

    addTech(tech) {
        this.tech.push(tech)
    }
}

// object creating
const sheela = new Student("sheela", "mishra", "9863637", "TP_RP_06", ["HTML", "CSS", "JS"])
const shadab = new Student("shadab", "ansari", "98636567", "TP_RP_06", ["HTML", "CSS", "JS"]);


shadab.updateMobile(1234455)
shadab.addTech("react")

console.log(shadab)