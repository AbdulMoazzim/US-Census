let pages = ['census2021.html','census2020.html','census2019.html','census2018.html','census2017.html','census2016.html','census2015.html','census2014.html','census2013.html']
let url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
let api = fetch(url)
api.then((v)=>{
    return v.json()
}).then((a)=>{
    console.log(a)
    let data = a['data']
    let html = ''
    for(let i=0; i<data.length; i++) {
        html += `<div class="card" style="width: 20rem; margin-top: 15px;">
        <img src="1.png" class="card-img-top" alt="census-image">
        <div class="card-body">
          <h5 class="card-title">US Census ${data[i].Year}</h5>
          <p class="card-text">For More Info, Click Below!</p>
          <a href="info pages/${pages[i]}" class="btn btn-primary">Click Me</a>
        </div>
      </div>`
    }
    document.querySelector('.cards').innerHTML = html
})