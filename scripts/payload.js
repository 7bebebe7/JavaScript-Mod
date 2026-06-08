const { massr, massS } = require("particles");

const myDriver = extend(PayloadMassDriver, "pmd", {});

const shoot = Vars.tree.loadSound("pmd-s");

// характеристики
myDriver.health = 2500;
myDriver.size = 3;
myDriver.range = 600;
myDriver.reload = 120;
myDriver.chargeTime = 80;
myDriver.maxPayloadSize = 4;
myDriver.shake = 10;
myDriver.knockback = 10;
myDriver.chargeTime = 50

// потребності(енка або жижа, предмет)
myDriver.consumePower(5);

// побудова
myDriver.requirements = ItemStack.with(
    Items.copper, 300,
    Items.lead, 250,
    Items.silicon, 200,
    Items.titanium, 150
);

//звук вистріла
myDriver.shootSound = shoot;
myDriver.shootEffect = massS
myDriver.smokeEffect = massr;
myDriver.receiveEffect = massr;

// категория
myDriver.category = Category.units;

// видимость
myDriver.buildVisibility = BuildVisibility.shown;