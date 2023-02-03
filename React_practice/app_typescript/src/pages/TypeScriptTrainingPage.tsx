import React from 'react';

interface IPerson<T> {
  name: string;
  age: number;
  size: T[];
}

const TypeScriptTrainingPage = () => {
  const obj: IPerson<string | number> = {
    name: 'Alex',
    age: 36,
    size: [45, 'XL', 34],
  };

  // ==============================================

  // type CallbackFn<K> = (len: number, value: K) => string;
  // type InfoFn<T> = (callback: CallbackFn<T>) => void;

  // const fn: CallbackFn<string | number> = (
  //   len: number = 10,
  //   value: string | number
  // ) => {
  //   return `[${new Array(len).fill(value).join(', ')}]`;
  // };

  // const printInfo: InfoFn<number> = (callback: CallbackFn<number>): void => {
  //   console.log(callback(5, 23));
  // };

  // printInfo(fn);

  // ===================================================
  const f1 = new Promise((res, rej) =>
    setTimeout(() => {
      const someCompute = Math.floor(Math.random() * 10);
      someCompute < 5 ? res('1!') : rej(new Error('Error in Promise 1!'));
    }, 100)
  );
  const f2 = new Promise((res, rej) => res('2!'));
  const f3 = new Promise((res, rej) => res('3!'));

  function wairForResult(promises: Promise<unknown>[]) {
    const result: any[] = [];
    let count = 0;

    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then((res) => {
            count++;
            result[i] = res;
            if (count === promises.length) {
              resolve(result);
            }
          })
          .catch((err) => reject(err));
      }
    });
  }
  wairForResult([f1, f2, f3]).then((res) => console.log(res));

  // ===================================================

  return <div>TypeScriptTrainingPage</div>;
};

export default TypeScriptTrainingPage;
