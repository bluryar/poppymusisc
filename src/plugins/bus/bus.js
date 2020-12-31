export let VueBus = {
  install(Vue, options) {
    let bus;
    if (options && options.mode === "vue") {
      bus = new Vue({ abstract: true });
      Object.defineProperties(bus, {
        on: {
          get() {
            return this.$on.bind(this);
          }
        },
        once: {
          get() {
            return this.$once.bind(this);
          }
        },
        off: {
          get() {
            console.log(this);
            return this.$off.bind(this);
          }
        },
        emit: {
          get() {
            return this.$emit.bind(this);
          }
        }
      });
      defineBus(Vue, bus);
    } else {
      bus = new Bus();
      defineBus(Vue, bus);
    }
  }
};

function defineBus(Vue, bus) {
  Object.defineProperty(Vue.prototype, "$bus", {
    get() {
      return bus;
    }
  });
  Object.defineProperty(Vue, "bus", {
    get() {
      return bus;
    }
  });
}

class Bus {
  constructor() {
    this.__task = {};
  }
  emit(evtName, ...args) {
    let callbacks = this.__task[evtName] || [];
    callbacks.forEach(cb => {
      cb(...args);
    });
    return this;
  }

  on(evtName, cb) {
    let callbacks = this.__task[evtName] || [];
    callbacks.push(cb);
    this.__task[evtName] = callbacks;
    return this;
  }

  once(evtName, cb) {
    let onceFn = (...args) => {
      cb(...args);
      this.off(evtName, onceFn);
    };
    this.on(evtName, onceFn);
    return this;
  }

  off(evtName, cb) {
    if (evtName === undefined) {
      this.__task = {};
    } else if (cb === undefined) {
      this.__task[evtName] = [];
    } else {
      let callbacks = this.__task[evtName];
      this.__task[evtName] = callbacks && callbacks.filter(_cb => _cb !== cb);
    }
    return this;
  }
}
