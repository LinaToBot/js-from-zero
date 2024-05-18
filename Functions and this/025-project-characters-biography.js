// Constructor function, create a PowerpuffGirl objects
function PowerpuffGirl(name, color, superpower) {
  this.name = name;
  this.color = color;
  this.superpower = superpower;
  this.isLeader = false;
  this.displayInfo = function () {
    console.log(`Powerpuff Girl information:
    Name: ${this.name}
    Color: ${this.color}
    Superpower: ${this.superpower}
    ${this.isLeader ? "Leader: Yes" : "Leader: No"}
    `);
  };

  this.becomeLeader = function () {
    this.isLeader = true;
    console.log(`${this.name} has become the leader of the Powerpuff Girls`);
  };
}

const blossom = new PowerpuffGirl("Blossom", "Pink", "Ice Breath");
const buttercup = new PowerpuffGirl("Buttercup", "Green", "Super Strength");
const bubbles = new PowerpuffGirl("Bubbles", "Blue", "Flight");

blossom.displayInfo();
// Powerpuff Girl information:
//     Name: Blossom
//     Color: Pink
//     Superpower: Ice Breath

buttercup.displayInfo();
// Powerpuff Girl information:
//     Name: Buttercup
//     Color: Green
//     Superpower: Super Strength

bubbles.displayInfo();
// Powerpuff Girl information:
//     Name: Bubbles
//     Color: Blue
//     Superpower: Flight

blossom.becomeLeader(); // Blossom has become the leader of the Powerpuff Girls

blossom.displayInfo();
// Powerpuff Girl information:
//     Name: Blossom
//     Color: Pink
//     Superpower: Ice Breath
//     Leader: Yes

buttercup.displayInfo();
// Powerpuff Girl information:
//     Name: Buttercup
//     Color: Green
//     Superpower: Super Strength
//     Leader: No

bubbles.displayInfo();
// Powerpuff Girl information:
//     Name: Bubbles
//     Color: Blue
//     Superpower: Flight
//     Leader: No
