"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;
var BAR_WIDTH = 40;
var GAP = 50;
var FONT_GAP = 20;
var barHeight = CLOUD_HEIGHT - GAP - BAR_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(times) {
  var maxTime = times[0];

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }
  return maxTime;
};

var setBarColorByCurrentUser = function(ctx, name) {
  if (name == "Вы") {
    ctx.fillStyle = "rgba(255, 0, 0, 1)";
  } else {
    ctx.fillStyle = "rgba(0, 0, 255," + Math.random(1) + ")";
  }
}

var calculateBarHeight = function(time, maxTime) {
  return (barHeight * time) / maxTime;
}

var printResultMessage = function(ctx) {
  ctx.font = "16px PT Mono";
  ctx.fillStyle = "#000000";
  ctx.textBaseline = "hanging";
  ctx.fillText("Ура вы победили!", CLOUD_X + FONT_GAP, 30);
  ctx.fillText("Список результатов:", CLOUD_X + FONT_GAP, 50);
}

var drawResultBars = function(ctx, names, times) {
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var x = CLOUD_X + BAR_WIDTH + (GAP + BAR_WIDTH) * i;
    var y = CLOUD_HEIGHT - FONT_GAP;
    ctx.fillStyle = "#000000";
    ctx.fillText(names[i], x, y);

    y = CLOUD_HEIGHT - BAR_WIDTH - calculateBarHeight(times[i], maxTime) + CLOUD_Y;
    setBarColorByCurrentUser(ctx, names[i]);
    ctx.fillRect(x, y, BAR_WIDTH, calculateBarHeight(times[i], maxTime));
  }
}

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#ffffff");
  printResultMessage(ctx);
  drawResultBars(ctx, names, times);
};
