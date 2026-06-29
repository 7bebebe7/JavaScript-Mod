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
        table.slider(0, 100, 1, this.value, v => {
            this.value = v;
        });
        table.button(Icon.warning, Styles.clearTogglei, run(() => {
            Log.warn("hi")
        })).size(40, 40);
    },

    getPowerProduction(){
        return this.value;
    }
});

//othere-----