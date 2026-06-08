const { blue, trail } = require("particles");

const b = extend(BasicBulletType, {});
b.speed = 5;
b.damage = 30;
b.hitEffect = blue;
b.shootEffect = blue;
b.trailEffect = trail;
b.trailInterval = 2.0;
b.homingPower = 0.5;
b.frontColor = Color.valueOf("ffffff");
b.backColor = Color.valueOf("2e74ff");
b.lightRadius = 40;
b.lightColor = Color.valueOf("2e74ff");
b.lightOpacity = 0.7;
b.width = 16;
b.height = 12;



const sb = extend(PointBulletType, {});

sb.trailColor = Color.valueOf("a855f7");
sb.smokeEffect = Fx.smokeCloud;
sb.trailEffect = Fx.railTrail;
sb.trailSpacing = 20;
sb.damage = 450;
sb.buildingDamageMultiplier= 0.3;
sb.hitShake = 1;
sb.pierce = true;
sb.pierceCap = 3;


const emp = extend(EmpBulletType, {});

emp.radius = 40;
emp.timeDuration = 300;
emp.timeIncrease = 1.5;
emp.powerDamageScl = 5.0;
emp.powerSclDecrease = 0.5;
emp.hitUnits = true;
emp.unitDamageScl = 0.3;
emp.damage = 100;
emp.speed = 5.0;
emp.lifetime = 56;
emp.status = StatusEffects.electrified;
emp.statusDuration = 300;
emp.empRadius = 80;
emp.empDuration = 60 * 5;



const mega = extend(BasicBulletType, {});

mega.speed = 999;
mega.damage = 99999;
mega.homingPower = 10;
mega.width = 1;
mega.height = 1;
mega.unitDamageScl = 10.0;
mega.status = StatusEffects.boss;
mega.statusDuration = 9999;
mega.lifetime = 9999;
mega.knockback = 999;


module.exports = {
   b: b,
   sb: sb,
   emp: emp,
   mega: mega,
};
