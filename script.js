class Qeni{
    constructor(emer,mosha){
        this.emri = emer;
        this.mosha= mosha;
    }
}

let qeni_pare = new Qeni ("test","40 vjet");
console.log(qeni_pare)

class Personi{
    constructor(emer,mosha,gjini,ditlindje){
        this.emri = emer;
        this.age = mosha; 
        this.gender = gjini
        this.birthDate = ditlindje;
    }
}

let arditi = new Personi("ardit",15,"mashkull","02/04/2006")
console.log(arditi.age)


class Kerri{
    constructor(modeli,shpejtesin){
        this.model = modeli
        this.shpejtsia = shpejtesin;
    }
    rritja() {
        this.shpejtesia = this.shpejtesia + 10
    }
}

let bmw = new Kerri("bmw",150)
console.log(bmw.shpejtsia)
bmw.rritja()
bmw.rritja()
console.log(bmw.shpejtsia)