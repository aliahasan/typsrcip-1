"use strict";
{
    const poorUser = {
        name: "Mr. X",
    };
    //   spread operator
    // rest operator
    //  destructuring
    //   spread operator
    const friends1 = ["John", "Max", "Mad"];
    const friends2 = ["Kane", "Messi", "Salah"];
    friends1.push(...friends2);
    const mentors = {
        typeScript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        prisma: "Firoze",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    const mentorsList = Object.assign(Object.assign({}, mentors), mentors2);
    console.log(mentorsList);
    // learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    greetFriends("rayhan", "John", "Max", "opy");
}
