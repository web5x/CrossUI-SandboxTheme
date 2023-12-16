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
                        "caption" : "TV",
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
            
            host.xui_ui_panel12.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image10")
                .setLeft("-0.38095238095238093em")
                .setTop("-0.45714285714285713em")
                .setWidth("9.82857142857143em")
                .setHeight("9.066666666666666em")
                .setSrc("https://avatars.githubusercontent.com/u/152233197?v=4")
            );
            
            host.xui_ui_panel12.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label18")
                .setLeft("-3.8857142857142857em")
                .setTop("9.066666666666666em")
                .setWidth("12.038095238095238em")
                .setHeight("1.5238095238095237em")
                .setCaption("LIVEBOXTEST")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});