/*
自定义全局事件总线对象模块
*/


(function(window){
  const eventBus = {}

  let callbacksObj = {}

  //绑定事件监听
  eventBus.on = function (eventName,callback) {
    const callbacks = callbacksObj[eventName]
      if (callbacks) {
        callbacks.push(callback)
      } else {
        callbacksObj[eventName] = [callback]
      }
  }
  /* 
    分发事件
    */
  eventBus.emit = function (eventName, data) {
    const callbacks = callbacksObj[eventName]
    if (callbacks && callbacks.length>0) {
      callbacks.forEach(callback => {
        callback(data)
      })
    }
  }

  /* 
  移除事件监听
  */
  eventBus.off = function (eventName) {
    if (eventName) {
      delete callbacksObj[eventName]
    } else {
      callbacksObj = {}
    }
  }
  window.eventBus = eventBus
})(window)