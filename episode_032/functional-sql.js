function groupBy(executeData, groupByFns) {
  if (!groupByFns.length) {
    return executeData;
  }
  const groupByFn = groupByFns.shift();
  const groupTypes = {};
  const grouped = executeData.reduce((grouped, item) => {
    const key = groupByFn(item);
    groupTypes[key] = typeof key;
    grouped[key] = grouped[key] || [];
    grouped[key].push(item);
    return grouped;
  }, {});
  return Object.entries(grouped).map(([groupName, values]) => {
    if (groupTypes[groupName] === 'number') {
      groupName = Number(groupName);
    }
    return [ groupName, groupBy(values, groupByFns.slice()) ];
  });
}

class Query {
  constructor() {
    this.data = [];
    this.havingFns = [];
    this.called = {};
  }
  select(fn) {
    if (this.called.SELECT) {
      throw new Error('Duplicate SELECT');
    }
    this.selectFn = fn;
    this.called.SELECT = true;
    return this;
  }
  from(data, joinData) {
    if (this.called.FROM) {
      throw new Error('Duplicate FROM');
    }
    this.data = data;
    if (joinData) {
      const joined = [];
      for (let i = 0; i < data.length; i++) {
        const col = data[i];
        for (let j = 0; j < joinData.length; j++) {
          const joinCol = joinData[j];
          joined.push([col, joinCol]);
        }
      }
      this.data = joined;
    }
    this.called.FROM = true;
    return this;
  }
  where(...fns) {
    if (!this.whereFns) {
      this.whereFns = fns;
    } else if (!this.andWhereFns) {
      this.andWhereFns = fns;
    } else {
      this.andWhereFns = this.andWhereFns.concat(fns);
    }
    return this;
  }
  groupBy(...fns) {
    if (this.called.GROUPBY) {
      throw new Error('Duplicate GROUPBY');
    }
    this.groupByFns = fns;
    this.called.GROUPBY = true;
    return this;
  }
  orderBy(fn) {
    if (this.called.ORDERBY) {
      throw new Error('Duplicate ORDERBY');
    }
    this.orderByFn = fn;
    this.called.ORDERBY = true;
    return this;
  }
  having(fn) {
    this.havingFns.push(fn);
    return this;
  }
  execute() {
    let executeData = this.data.slice();
    if (this.whereFns && this.whereFns.length) {
      executeData = executeData.filter(row => {
        return this.whereFns.some(fn => fn(row));
      });
    }
    if (this.andWhereFns && this.andWhereFns.length) {
      executeData = executeData.filter(row => {
        return this.andWhereFns.every(fn => fn(row));
      });
    }
    if (this.groupByFns && this.groupByFns.length) {
      executeData = groupBy(executeData, this.groupByFns.slice());
    }
    if (this.havingFns && this.havingFns.length) {
      executeData = executeData.filter(row => {
        return this.havingFns.every(fn => fn(row));
      });
    }
    if (typeof this.selectFn === 'function') {
      executeData = executeData.map(this.selectFn);
    }
    if (typeof this.orderByFn === 'function') {
      executeData = executeData.sort(this.orderByFn);
    }
    return executeData;
  }
}

module.exports = function query() {
  return new Query();
};
