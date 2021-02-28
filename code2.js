gdjs.GameOverCode = {};
gdjs.GameOverCode.GDGameOverTextObjects1= [];
gdjs.GameOverCode.GDGameOverTextObjects2= [];
gdjs.GameOverCode.GDScoreTextObjects1= [];
gdjs.GameOverCode.GDScoreTextObjects2= [];
gdjs.GameOverCode.GDEndTextObjects1= [];
gdjs.GameOverCode.GDEndTextObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameOverCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreTextObjects1[i].setString(gdjs.GameOverCode.GDScoreTextObjects1[i].getString() + (gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7765052);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverCode.GDScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDScoreTextObjects2.length = 0;
gdjs.GameOverCode.GDEndTextObjects1.length = 0;
gdjs.GameOverCode.GDEndTextObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
