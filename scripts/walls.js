const { blockmenu } = require("dialogs");

const walll = extend(Wall, "r0uter", {});

walll.buildType = () => extend(Wall.WallBuild, {
    updateTile(){
        this.super$updateTile();

        if(this.timer.get(0, 5)){
            Fx.steam.at(this.x, this.y);
        }
    }

walll.size = 1;
walll.health = 99999999;
walll.lightningChance = 1.0;
walll.lightningDamage = 2000;
walll.lightningLength = 100;

walll.requirements = ItemStack.with(
    Items.copper, 15,
    Items.titanium, 10
);

walll.category = Category.defense;
walll.buildVisibility = BuildVisibility.shown;



const v1 = extend(Wall, "feedbacker", {});

v1.size = 1;
v1.health = 10000;
v1.armor = 100;
v1.flashHit = true;
v1.absorbLasers = true;
v1.chanceDeflect = 10.0;
v1.deflectSound = Vars.tree.loadSound("paryy")

v1.requirements = ItemStack.with(
    Items.titanium, 100
);

v1.category = Category.defense;
v1.buildVisibility = BuildVisibility.shown;



const vw = extend(Wall, "VarWall", {
    size: 1,
    health: 3000,
    category: Category.defense,
    buildVisibility: BuildVisibility.shown,

    canPlaceOn(tile, team, rotation){
    return tile != null && tile.floor().name == "sand-floor";
    }
});

vw.requirements = ItemStack.with(
    Items.copper, 15,
    Items.titanium, 10
);

const insp = extend(Wall, "Inspector", {
    size: 1,
    health: 1,
    category: Category.defense,
    buildVisibility: BuildVisibility.shown,
});

Events.on(BlockBuildEndEvent, e => {

    if (e.tile.block().name != "jsm-Inspector") return;

    var tilename = e.tile.floor().name;
    Log.info(tilename);

    if (Core.settings.getBool("ISN", true)) {
        Vars.ui.showInfo(tilename);
    }

});

insp.requirements = ItemStack.with(
    Items.copper, 1,
    Items.titanium, 1
);

const menu = extend(Wall, "menu", {
   configurable: true,
    init() {
        this.super$init();
    },

   canPlaceOn(tile, team, rotation){
    return tile != null && tile.floor().name == "metal-tiles-9";
   },
});

menu.size = 1
menu.health = 9000;
menu.requirements = ItemStack.with(
    Items.copper, 5000
);



menu.category = Category.defense;
menu.buildVisibility = BuildVisibility.shown;
menu.buildType = () => extend(Building, {
    buildConfiguration(table) {
        table.clear();

        table.button(Icon.settings, Styles.clearTogglei, run(() => {
            blockmenu()
        })).size(40);
    },
});

