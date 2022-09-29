const br="<br>";
const lz="&nbsp";


let household = {
    name: "Julie's flat",
    machines: ['Bosch fridge','Miele Waschmaschine', 'Kärcher Reiniger'],
    animals: ['Schäferhund Beowulf'],
    img: src = "../img/P2280336_B.jpg",
    printHoHo: function() {
        return `<div class="card" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="hh">
            <div class="card-body">
                <h5 class="card-title">${this.name}${lz}</h5>
                <p class="card-text">${this.animals}${lz} lives here too ${br}</p>
            </div>
        </div>`;
    }
}
let personalData = {
    surname: "Bats",
    firstname: "Dingo",
    birthcity: "Buenos Aires",
    birthdate: "11.11.2011",
    citizenships: ["Argentinia","Austria"],
    getCitizenships: function() {
        return this.citizenships;
    }
}

let labour = {
    workingstatus: "freelancer",
    companyname: "",
    companyadr: "1050 Wien",
    number_employees: 1,
    getCompanyInfo: function() {
        return (`currently${this.workingstatus} at ${this.companyname}, located in ${this.companyadr}`)
    }
}

// let animal = {}
console.log(household.printHoHo);
document.getElementById("hoho").innerHTML += household.printHoHo();
