// Variables
var hero = {

  name: "Addison",
  heroic: true,
  inventory: ["Map", "Potion", "Bread"],
  health: 10,
  weapon: {
    type: "Mega Sword",
    damage: 2
  }
};

// Game logic
var rest = function(creature) {
  // creature.health += 10;
  creature.health = 10;
  return creature;
};

var pickUpItem = function(creature, item) {
  // creature.inventory.push("Potatoe");
  creature.inventory.push(item);
  return creature;
};

var dealDamage = function(attacker, defender) {
  defender.health = defender.health - attacker.weapon.damage;
  return defender;
};

var equipWeapon = function(creature, index) {
  creature.weapon = creature.inventory[index];
  creature.inventory.splice(index, 1);
  return creature;
};

var doBattle = function(heroicCreature, creature) {
  if (heroicCreature.heroic === true) {

    while (heroicCreature.health > 0 && creature.health > 0) {
      dealDamage(heroicCreature, creature);
      if (creature.health <= 0) {
        return heroicCreature;
      } else {
        dealDamage(creature, heroicCreature);
        if (heroicCreature.health <= 0) {
          return 'Your Hero Died';
        }
      }
    }
  } else {
    return null;
  }
};

// UI


var displayStats = function() {
  var isAHero = `${hero.heroic}`;
  isAHero = " Definitely!";
  const statistics =
  `<div class="hero">
      <h2>Name: ${hero.name}</h2>
      <h2>Heroic?: ${isAHero}</h2>
      <h2>Health: ${hero.health}</h2>
      <h2>Weapon: ${hero.weapon.type}</h2>
      <h2>Weapon Damage: ${hero.weapon.damage}</h2>
   </div>`
   ;
  document.getElementById("stats").innerHTML = statistics;
};

var displayInventory = function() {
  const inventoryElement = document.getElementById('inventory')
  inventoryElement.innerHTML = '';

  hero.inventory.forEach(function(item) {
    // if (item === String()){
      document.getElementById("inventory").append(item + "," + "\n" );
    // } else {
      // document.getElementById("inventory").append(item.name + "," + "\n" );
    // }
  });
};

var updateStats = function() {
  displayStats();
  displayInventory();
};

var changeName = function() {
  hero['name'] = document.getElementById('nameInput').value;
};
