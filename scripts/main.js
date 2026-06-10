require("dialogs")
require("walls")
require("turrets")
require("particles")
require("bullets")
require("payload")

Events.on(ClientLoadEvent, e => {
    const button = new TextButton("Log");

    button.clicked(() => {
        Log.info("be");
    });

    button.visible(() => Vars.state.isGame());

    Vars.ui.hudGroup.fill(t => {
        t.bottom().left();
        t.add(button).size(150, 60).pad(10);
    });
});