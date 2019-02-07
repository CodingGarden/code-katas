const MAX_PRIOR_SPELLS = 13;

class Wand {
  constructor(spells = {}) {
    this.casted = [];
    Object.assign(this, spells);

    return new Proxy(this, {
      get: (target, property) => {        
        const value = target[property];
        if (typeof value === 'function') {
          target.casted.unshift(property);
        }
        return value;
      }
    });
  }

  prioriIncantatem() {
    return this.casted.slice(1, MAX_PRIOR_SPELLS + 1);
  }

  deletrius() {
    this.casted = ['deletrius'];
  }
}

const w = new Wand({
  expelliarmus: function () {},
  alohomora: function () {},
  avadaKedavra: function () {}
});

w.alohomora();
w.expelliarmus();
w.avadaKedavra();

console.log(w.prioriIncantatem(), ['avadaKedavra', 'expelliarmus', 'alohomora']);