const favActorFirstName = 'Belle'; 
const favActorLastName = 'Mariano'; 
const fullName = favActorFirstName + ' ' + favActorLastName;
const uppercase = fullName.toUpperCase();
const favPetName = 'Lucky'; 
const lowercase = favPetName.charAt(0).toUpperCase() + favPetName.slice(1);

    let message = "My favorite actor is " + uppercase;

    message += ". His best show is Silicon Valley.";

    console.log("First Name:", favActorFirstName);
    console.log("Last Name:", favActorLastName);
    console.log("Full Name:", fullName);
    console.log("Uppercase:", uppercase);
    console.log("Lowercase Pet Name:", lowercase);
    console.log("Message:", message);