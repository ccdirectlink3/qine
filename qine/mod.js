ig.ACTION_STEP.SET_SCREEN_ENEMY_TARGET = ig.ActionStepBase.extend({
  target: 0,
  _wm: new ig.Config({
    attributes: {
      target: {
        _type: "Entity",
        _info: "Entity to target",
        _withNull: true
      }
    }
  }),
  init: function(a) {
    this.target = a.target
  },
  run: function(a) {
    var c = ig.Event.getEntity(this.target, undefined);
    sc.combat.setScreenEnemiesTarget(c);
  },
});

sc.COMBAT_MSG_TYPE.GUARD_COUNTER = {
  icon: "",
  msg: "sc.gui.combat-msg.guard-counter",
  keepPos: true,
  duration: 1
};


ig.merge(ig.BGM_TRACK_LIST, {
  "qine": {
      "path": "media/bgm/muQine.ogg",
      "loopEnd": 80.02,
      "volume": 2
  },
  "unbreakable": {
      "intro": "media/bgm/muUnbreakable-i.ogg",
      "path": "media/bgm/muUnbreakable.ogg",
      "introEnd": 5.537,
      "loopEnd": 74.605,
      "volume": 2
  }
})