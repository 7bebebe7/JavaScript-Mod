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
    
    constructor: new Prov(function(){
        return extend(MechUnit, {
            lastFlying: false,
    
            update: function(){
                this.super$update();
    
                if(this.lastFlying && !this.isFlying()){
    
                    let tile = Vars.world.tileWorld(this.x, this.y);
                    let marioBlock = Vars.content.getByName(ContentType.block, "mario");
    
                    if(tile != null && tile.build != null && tile.block() == marioBlock){
                        tile.build.kill();
                    }
                }
    
                this.lastFlying = this.isFlying();
            }
        });
    })
});
