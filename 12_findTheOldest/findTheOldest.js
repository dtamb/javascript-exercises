const findTheOldest = function(people) {
    const peopleAge = people.map(person=>{
        let age;
        !person.yearOfDeath 
            ? age = new Date().getFullYear() - person.yearOfBirth
            : age = person.yearOfDeath - person.yearOfBirth;
        return ({...person,["age"]:age})
    });
    peopleAge.sort((a,b)=>b.age-a.age);
    return peopleAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
