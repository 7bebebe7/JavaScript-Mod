require("dialogs")
require("walls")
require("turrets")
require("particles")
require("bullets")
require("payload")

Events.on(ClientLoadEvent, () => {
    Core.app.post(() => {
        Vars.ui.hudGroup.fill(cons(t => {
            t.bottom();

            t.button("Log", () => {
                Log.info("Кнопка работает!");
            }).size(150, 60);
        }));
    });
});