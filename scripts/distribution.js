//import-----

//distribution-----

const RIS = extend(ItemSource, "random-source", {
  health: 300,
  size: 1,
  configurable: false,
  update: true,
  requirements: ItemStack.with(
    Items.lead, 30,
    Items.graphite, 20,
    Items.silicon, 25
  ),
  buildVisibility: BuildVisibility.shown,
  category: Category.distribution,
  
  placed(tile){
        this.super$placed(tile);
        tile.build.configure(Items.copper);
  },
  
});

//other