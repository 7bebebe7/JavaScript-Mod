//import-----

//effect-----

const RIS = extend(ItemSource, "random-source", {
  health: 300,
  size: 1,
  requirements: ItemStack.with(
    Items.lead, 30,
    Items.graphite, 20,
    Items.silicon, 25
  ),
  buildVisibility: BuildVisibility.shown,
  category: Category.effect,
});

//other