bridge.text_translate = null;
bridge.img_translate = null;
bridge.videos_translate = null;
bridge.links_translate = null;

$(window).on("beforeunload", function () {
  scorm.quit();
});

$(window).on("unload", function () {
  scorm.quit();
});

$(window).on(VIEW_EVENT.READY, function () {});

bridge.avatarPlay = function () {
  $(".audioAvatar")[0].volume = 0.02;
  $(".audioAvatar")[0].play();
  $(".audioAvatar").attr("status", 1);
};

bridge.avatarPause = function () {
  $(".audioAvatar")[0].pause();
  $(".audioAvatar").attr("status", 0);
};

bridge.statusAudioObj = function () {
  return {
    audio: $(".audioTrilha"),
    status: $(".audioTrilha").attr("status"),
  };
};

bridge.audioPlay = function (audioClass, volume = 1) {
  $(`.${audioClass}`)[0].volume = volume;
  $(`.${audioClass}`)[0].play();
};
bridge.audioPause = function (audioClass) {
  $(`.${audioClass}`)[0].pause();
};

bridge.audioStop = function (audioClass) {
  $(`.${audioClass}`)[0].stop();
};

bridge.statusAudioInit = function () {
  $(".audioTrilha")[0].volume = 0.02;

  $(".audioTrilha")[0].play();
  $(".audioTrilha").attr("status", 1);
};
