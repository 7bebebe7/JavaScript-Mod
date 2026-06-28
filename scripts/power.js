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
  powerProduction: 50,
  placeSound: PEGS
});

//othere-----