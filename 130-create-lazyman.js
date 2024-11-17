// LazyMan is very lazy, he only eats and sleeps.

// LazyMan(name: string, logFn: (log: string) => void) would output a message, the passed logFn is used.

// LazyMan('Jack', console.log)
// // Hi, I'm Jack.
// He can eat(food: string)

// LazyMan('Jack', console.log)
//   .eat('banana')
//   .eat('apple')
// // Hi, I'm Jack.
// // Eat banana.
// // Eat Apple.
// He also sleep(time: number), time is based on seconds.

// LazyMan('Jack', console.log)
//   .eat('banana')
//   .sleep(10)
//   .eat('apple')
//   .sleep(1)
// // Hi, I'm Jack.
// // Eat banana.
// // Wake up after 10 seconds.
// // Eat Apple.
// // Wake up after 1 second.
// He can sleepFirst(time: number), which has the highest priority among all tasks, no matter what the order is.

// LazyMan('Jack', console.log)
//   .eat('banana')
//   .sleepFirst(10)
//   .eat('apple')
//   .sleep(1)
// // Wake up after 10 seconds.
// // Hi, I'm Jack.
// // Eat banana
// // Eat apple
// // Wake up after 1 second.
// Please create such LazyMan()

// SOLUTION

// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
function LazyMan(name, logFn) {
  let normalTasks = [];
  let urgentTasks = [];
  normalTasks.push([`Hi, I'm ${name}.`]);

  setTimeout(() => {
    const hey = () => {
      if (urgentTasks.length) {
        const ele = urgentTasks.shift();
        setTimeout(() => {
          logFn(ele[0]);
          hey();
        }, ele[1] * 1000);
      } else if (normalTasks.length) {
        const ele = normalTasks.shift();
        console.log(ele);
        if (ele.length === 2) {
          setTimeout(() => {
            logFn(ele[0]);
            hey();
          }, ele[1] * 1000);
        } else {
          logFn(ele[0]);
          hey();
        }
      }
    };
    hey();
  }, 0);

  return {
    eat: function (eatWhat) {
      normalTasks.push([`Eat ${eatWhat}.`]);
      return this;
    },
    sleep: function (wakeUpWhen) {
      normalTasks.push([
        `Wake up after ${wakeUpWhen} ${
          wakeUpWhen === 1 ? "second" : "seconds"
        }.`,
        wakeUpWhen,
      ]);
      return this;
    },
    sleepFirst: function (wakeUpWhen) {
      urgentTasks.push([
        `Wake up after ${wakeUpWhen} ${
          wakeUpWhen === 1 ? "second" : "seconds"
        }.`,
        wakeUpWhen,
      ]);
      return this;
    },
  };
}

LazyMan("Jack", console.log).eat("banana").eat("apple");

// Using class

// https://bigfrontend.dev/problem/create-lazyman
// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
function LazyMan(name, logFn) {
  class Laziness {
    messages = [];
    queue = false;
    constructor(name, fn) {
      this.name = name;
      this.fn = fn;
      this.messages.push(`Hi, I'm ${this.name}.`);
      this.display();
      return this;
    }
    eat(food) {
      this.messages.push(`Eat ${food}.`);
      this.display();
      return this;
    }
    sleep(time) {
      this.messages.push(time);
      this.display();
      return this;
    }
    sleepFirst(time) {
      this.messages.unshift(time);
      this.display();
      return this;
    }
    display() {
      const next = (element) => {
        if (element) {
          const nextElement = this.messages.shift();
          if (typeof element !== "number") {
            this.fn(element);
            next(nextElement);
          } else {
            setTimeout(() => {
              const phrase =
                element === 1
                  ? `Wake up after ${element} second.`
                  : `Wake up after ${element} seconds.`;
              this.fn(phrase);
              next(nextElement);
            }, element * 1000);
          }
        }
      };

      if (!this.queue) {
        this.queue = true;
        setTimeout(() => {
          const element = this.messages.shift();
          next(element);
        });
      }
    }
  }
  return new Laziness(name, logFn);
}

// LazyMan('Jack', console.log).eat('banana').sleepFirst(10).eat('apple').sleep(1)
// LazyMan('Jack', console.log).eat('banana').eat('apple').sleepFirst(2)
LazyMan("Jack", console.log).eat("banana").sleepFirst(10).eat("apple").sleep(1);
