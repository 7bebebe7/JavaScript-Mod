const { b, sb, emp, mega } = require("bullets");
const { GB } = require("particles");

const t = extend(ItemTurret, "tur", {});

t.size = 1;
t.health = 250;
t.reload = 30;
t.range = 140;

t.ammo(
    Items.copper, b
);

t.category = Category.turret;
t.buildVisibility = BuildVisibility.shown;
t.requirements = ItemStack.with(
    Items.copper, 35
);



const sen = extend(ItemTurret, "sentry", {});
sen.size = 1;
sen.health = 1488;
sen.range = 350;
sen.reload = 120;
sen.category = Category.turret;
sen.ammo(
    Items.titanium, sb
);

sen.requirements = ItemStack.with(
    Items.titanium, 1488
);

sen.buildVisibility = BuildVisibility.shown;



const dtek = extend(ItemTurret, "dtek", {});

dtek.size = 3;
dtek.health = 2500;
dtek.reload = 180;
dtek.range = 280;
dtek.shootEffect = GB;
dtek.consumePower(100 / dtek.reload);

dtek.ammo(
    Items.phaseFabric, emp
);

dtek.category = Category.turret;
dtek.buildVisibility = BuildVisibility.shown;
dtek.requirements = ItemStack.with(
    Items.phaseFabric, 3000
);

const xy = extend(ItemTurret, "xyeta", {});

xy.size = 1;
xy.health = 123456;
xy.reload = 999999;
xy.range = 0;
xy.trackingRange = 100;

xy.ammo(
    Items.thorium, mega
);

xy.category = Category.turret;
xy.buildVisibility = BuildVisibility.shown;
xy.requirements = ItemStack.with(
    Items.copper, 1000,
    Items.lead, 2000,
    Items.metaglass, 3000,
    Items.graphite, 4000,
);



const xyi = extend(ItemTurret, "xyetaII", {});

xyi.size = 1;
xyi.health = 123456;
xyi.reload = 9999;
xyi.range = 0;
xyi.trackingRange = 100;

xyi.ammo(
    Items.thorium,
);

xyi.category = Category.turret;
xyi.buildVisibility = BuildVisibility.shown;
xyi.requirements = ItemStack.with(
    Items.copper, 1000,
    Items.lead, 2000,
    Items.metaglass, 3000,
    Items.graphite, 4000,
);


const dod = extend(LiquidTurret, "dod", {
    size: 1,
    health: 555,
    requirements: [
      metaglass/300,
      copper/10,
      graphite/200,
    ],
    category: turret,
});
