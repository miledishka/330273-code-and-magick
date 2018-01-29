'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;
var BAR_WIDTH = 40;
var GAP = 50;
var FONT_GAP = 20;
var BAR_HEIGHT = CLOUD_HEIGHT - GAP - BAR_WIDTH - GAP;
var CURRENT_PLAYER_NAME = 'Вы';
var CURRENT_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
var CTX_SETTINGS = {
  font: '16px PT Mono',
  background: '#000000',
  textStyle: 'hanging',
  shadowBackground: 'rgba(0, 0, 0, 0.7)',
  cloudBackground: '#ffffff'
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (collection) {
  var maxElement = collection[0];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] > maxElement) {
      maxElement = collection[i];
    }
  }
  return maxElement;
};

var setBarColorByCurrentUser = function (ctx, name) {
  if (name === CURRENT_PLAYER_NAME) {
    ctx.fillStyle = CURRENT_PLAYER_COLOR;
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random(1) + ')';
  }
};

var calculateBarHeight = function (time, maxTime) {
  return (BAR_HEIGHT * time) / maxTime;
};

var printResultMessage = function (ctx) {
  ctx.font = CTX_SETTINGS.font;
  ctx.fillStyle = CTX_SETTINGS.background;
  ctx.textBaseline = CTX_SETTINGS.textStyle;
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, 30);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, 50);
};

var drawResultBars = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var x = CLOUD_X + BAR_WIDTH + (GAP + BAR_WIDTH) * i;
    var y = CLOUD_HEIGHT - FONT_GAP;
    ctx.fillStyle = CTX_SETTINGS.background;
    ctx.fillText(names[i], x, y);

    y = CLOUD_HEIGHT - BAR_WIDTH - calculateBarHeight(times[i], maxTime) + CLOUD_Y;
    setBarColorByCurrentUser(ctx, names[i]);
    ctx.fillRect(x, y, BAR_WIDTH, calculateBarHeight(times[i], maxTime));
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, CTX_SETTINGS.shadowBackground);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CTX_SETTINGS.cloudBackground);
  printResultMessage(ctx);
  drawResultBars(ctx, names, times);
};
