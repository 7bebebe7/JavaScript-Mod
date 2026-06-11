    Events.on(ClientLoadEvent, e => {
      Vars.ui.settings.addCategory("JSM", Icon.file, cons(t => {
        
        // чек бокс
        t.check("Initial Message", Core.settings.getBool("mess", true), v => {
          Core.settings.put("mess", v);
          print(v ? "on" : "off");
        }).left().row();
        
        t.add("[gray]You can change it by replacing the file /sprites/hi.png").left().padLeft(35).row(); //.row() тепер не отдельна функція
        
        t.check("Show Tile Name", Core.settings.getBool("ISN", true), v => {
          Core.settings.put("ISN", v);
          print(v ? "on" : "off");
        }).left().row();
        
        t.add("[gray]show tile block name in Inspector \n(does not apply to console)").left().padLeft(35).row();
        
        t.sliderPref(
        "DevMenuAlpha", // ключ настройки
        50,           // значение по умолчанию
        1,             // минимум
        100,           // максимум
        1,             // шаг
        s => s + "alpha"   // отображаемый текст
        );
        
        // кнопка з інонкою "і", текстом, для простої кнопки з  текстом: не вказувати параметер Icon
        t.button("content", Icon.info, () => {
          // те що робить кніпка
          showCont();
          //розмір, відступи, та "ентер"
        }).colspan(2).center().padTop(20).size(200, 50).row();
        
      }));
      
      //контентовий діалог
      function showCont() {
    const con = new BaseDialog("mod content");

    con.cont.pane(p => {

        p.button("r0uter", new TextureRegionDrawable(Core.atlas.find("jsm-r0uter")), () => {
            const rou = Vars.content.block("jsm-r0uter");
            if (rou) Vars.ui.content.show(rou);
        }).size(210, 64).padTop(10).row();;

        p.button("feedbacker", new TextureRegionDrawable(Core.atlas.find("jsm-feedbacker")), () => {
            const b = Vars.content.block("jsm-feedbacker");
            if (b) Vars.ui.content.show(b);
        }).size(210, 64).padTop(10).row();

        p.button("VarWall", new TextureRegionDrawable(Core.atlas.find("jsm-VarWall")), () => {
            const VW = Vars.content.block("jsm-VarWall");
            if (VW) Vars.ui.content.show(VW);
        }).size(210, 64).padTop(10).row();

        p.button("Inspector", new TextureRegionDrawable(Core.atlas.find("jsm-Inspector")), () => {
            const INSP = Vars.content.block("jsm-Inspector");
            if (INSP) Vars.ui.content.show(INSP);
        }).size(210, 64).padTop(10).row();

        p.button("menu", new TextureRegionDrawable(Core.atlas.find("jsm-menu")), () => {
            const menu = Vars.content.block("jsm-menu");
            if (menu) Vars.ui.content.show(menu);
        }).size(210, 64).padTop(10).row();

        p.button("tur", new TextureRegionDrawable(Core.atlas.find("jsm-tur")), () => {
            const tur = Vars.content.block("jsm-tur");
            if (tur) Vars.ui.content.show(tur);
        }).size(210, 64).padTop(10).row();

        p.button("sentry", new TextureRegionDrawable(Core.atlas.find("jsm-sentry")), () => {
            const sentry = Vars.content.block("jsm-sentry");
            if (sentry) Vars.ui.content.show(sentry);
        }).size(210, 64).padTop(10).row();

        p.button("dtek", new TextureRegionDrawable(Core.atlas.find("jsm-dtek")), () => {
            const dtek = Vars.content.block("jsm-dtek");
            if (dtek) Vars.ui.content.show(dtek);
        }).size(210, 128).padTop(10).row();

        p.button("pmd", new TextureRegionDrawable(Core.atlas.find("jsm-pmd")), () => {
            const pmd = Vars.content.block("jsm-pmd");
            if (pmd) Vars.ui.content.show(pmd);
        }).size(210, 128).padTop(10).row();

    }).size(260, 300);

    con.addCloseButton();
    con.show();
    }
      
      // діалогове вікно це функція щоб упростити код та виклик цього вікна
      //саме вікно:
      function showMyDialog() {
        const d = new BaseDialog("hello");
        d.cont.image(Core.atlas.find("jsm-hi")).size(200, 200).pad(10).row();
        d.cont.add("Hi it's test:)").row();
        d.buttons.button("bye", () => d.hide()).size(210, 64);
        d.show();
      }
      
      // Показ вікна якщо чекбокс активний
      if (Core.settings.getBool("mess", true)) {
        showMyDialog();
        //з викликом вікна яке тепер функція
      }
    });
    
    
    
function blockmenu() {
    const M = new BaseDialog("hello");

    M.cont.add("Hi it's test:)").row();

    M.cont.button("back", () => {
      
      M.hide();
      
      Vars.ui.hudfrag.showToast(
     Icon.info,
     "bye!"
      );
      
    }).size(210, 64);

    M.show();
}
//Dev Menu 

function DevMenu() {
   const DM = new BaseDialog("Dev Menu");
   DM.cont.add("Dev menu test")
   DM.buttons.button("close", () =>{ DM.hide() }).size(150, 60).padBottom(20)
   DM.show()
}



module.exports = {
   blockmenu: blockmenu,
   DevMenu: DevMenu,
};