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
            t.add("[gray]Show tile block name in Inspector \n(does not apply to console)").left().padLeft(35).row();
          }));
          

          // Показ вікна якщо чекбокс активний
          if (Core.settings.getBool("mess", true)) {
              UPmain();
          }
    })
        
    function blockmenu() {
        const M = new BaseDialog("hello");
    
        M.cont.button(new TextureRegionDrawable(Core.atlas.find("jsm-calc-icon")), () => {
            calc()
        }).size(60,60).padLeft(10).padRight(10);
        
        M.cont.button( new TextureRegionDrawable(Core.atlas.find("jsm-50-50-icon")), () => {
            
            if (Math.random() > 0.5) {
                Vars.ui.hudfrag.showToast(Icon.ok, "You Vin!");
            } else {
                Vars.ui.hudfrag.showToast(Icon.info, "You lost :(");
                
                Time.run(60 * 5, () => { Packages.arc.Core.app.exit() });
            }
            
        }).size(64, 64).center().row();
        
        M.buttons.button("back", () => {
            M.hide();
            Vars.ui.hudfrag.showToast(Icon.info, "bye!");
        }).size(210, 64);
        M.show();
    }
    
    //calculator-----
    
    function calc() {
        const cal = new BaseDialog("Calculator");
        
        cal.cont.add("[grey]Number 1").center().row()
        
        let label1 = cal.cont.add(new TextField("", Styles.defaultField)).width(200).get();
        label1.setFilter(TextField.TextFieldFilter.digitsOnly);
        
        cal.cont.row();
        
        cal.cont.add("[grey]Number 2").center().padTop(5).row()
        
        let label2 = cal.cont.add(new TextField("", Styles.defaultField)).width(200).get();
        label2.setFilter(TextField.TextFieldFilter.digitsOnly);
        
        cal.cont.row();
        
        cal.cont.table(cons(t => {
            
            t.button("+", () => {
            
            let num1 = parseInt(label1.getText());
            let num2 = parseInt(label2.getText());
            
            reslabel.setText((num1 + num2).toString())
            
        }).size(60, 60).padTop(3).padLeft(5).padRight(5).padBottom(3);
        
            t.button("-", () => {
            
            let num1 = parseInt(label1.getText());
            let num2 = parseInt(label2.getText());
            
            reslabel.setText((num1 - num2).toString())
            
        }).size(60, 60).padTop(3).padLeft(5).padRight(5).padBottom(3);
        
            t.button("*", () => {
            
            let num1 = parseInt(label1.getText());
            let num2 = parseInt(label2.getText());
            
            reslabel.setText((num1 * num2).toString())
            
        }).size(60, 60).padTop(3).padLeft(5).padRight(5).padBottom(3);
        
            t.button("/", () => {
            
                let num1 = parseInt(label1.getText());
                let num2 = parseInt(label2.getText());
            
            if (num2 == 0) {
                reslabel.setText("null")
            } else {
                reslabel.setText((num1 / num2).toString())
            };
            
        }).size(60, 60).padTop(3).padLeft(5).padRight(5).padBottom(3);
        
            t.button("%", () => {
            
            let num1 = parseInt(label1.getText());
            let num2 = parseInt(label2.getText());
            
            reslabel.setText((num1 % num2).toString())
            
        }).size(60, 60).padTop(3).padLeft(5).padRight(5).padBottom(3);
        
        })).center().row();
        
        let reslabel = cal.cont.add(new Label("Result")).width(200).center().get();
        reslabel.setAlignment(Align.center);
        
        cal.buttons.button(Icon.none, () => { 
            
            label1.setText("");
            label2.setText("");
            reslabel.setText("Result");
            
        }).size(64, 64).padLeft(5);
        
        cal.buttons.button("back", () => { cal.hide() }).size(210, 64);
        
        cal.buttons.button(Icon.copy, () => { Core.app.setClipboardText(reslabel.getText()) }).size(64, 64).padLeft(5);
        
        cal.show();
    }

    //greeting 
    
    function showMyDialog() {
            const d = new BaseDialog("hello");
            d.cont.image(Core.atlas.find("jsm-hi")).size(200, 200).pad(10).row();
            d.cont.add("Hi it's test:)").row();
            d.buttons.button("bye", () => d.hide()).size(210, 64);
            d.show();
          }
        
    //upBlock/main
    
    function UPmain() {
        const upm = new BaseDialog("set option");
        
        upm.addCloseButton();
        upm.cont.button(Icon.up, () => {
          UPup()
        }).size(200,200).padTop(10);
        
        upm.cont.button(Icon.info, () => {
          UPinfo()
        }).size(200,200).padLeft(30).padTop(10);
        
        upm.cont.button(Icon.book, () => {
          UPothere()
        }).size(200,200).padLeft(30).padTop(10).row();
        
        upm.cont.table(Tex.button, t => {
            t.add("12345").height(60).center();
        }).fillX().colspan(3);
        
        upm.show()
    }
    
    //upBlock/up
    
    function UPup() {
        const upu = new BaseDialog("upgrades");
        upu.addCloseButton();
        upu.show()
    }
    
    //upBlock/info
    
    function UPinfo() {
        const upi = new BaseDialog("info");
        upi.addCloseButton();
        upi.show()
    }
    
    //upBlock/othere
    
    function UPothere() {
        const upo = new BaseDialog("othere");
        upo.addCloseButton();
        upo.show()
    }
    
    //export-----
    module.exports = {
       blockmenu: blockmenu
    }