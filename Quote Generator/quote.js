async function fetchQuote() {
    try {
        const response = await fetch("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en");
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        console.log(data); // Add this line to check the API response
        document.getElementById('quote').innerText = data.quoteText;
        document.getElementById('author').innerText = data.quoteAuthor;
    } catch (error) {
        console.error("Error fetching quote: ", error);
    }
}

document.querySelector('.quote-btn').addEventListener('click', fetchQuote);

// const btn = document.querySelector(".quote-btn");
// const quote = document.querySelector('#quote');
// const author = document.querySelector('#author');

// const quotes = [
//     { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
//     { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
//     { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
//     { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
//     { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
//     { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
//     { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
//     { quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
//     { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
//     { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
//     { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
//     { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
//     { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
//     { quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
//     { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" }
//   ];

// btn.addEventListener('click',function(){

//     const random = Math.floor(Math.random() * quotes.length);
//     console.log(random);

//     quote.innerText = quotes[random].quote;
//     author.innerText = quotes[random].author;

// });
