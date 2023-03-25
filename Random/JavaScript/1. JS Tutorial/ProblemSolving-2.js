const sentence = "Lorem ipsum, dolor sit amet Ayatullah consectetur adipisicing elit. Obcaecati soluta temporibus maxime voluptas, dignissimos Ayatullah voluptatibus? Nesciunt culpa sequi architecto Ayatullah  qui commodi. Fuga ullam suscipit est dicta voluptatem, ipsum odio ipsam."


const matches = sentence.match(/Ayatullah/gi);
const occurances = matches.length;
console.log(occurances);