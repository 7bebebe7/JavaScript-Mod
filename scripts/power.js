//import-----

//code-----
const PEGS = Vars.tree.loadSound("Eplace");


const EG = extend(PowerSource, "electric-generator", {
  size: 3,
  health: 1350,
  category: Category.power,
  buildVisibility: BuildVisibility.shown,
  requirements: ItemStack.with(
    Items.thorium, 200,
    Items.titanium, 100,
    Items.phaseFabric, 150,
    Items.graphite, 120
  ),
  update: true,
  configurable: true,
  powerProduction: 50,
  placeSound: PEGS,
  laserRange: 35,
  laserScale: 0.75,
  autolink: false,
  laserColor2: Color.valueOf("DAA520FF")
});
EG.buildType = () => extend(PowerSource.PowerSourceBuild, EG, {
    value: 50,

    buildConfiguration(table){
        const v = this.value ?? 50;
        table.slider(0, 100, 1, v, v => {
            this.value = v;
            this.configure(v);
        });
    },

    configured(player, value){
        this.super$configured(player, value);
        this.value = value;
        Log.info("value: @", value);
    }
});

//othere-----