$(document).ready(function() {
  console.log('Ginger Framework 1.0.0');

  /**
   * lazyload
   */

    function logElementEvent(eventName, element) {
      console.log(
        Date.now(),
        eventName,
        element.getAttribute("data-src")
      );
    }

    var callback_enter = function(element) {
      logElementEvent("🔑 ENTERED", element);
    };
    var callback_exit = function(element) {
      logElementEvent("🚪 EXITED", element);
    };
    var callback_reveal = function(element) {
      logElementEvent("👁️ REVEALED", element);
    };
    var callback_loaded = function(element) {
      logElementEvent("👍 LOADED", element);
    };
    var callback_error = function(element) {
      logElementEvent("💀 ERROR", element);
      element.src =
        "https://via.placeholder.com/440x560/?text=Error+Placeholder";
    };
    var callback_finish = function() {
      logElementEvent("✔️ FINISHED", document.documentElement);
    };

    var ll = new LazyLoad({
      threshold: 0,
      // Assign the callbacks defined above
      callback_enter: callback_enter,
      callback_exit: callback_exit,
      callback_reveal: callback_reveal,
      callback_loaded: callback_loaded,
      callback_error: callback_error,
      callback_finish: callback_finish
    });

});