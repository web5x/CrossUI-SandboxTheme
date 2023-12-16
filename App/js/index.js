xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel12")
                .setDock("none")
                .setLeft("-0.9904761904761905em")
                .setTop("-0.9904761904761905em")
                .setWidth("60.87619047619047em")
                .setHeight("44.95238095238095em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("darkblue")
                .setCaption("Darkblue")
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "1em"
                    }
                })
            );
            
            host.xui_ui_panel12.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews10")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "new",
                        "image" : "",
                        "imageClass" : "xui-uicmd-add"
                    },
                    {
                        "id" : "b",
                        "caption" : "settings",
                        "image" : "",
                        "imageClass" : "xui-uicmd-opt"
                    },
                    {
                        "id" : "c",
                        "caption" : "pin",
                        "image" : "",
                        "imageClass" : "xui-uicmd-pin"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarHAlign("center")
                .setBarVAlign("bottom")
                .setBarSize("10em")
                .setSideBarStatus("none")
                .setValue("a")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});