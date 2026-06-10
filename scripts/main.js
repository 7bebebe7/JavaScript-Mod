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

            const btn = t.button("Log", () => {
                Log.info("Кнопка нажата!");
            }).size(150, 60).padBottom(20).get();

            btn.color.a = 0.5; 
        }));
    });
});