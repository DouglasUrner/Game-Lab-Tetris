var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fdd99f75-edc5-479e-88de-cee7137cc2e2","d78d095a-f180-4b21-a675-8d46daa2f402"],"propsByKey":{"fdd99f75-edc5-479e-88de-cee7137cc2e2":{"name":"red_block","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"1Si7MimTDtYdq39w6NLcZUXzKf0MmhyL","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/fdd99f75-edc5-479e-88de-cee7137cc2e2.png"},"d78d095a-f180-4b21-a675-8d46daa2f402":{"name":"block_1","sourceUrl":null,"frameSize":{"x":37,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"qEC4yFxgMgoG7HABv_Lj_3.8wLBQzpgE","loadedFromSource":true,"saved":true,"sourceSize":{"x":37,"y":13},"rootRelativePath":"assets/d78d095a-f180-4b21-a675-8d46daa2f402.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

World.frameRate = 2;
var wellWidth = 10;
var unit = 20;
var startY = 400 - ((Math.floor(400 / unit) * unit) - unit / 2);
createEdgeSprites();
bottomEdge.y = bottomEdge.y - unit / 2;
rightEdge.x = rightEdge.x - (400 - wellWidth * unit);
var active = createSprite(200, startY);
active.setAnimation("block_1");
active.velocityY = unit;
function draw() {
  background("white");
  drawSprites();
  if (active.isTouching(bottomEdge)) {
    active.velocityY = 0;
  } else {
    console.log("dropping");
    if (keyDown("left")) {
      if (active.overlap(leftEdge)) {
        active.x = active.width/2;
      } else {
        console.log("left");
        active.x = active.x - active.width;
      }
    } else if ((keyDown("right"))) {
      active.x = active.x + active.width;
    } else {
      
    }
    if (keyDown("up")) {
      active.rotation = active.rotation - 90;
    } else if (keyDown("down")) {
      active.rotation = active.rotation + 90;
    } else {
      
    }
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
