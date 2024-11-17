// There is Event Emitter in Node.js, Facebook once had its own implementation but now it is archived.

// You are asked to create an Event Emitter Class

// const emitter = new Emitter()
// It should support event subscribing

// const sub1  = emitter.subscribe('event1', callback1)
// const sub2 = emitter.subscribe('event2', callback2)
// // same callback could subscribe
// // on same event multiple times
// const sub3 = emitter.subscribe('event1', callback1)
// emit(eventName, ...args) is used to trigger the callbacks, with args relayed

// emitter.emit('event1', 1, 2);
// // callback1 will be called twice
// Subscription returned by subscribe() has a release() method that could be used to unsubscribe

// sub1.release()
// sub3.release()
// // now even if we emit 'event1' again,
// // callback1 is not called anymore

function some() {
  return {
    eat(food) {
      queue.push(() => {
        logFn(`Eat ${food}.`);
      });
      return this;
    },
    sleep(time) {
      queue.push(() => {
        return new Promise((res) => {
          setTimeout(() => {
            logFn(`Wake up after ${time} second${time > 1 ? "s" : ""}.`);
            res();
          }, time * 1000);
        });
      });
      return this;
    },
    sleepFirst(time) {
      queue.unshift(() => {
        return new Promise((res) => {
          setTimeout(() => {
            logFn(`Wake up after ${time} second${time > 1 ? "s" : ""}.`);
            res();
          }, time * 1000);
        });
      });
      return this;
    },
  };
}
