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
console.log(officeDot); // Output: "5B"

// Accessing nested values using bracket notation
const officeBracket = company["location"]["address"]["building"]["floor"]["office"];
console.log(officeBracket); // Output: "5B"

// Accessing nested values using dot notation with optional chaining
// officeName does not exist, so result will be undefined instead of throwing an error
const officeDotChain = company?.location?.address?.building?.floor?.officeName;
console.log(officeDotChain); // Output: undefined

// Accessing nested values using bracket notation with optional chaining
// Same as above, officeName does not exist
const officeBracketChain = company?.["location"]?.["address"]?.["building"]?.["floor"]?.["officeName"];
console.log(officeBracketChain); // Output: undefined

// Access manager's name and personal phone using dot notation and optional chaining
// personName exists ("Alice"), personalNumber does not exist (so undefined)
const personName = company.employees.manager?.name;
const phonePersonal = company?.employees?.manager?.contact?.phone?.personalNumber;
console.log(`Person Name : ${personName} and Contact Number : ${phonePersonal}`);
// Output: Person Name : Alice and Contact Number : undefined

// Access the same values using bracket notation with optional chaining
const personNameBr = company['employees']['manager']['name']; // Direct access (no optional chaining)
const phonePersonalBr = company?.['employees']?.['manager']?.['contact']?.['phone']?.['personal'];
console.log(`Person Name : ${personNameBr} and Contact Number : ${phonePersonalBr}`);
// Output: Person Name : Alice and Contact Number : 987-654-3210

// Using nullish coalescing operator (??)
// If the property is null or undefined, the right-hand value is returned
console.log(company?.employees?.manager?.nameL ?? "Null"); 
// nameL does not exist, so Output: "Null"

console.log(company?.employees?.manager?.contact?.phone?.personalNumber ?? "Not Found");
// personalNumber does not exist, so Output: "Not Found"

// Using logical OR operator (||)
// If the property is falsy (null, undefined, false, 0, "", NaN), the right-hand value is returned
console.log(company?.employees?.manager?.nameL || "Null"); 
// nameL does not exist, so Output: "Null"

console.log(company?.employees?.manager?.contact?.phone?.personalNumber || "Not Found");
// personalNumber does not exist, so Output: "Not Found"
