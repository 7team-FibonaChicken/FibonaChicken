var fibo = function (n) {
  return n == 0 ? 0 : n == 1 ? 1 : fibo(n - 1) + fibo(n - 2);
};

var cachify = function (f, cache) {
  return function (n) {
    if (!cache[n]) {
      cache[n] = f(n);
    }
    return cache[n];
  };
};

var cache = {};
fibo = cachify(fibo, cache);

var zeckendorf = function (n) {
  var i = 1;
  if (n == undefined || n == '') {
    return 0;
  }
  if (n < 0) {
    return 1;
  }
  while (1) {
    var result = fibo(i + 1);

    if (result === n) {
      return fibo(i);
    } else if (result > n) {
      return fibo(i - 1) + zeckendorf(n - fibo(i));
    }
    i++;
  }
};

var cachify2 = function (f, cache) {
  return function (n) {
    if (!cache[n]) {
      cache[n] = f(n);
    }
    return cache[n];
  };
};

var cache2 = {};
zeckendorf = cachify2(zeckendorf, cache2);

window.onload = function () {
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    const inputNum = document.querySelector('.num-in').value;
    const resultNum = document.querySelector('.non-br');
    resultNum.innerText = zeckendorf(inputNum) + ' 마리를 시키세요!';
  });
};

