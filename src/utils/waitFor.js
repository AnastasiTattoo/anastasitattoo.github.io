export const waitFor = (waitFn, timeBetweenTries) => {
  return new Promise((resolve) => {
    const wait = () => {
      if (waitFn()) {
        resolve();
        return;
      }

      setTimeout(wait, timeBetweenTries);
    }

    wait();
  });
};

export default waitFor;
