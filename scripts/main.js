require("dialogs")
require("walls")
require("turrets")
require("particles")
require("bullets")
require("payload")

Events.on(ClientLoadEvent, () => {
    Vars.ui.hudGroup.fill(t => {
        t.bottom().right();

        t.button("Log", () => {
            Log.info("Привет!");
        }).size(150, 60)
        .visible(() => Vars.state.isGame());
    });
});