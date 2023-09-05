function PrintAsyncName(callback, name) {
  const interval = setInterval(() => {
    callback();
    clearInterval(interval);
  }, 1000);

  setTimeout(() => {
    console.log(name);
  }, 2000);
}

function callback() {
  console.log("Hello");
}

PrintAsyncName(callback, "Nino");