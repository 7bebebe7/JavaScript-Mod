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
});
moo.constructor = () => extend(MechUnit, {
    lastFlying: false,

    update(){
        this.super$update();

        if(this.lastFlying && !this.isFlying()){
            let tile = Vars.world.tileWorld(this.x, this.y);

            if(tile != null && tile.build != null && tile.block() == mario){
                tile.build.kill();
            }
        }

        this.lastFlying = this.isFlying();
    }
});