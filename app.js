const https = require('https');

// Async function to scrape the data
async function scrapeData() {
    let today = new Date;
    today = today.toISOString();
    let year = new Date().getFullYear();
    let future = new Date(year, 8, 15);
    future = future.toISOString();
    try {
        const url = "https://www.recreation.gov/api/permits/234623/divisions/377/availability?start_date=" + today + "&end_date=" + future + "&commercial_acct=false&is_lottery=false";
        console.log(url);
        // Fetch the data
        https.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            })

            response.on('end', () => {
                console.log(JSON.parse(data));
            })
        }).on('error', (err) => {
            console.log("error: " + err.message);
        })
    }
    catch (err) {
        console.error(err);
    }
}
scrapeData();

// const markup = `
//     <ul class="fruits">
//     <li class="fruits__mango"> Mango </li>
//     <li class="fruits__apple"> Apple </li>
//     </ul>
// `;

// const $ = cheerio.load(markup);
// const mango = $(".fruits__mango");
// const listItems = $("li");
// console.log(listItems.length);
// console.log(mango.html());