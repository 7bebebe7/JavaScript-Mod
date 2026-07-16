const moo = extend(UnitType, "mushroom", {
    constructor: UnitTypes.mace.constructor,
    health: 7500,
    armor: 9,
    speed: 0.38,
    hitSize: 34,
    flying: false,
    canBoost: true,    
    boostMultiplier: 3,
    mechFrontSway: 0.3,
    mechStepShake: 0.4,
    buildSpeed: 3,
});