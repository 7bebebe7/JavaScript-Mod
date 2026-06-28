const blue = extend(ParticleEffect, {
    particles: 20,
    length: 16,
    lifetime: 18,
    sizeFrom: 4,
    sizeTo: 0,
    cone: 360,
    colorFrom: Color.valueOf("2e74ff"),
    colorTo: Color.valueOf("b0e1ff"),
    region: "jsm-ro",
    spin: 40
});

const trail = extend(ParticleEffect, {
    particles: 1,
    length: 0,
    lifetime: 40,
    sizeFrom: 6,
    sizeTo: 0,
    colorFrom: Color.valueOf("00377d80"),
    colorTo: Color.valueOf("000a2e80")
});

const massr = extend(ParticleEffect, {
    particles: 10,
    length: 24,
    lifetime: 30,
    sizeFrom: 5,
    sizeTo: 0,
    cone: 360,
    colorFrom: Color.valueOf("00f06959"),
    colorTo: Color.valueOf("00ff931a")
});

const massS = extend(ParticleEffect, {
    particles: 15,
    length: 24,
    lifetime: 30,
    sizeFrom: 6,
    sizeTo: 0,
    cone: 360,
    colorFrom: Color.valueOf("ffa80080"),
    colorTo: Color.valueOf("00f06959")
});

const GB = extend(ExplosionEffect, {
  smokeColor: Color.valueOf("00a14b"),
  sparkColor: Color.valueOf("00ff77"),
  waveColor: Color.valueOf("30e35c"),
  waveStroke: 2,
  waveRad: 40,
  lifetime: 40
});

const PWE = extend(ExplosionEffect, {
  smokeColor: Color.valueOf("e9bdff"),
  sparkColor: Color.valueOf("b82bff"),
  waveColor: Color.valueOf("cd69ff"),
  waveStroke: 2,
  waveRad: 20,
  lifetime: 30,
  waveLife: 30,
  sparks: 0,
  smokes: 0
});

const CC = new Effect(60, e => {
    let i = 0;

    const colors = [
        Color.valueOf("ab34eb"),
        Color.valueOf("#a50cf7"),
        Color.valueOf("#872cb8"),
        Color.valueOf("#a86bc9"),
    ];

    Angles.randLenVectors(e.id, 5, 30, (x, y) => {
        Draw.color(colors[i % colors.length]);

        Fill.circle(
            e.x + x,
            e.y + y,
            7 * e.fin() * e.fout()
        );

        i++;
    });
});
    

//export-----

module.exports = {
   massr: massr,
   massS: massS,
   blue: blue,
   trail: trail,
   GB: GB,
   PWE: PWE,
   CC: CC,
}