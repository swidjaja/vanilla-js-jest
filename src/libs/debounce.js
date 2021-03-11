const debounce = (func, wait, isLeading) => {
  let timeout;

  return (...args) => {
    const context = this;
    const later = () => {
      timeout = null;
      // Don't call again if is leading
      if (!isLeading) func.apply(context, args);
    };

    const doCall = isLeading && !timeout;
  
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    // Call func if is leading and it hasn't started yet
    if (doCall) func.apply(context, args);
  };
};

export default debounce;
