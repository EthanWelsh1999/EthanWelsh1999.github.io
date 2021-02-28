gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDControlsExplanationObjects1= [];
gdjs.MainMenuCode.GDControlsExplanationObjects2= [];

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
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7734140);
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
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7735180);
}
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDControlsExplanationObjects1.length = 0;
gdjs.MainMenuCode.GDControlsExplanationObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
