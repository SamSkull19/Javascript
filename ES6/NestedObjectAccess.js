const company = {
    name: "TechCorp",
    location: {
        country: "USA",
        city: "San Francisco",
        address: {
            street: "Market Street",
            building: {
                number: 101,
                floor: {
                    level: 5,
                    office: "5B"
                }
            }
        }
    },
    employees: {
        manager: {
            name: "Alice",
            contact: {
                email: "alice@techcorp.com",
                phone: {
                    work: "123-456-7890",
                    personal: "987-654-3210"
                }
            }
        }
    }
};

// Accessing nested values using dot notation
const officeDot = company.location.address.building.floor.office;
console.log(officeDot); // "5B"

// Accessing nested values using bracket notation
const officeBracket = company["location"]["address"]["building"]["floor"]["office"];
console.log(officeBracket); // "5B"

// Access manager information
const personName = company.employees.manager.name;
const phonePersonal = company.employees.manager.contact.phone.personal;
console.log(`Person Name : ${personName} and Contact Number : ${phonePersonal}`);

// Same as above using bracket notation
const personNameBr = company['employees']['manager']['name'];
const phonePersonalBr = company['employees']['manager']['contact']['phone']['personal'];
console.log(`Person Name : ${personNameBr} and Contact Number : ${phonePersonalBr}`);

// Access city where company is located
const city = company.location.city;
console.log("City:", city); // "San Francisco"

// Access street name
const street = company.location.address.street;
console.log("Street:", street); // "Market Street"

// Access building number
const buildingNumber = company.location.address.building.number;
console.log("Building Number:", buildingNumber); // 101

// Access floor level
const floorLevel = company.location.address.building.floor.level;
console.log("Floor Level:", floorLevel); // 5

// Access manager's work phone
const phoneWork = company.employees.manager.contact.phone.work;
console.log("Work Phone:", phoneWork); // "123-456-7890"

// Access manager's email
const email = company.employees.manager.contact.email;
console.log("Email:", email); // "alice@techcorp.com"

// Access company name
const companyName = company.name;
console.log("Company Name:", companyName); // "TechCorp"

// Bracket notation example for city
const cityBr = company["location"]["city"];
console.log("City (Bracket):", cityBr); // "San Francisco"

// Bracket notation example for email
const emailBr = company["employees"]["manager"]["contact"]["email"];
console.log("Email (Bracket):", emailBr); // "alice@techcorp.com"
