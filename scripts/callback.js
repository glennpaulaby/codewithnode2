const greet = (username) => {
    console.log(`hello, ${username}`);

};
greet ("glenn");

const preprocess = (callback) => {
    callback()
};
preprocess(() => { console.log("Hello");});