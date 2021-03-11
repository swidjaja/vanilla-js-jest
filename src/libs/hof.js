const hof = (func) => {
  
  return (...args) => {
    const context = this;

    return func.apply(context, args);
  };
};

export default hof;
