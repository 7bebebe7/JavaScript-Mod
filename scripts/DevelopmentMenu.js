const { DevMenu } = require("dialogs");
if (Core.settings.getBool("SDM", true)) {
  Events.on(ClientLoadEvent, () => {
        Core.app.post(() => {
              Vars.ui.hudGroup.fill(cons(t => {
                  t.bottom();
  
                  const btn = t.button("Dev Menu", () => {
                      DevMenu()
                  }).size(150, 60).padBottom(20).get();
  
                  btn.color.a = 0.4; 
              }));
        });
  });
};