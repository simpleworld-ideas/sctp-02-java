// the DOMContentLoaded event happens on the document object
// it triggers (i.e fires ) when all the DOM elements have been created
// i.e wait for the webpage to be ready
document.addEventListener("DOMContentLoaded", async function(){
    const response = await axios.get("data.json");
    const data = response.data;
    console.log(data);
    document.querySelector("#output").innerHTML=`
    <h1>${data.Employee}</h1>
    <p>Nmae: ${data.employees[0].name}</p>
    <p>Credit Limit: ${data.valuation.credit_limt}</p>
    `
})