class Person {
    personaldata;   //myObj
    education;
    household;   //myObj
    labour;      //myObj
    hobbies;
    printPersInfo() {
        return `<div class="card px-4" style="width: 18rem;">
            <img src="${this.household.img}" class="card-img-top" alt="hh">
            <div class="card-body">
                <h5 class="card-title">${this.household.name}${lz}</h5>
                <p class="card-text">${this.personaldata.firstname}${lz}${this.personaldata.surname} lives here.</p>
                <p class="card-text">Citizenship:${lz}${this.personaldata.getCitizenships()}${lz}.</p>
                <p class="card-text">${this.household.animals}${lz} live here too. ${br}</p>
                <p class="card-text">In their household they use ${this.household.machines}.${lz}</p>
                <p class="card-text"> ${this.labour.getCompanyInfo()}${lz}${br}</p>
            </div>
        </div>`;
    }
    constructor(personaldata, education, hoho, labour, hobbies) {
        this.personaldata = personaldata;
        this.education = education;
        this.household = hoho;
        this.labour = labour;
        this.hobbies = hobbies;

        arr_person.push(this);
    }
}

class Labour {
    workingstatus;
    companyname;
    companyadr;
    number_employees;
    getCompanyInfo() {
        return (`Currently ${this.workingstatus} at ${this.companyname}, located in ${this.companyadr} with ${this.number_employees} colleagues`)
    };

    constructor(workingstatus,cname,cadr, number_employees) {
        this.workingstatus= workingstatus;
        this.companyname=cname;
        this.companyadr= cadr;
        this.number_employees=number_employees;
    }
}

class WhatGoogleWantsToKnow extends Labour {
    income;

    constructor(workingstatus,companyname,companyadr,number_employees, einkommen) {
        super(workingstatus,companyname,companyadr,number_employees);
        this.income = einkommen;
        this.getCompanyInfo() = super.getCompanyInfo();     // maybe not necessary
        }
    }

class Household {
    name;
    machines;
    animals;
    img;
    printHoHo() {
        return `<div class="card" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="hh">
            <div class="card-body">
                <h5 class="card-title">${this.name}${lz}</h5>
                <p class="card-text">${this.animals}${lz}live here too ${br}</p>
            </div>
        </div>`;
    }
    constructor (name,machines,animals,img) {
        this.name=name;
        this.machines=machines;
        this.animals=animals;
        this.img=img;
    }
}

class PersonalData {
    surname;
    firstname;
    birthcity;
    birthdate;
    citizenships;
    getCitizenships() {
        let ctsh_str=""    // Rückgabe soll string statt arrayelemente sein
        for (let i=0; i < this.citizenships.length; i++) {
            if (i+1==this.citizenships.length) {
            ctsh_str+=this.citizenships[i]}
            else {ctsh_str+=this.citizenships[i]+" and "}
        }
        return ctsh_str;
    }
    constructor (name,firstname,bcity, bdate,citizenships) {
        this.surname=name;
        this.firstname=firstname;
        this.birthdate=bdate;
        this.birthcity=bcity;
        this.citizenships=citizenships;
    }
}

const br="<br>";
const lz="&nbsp";
const arr_person =[];
//  performing scriptcode from here:
//  Erzeugung von 2 Objekten Person: 
    let personaldata1= new PersonalData('Loveson', 'Julie','Oslo','16-11-1964',['Norway','Austria']) 
    let household1 = new Household ("Julie's flat", ['Bosch fridge',' Miele washingmachine', ' Kärcher cleaner'],
    ['Schäferhund Beowulf',' intrusive moths'], "../img/P2280336_B.jpg")
    let labour1= new Labour('freelance','home office','Vienna',0)
    let comp_info= labour1.getCompanyInfo();
    let person1= new Person(personaldata1,'Master',household1,labour1, 'Singing,Pianoperformance,Musicproduction')
    let whatGoogleWantsToKnow1 = (labour1,100000);
    console.log(personaldata1);
    console.log(household1);
    console.log(labour1);
    console.log(person1);
    console.log(whatGoogleWantsToKnow1,comp_info);

    let personaldata2= new PersonalData('Bats', 'Dingo','Buenos','11-11-2011',['Argentina','Austria']) 
    let household2 = new Household ("Dingo's flat", ['Lenovo laptop',' IPhone10', ' Nespresso'],
    ['hamster',' toy fishes'], "../img/Diegos_flat.jpg")
    let labour2= new Labour('parttime employed','KWP','Vienna',52)
    let comp_info2= labour2.getCompanyInfo();
    let person2= new Person(personaldata2,'BSC',household2,labour2,'cooking,eating,movies,concerts')
    let whatGoogleWantsToKnow2 = (labour2,30000);
    for (let card of arr_person) {
        document.getElementById("person").innerHTML += card.printPersInfo();
    }
    // let personalData = {
    //     surname: "Bats",
    //     firstname: "Dingo",
    //     birthcity: "Buenos Aires",
    //     birthdate: "11.11.2011",
    //     citizenships: ["Argentinia","Austria"],
    //     getCitizenships: function() {
    //         return this.citizenships;
    //     }
    // }