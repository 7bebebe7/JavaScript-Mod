//import-----

const { blockmenu } = require("dialogs");
const { PWE, CC } = require("particles");


//walls-----

const walll = extend(Wall, "r0uter", {
    size: 1,
    health: 99999999,
    lightningChance: 1.0,
    lightningDamage: 2000,
    lightningLength: 100,
    category: Category.defense,
    buildVisibility: BuildVisibility.shown,
    requirements: ItemStack.with(
        Items.copper, 15,
        Items.titanium, 10
    ),
});

const v1 = extend(Wall, "feedbacker", {
    size: 1,
    health: 10000,
    armor: 100,
    flashHit: true,
    absorbLasers: true,
    chanceDeflect: 10.0,
    deflectSound: Vars.tree.loadSound("paryy"),
    requirements: ItemStack.with( Items.titanium, 100 ),
    category: Category.defense,
    buildVisibility: BuildVisibility.shown,
});

const vw = extend(Wall, "VarWall", {
    size: 1,
    health: 3000,
    category: Category.defense,
    buildVisibility: BuildVisibility.shown,
    requirements: ItemStack.with(
        Items.copper, 15,
        Items.titanium, 10
    ),
    canPlaceOn(tile, team, rotation){
    return tile != null && tile.floor().name == "sand-floor";
    }
});

const insp = extend(Wall, "Inspector", {
    size: 1,
    health: 1,
    category: Category.defense,
    buildVisibility: BuildVisibility.shown,
    requirements: ItemStack.with(
        Items.copper, 1,
        Items.titanium, 1
    )
});

const menu = extend(Wall, "menu", {
   configurable: true,
    init() {
       this.super$init();
    },
   canPlaceOn(tile, team, rotation){
    return tile != null && tile.floor().name == "metal-tiles-9";
   },
   size: 1,
   health: 9000,
   category: Category.defense,
   buildVisibility: BuildVisibility.shown,
   requirements: ItemStack.with(
        Items.copper, 1,
        Items.titanium, 1
    ),
    update: function() {
        if (this.health < 500 && !this.warnedLowHp) {
            Log.err("warning!");
            this.warnedLowHp = true;
        } else if (this.health >= 500) {
            this.warnedLowHp = false;
        }
    }       
});
menu.buildType = () => extend(Building, {
    buildConfiguration(table) {
        table.clear();
        table.button(Icon.settings, Styles.clearTogglei, run(() => {
            blockmenu()
        })).size(40);
    },
});

const PW = extend(Wall, "purple-wall", {
    size: 1,
    health: 1500,
    armor: 3,
    category: Category.defense,
    buildVisibility: BuildVisibility.shown,
    requirements: ItemStack.with(
        Items.thorium, 10,
        Items.titanium, 5
    ),
    update: true
});
PW.buildType = () => extend(Wall.WallBuild, PW, {
    timerEffect: new Interval(1),

    updateTile(){
        this.super$updateTile();
        if(this.timerEffect.get(0, 60)){
            PWE.at(this.x, this.y);
        }
    }
});

const PWL = extend(Wall, "purple-wall-large", {
    size: 2,
    health: 3000,
    armor: 6,
    category: Category.defense,
    buildVisibility: BuildVisibility.shown,
    update: true,
    requirements: ItemStack.with(
        Items.thorium, 20,
        Items.titanium, 10
    )
});
PWL.buildType = () => extend(Wall.WallBuild, PWL, {
    timerEffect: new Interval(1),

    updateTile(){
        this.super$updateTile();
        if(this.timerEffect.get(0, 60)){
            CC.at(this.x, this.y);
        }
    }
});

//other function-----

Events.on(BlockBuildEndEvent, e => {

    if (e.tile.block().name != "jsm-Inspector") return;

    var tilename = e.tile.floor().name;
    Log.info(tilename);

    if (Core.settings.getBool("ISN", true)) {
        Vars.ui.showInfo(tilename);
    }

});