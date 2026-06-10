require("dialogs")
require("walls")
require("turrets")
require("particles")
require("bullets")
require("payload")

Events.on(ClientLoadEvent, () => {
    const table = new Table();

    table.bottom().right();

    table.button("Log", () => {
        if (Vars.state.isGame()) {
            Log.info("Привет!");
        }
    }).size(150, 60);

    Vars.ui.hudGroup.addChild(table);
});