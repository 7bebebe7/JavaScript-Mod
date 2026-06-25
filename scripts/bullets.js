//import-----

const { blue, trail } = require("particles");

//code-----
const b = extend(BasicBulletType, {
   speed: 5,
   damage: 30,
   hitEffect: blue,
   shootEffect: blue,
   trailEffect: trail,
   trailInterval: 2.0,
   homingPower: 0.5,
   frontColor: Color.valueOf("ffffff"),
   backColor: Color.valueOf("2e74ff"),
   lightRadius: 40,
   lightColor: Color.valueOf("2e74ff"),
   lightOpacity: 0.7,
   width: 16,
   height: 12
});

const sb = extend(PointBulletType, {
   trailColor: Color.valueOf("a855f7"),
   smokeEffect: Fx.smokeCloud,
   trailEffect: Fx.railTrail,
   trailSpacing: 20,
   damage: 450,
   buildingDamageMultiplier: 0.3,
   hitShake: 1,
   pierce: true,
   pierceCap: 3
});

const emp = extend(EmpBulletType, {
   radius: 40,
   timeDuration: 300,
   timeIncrease: 1.5,
   powerDamageScl: 5.0,
   powerSclDecrease: 0.5,
   hitUnits: true,
   unitDamageScl: 0.3,
   damage: 100,
   speed: 5.0,
   lifetime: 56,
   status: StatusEffects.electrified,
   statusDuration: 300,
   empRadius: 80,
   empDuration: 60 * 5
});

const mega = extend(BasicBulletType, {
   speed: 999,
   damage: 99999,
   homingPower: 10,
   width: 1,
   height: 1,
   unitDamageScl: 10.0,
   status: StatusEffects.boss,
   statusDuration: 9999,
   lifetime: 9999,
   knockback: 999
});

//export-----

module.exports = {
   b: b,
   sb: sb,
   emp: emp,
   mega: mega,
};
