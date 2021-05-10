gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDControlsExplanationObjects1= [];
gdjs.MainMenuCode.GDControlsExplanationObjects2= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};
gdjs.MainMenuCode.conditionTrue_1 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_1 = {val:false};


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Home");
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition1IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8006644);
}
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "End");
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition1IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8007668);
}
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ControlsExplanation"), gdjs.MainMenuCode.GDControlsExplanationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MainMenuCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTitleObjects1[i].setX(400 - (gdjs.MainMenuCode.GDTitleObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDControlsExplanationObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDControlsExplanationObjects1[i].setX(400 - (gdjs.MainMenuCode.GDControlsExplanationObjects1[i].getWidth()) / 2);
}
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDControlsExplanationObjects1.length = 0;
gdjs.MainMenuCode.GDControlsExplanationObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
