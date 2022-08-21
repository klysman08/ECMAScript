const myPromise = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("ok response 1");
    }, 1000);
  });

const myPromise2 = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("ok response 2");
    }, 2000);
  });

const myPromise3 = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject("ok response 3");
    }, 2000);
  });

async function exec() {
  const response = await myPromise();
  console.log(response);
}

exec();

const exec2 = async () => {
  const response = await myPromise2();
  console.log(response);
};

exec2();

const exec3 = async () => {
  await myPromise();
  console.log("ok 1");

  await myPromise();
  console.log("ok 2");

  await myPromise();
  console.log("ok 3");
};

exec3();

const exec4 = async () => {
  try {
    await myPromise3();
    await myPromise3();
    console.log("Try 1 ok reponse");
  } catch (error) {
    console.log("Try 1 error");
  } finally {
    console.log("Try 1 finally");
  }
};

exec4();
