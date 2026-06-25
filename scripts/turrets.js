//import-----

const { b, sb, emp, mega } = require("bullets");
const { GB } = require("particles");

//turrets-----
const t = extend(ItemTurret, "tur", {
    size: 1,
    health: 250,
    reload: 30,
    range: 140,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.copper, 35
    )
});
t.ammo( Items.copper, b )

const sen = extend(ItemTurret, "sentry", {
    size: 1,
    health: 1488,
    range: 350,
    reload: 120,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.copper, 35
    )
});
sen.ammo( Items.titanium, sb );

const dtek = extend(ItemTurret, "dtek", {
    size: 3,
    health: 2500,
    range: 280,
    reload: 180,
    shootEffect: GB,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.phaseFabric, 3000
    )
});
dtek.consumePower(100 / dtek.reload);
dtek.ammo( Items.phaseFabric, emp );

const xy = extend(ItemTurret, "xyeta", {
    size: 1,
    health: 2500,
    range: 0,
    reload: 999999,
    trackingRange: 100,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.copper, 1000,
        Items.lead, 2000,
        Items.metaglass, 3000,
        Items.graphite, 4000
    )
});
xy.ammo( Items.thorium, mega );

const xyi = extend(ItemTurret, "xyetaII", {
    size: 1,
    health: 2500,
    range: 0,
    reload: 999999,
    trackingRange: 100,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.copper, 1000,
        Items.lead, 2000,
        Items.metaglass, 3000,
        Items.graphite, 4000
    )
});
xyi.ammo( Items.thorium, );

const dod = extend(LiquidTurret, "dod", {
    size: 1,
    health: 555,
    category: Category.turret,
    requirements: ItemStack.with(
        Items.copper, 100,
        Items.graphite, 200
    )
});

dod.ammo(
    Liquids.water, new LiquidBulletType(Liquids.water),
    Liquids.cryofluid, new LiquidBulletType(Liquids.cryofluid)
);