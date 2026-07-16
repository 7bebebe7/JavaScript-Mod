const moo = extend(UnitType, "mushroom", {
  speed: 299792458,
  rotateSpeed: 299792458,
  stepShake: 0,
  deathShake: 299792458,
  health: 299792458,
  armor: 299792458,
  payloadCapacity: 0,
  targetGround: false,
  targetAir: false,
  canBoost: true,
  boostMultiplier: 2.5,
  riseSpeed: 0.08,
  descentSpeed: 0.08,
});

moo.constructor = prov(() => MechUnit.create());