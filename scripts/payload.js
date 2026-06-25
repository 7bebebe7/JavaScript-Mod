//import-----

const { massr, massS } = require("particles");

//sounds-----
const shoot = Vars.tree.loadSound("pmd-s");

//code-----
const myDriver = extend(PayloadMassDriver, "pmd", {
    health: 2500,
    size: 3,
    range: 600,
    reload: 120,
    maxPayloadSize: 4,
    shake: 10,
    knockback: 10,
    chargeTime: 50,
    category: Category.units,
    shootSound: shoot,
    shootEffect: massS,
    smokeEffect: massr,
    receiveEffect: massr,
    requirements: ItemStack.with(
        Items.copper, 300,
    Items.lead, 250,
    Items.silicon, 200,
    Items.titanium, 150
    )
});
myDriver.consumePower(5);