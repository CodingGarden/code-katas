const elementFormatter = (tag, parents = []) => function elementFunc(...texts) {
  let result = `<${tag}>${texts.join('')}</${tag}>`;
  parents.reverse().forEach((parent) => {
    result = `<${parent}>${result}</${parent}>`;
  });
  return result;
};

function CreateFormatter(parents = []) {
  const Format = {
    tags: ['div', 'h1', 'p', 'span'],
  };

  Format.tags.forEach((tag) => {
    const formatter = elementFormatter(tag, parents);
    formatter.toString = formatter;
    formatter.valueOf = formatter;
    Format[tag] = formatter;
    Format.tags.forEach((otherTag) => {
      Object.defineProperty(formatter, otherTag, {
        get() {
          const nestedFormatter = CreateFormatter([...parents, tag]);
          return nestedFormatter[otherTag];
        },
      });
    });
  });

  return Format;
}

const Format = CreateFormatter();

module.exports = Format;
