fetch("https://api.chucknorris.io/jokes/random")
.then((response) => {
    console.log("API is:", response.json());
})
.catch();


fetch("https://api.chucknorris.io/jokes/random")
.then((response) => {
    return response.json();
})
.then((data) => {
    // console.log("Data is: ", data);
    var jokes = data.value;
    console.log("Joke: ", jokes);
})
.catch();


// try {

// } catch (error) {

// }

// https://api.chucknorris.io/