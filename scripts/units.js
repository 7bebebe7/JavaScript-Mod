const marioKillAbility = new Ability(){
    update: function(unit){
        if(unit.lastFlying === undefined) unit.lastFlying = false;

        if(unit.lastFlying && !unit.isFlying()){
            let tile = Vars.world.tileWorld(unit.x, unit.y);
            let marioBlock = Vars.content.getByName(ContentType.block, "mario");

            if(tile != null && tile.build != null && tile.block() == marioBlock){
                tile.build.kill();
            }
        }

        unit.lastFlying = unit.isFlying();
    }
};

const moo = extend(UnitType, "mushroom", {
    health: 7500,
    armor: 9,
    speed: 0.38,
    flying: false,
    canBoost: true,
    boostMultiplier: 3,
    mechFrontSway: 0.3,
    mechStepShake: 0.4,
    buildSpeed: 3,
    hitSize: 8,
    legCount: 2,
    legGroupSize: 1,
    abilities: [marioKillAbility]
});