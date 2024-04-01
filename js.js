(function (baseNumber) {
    return baseNumber + 3;
  })(2); //=> ???

  function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
  }