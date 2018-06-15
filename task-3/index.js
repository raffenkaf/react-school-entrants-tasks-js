class Emitter {


  /**
   * Создает экземпляр класса Emitter.
   * @memberof Emitter
   */
  constructor() {
    this.events = [];
  }

  /**
   * связывает обработчик с событием
   *
   * @param {String} event - событие
   * @param {Function} handler - обработчик
   * @memberof Emitter
   */
  on(event, handler) {
      if(!this.events[event]) this.events[event] = { queue: [] };
      this.events[event].queue.push(handler);
  }

  /**
   * Генерирует событие -- вызывает все обработчики, связанные с событием и
   *                       передает им аргумент data
   *
   * @param {String} event
   * @param {*} data
   * @memberof Emitter
   */
  emit(event, data) {
      if(!this.events[event] || !this.events[event].queue.length) return;

      this.events[event].queue.forEach(function(item) {
          item(data || {});
      });
  }
}

export default Emitter;
