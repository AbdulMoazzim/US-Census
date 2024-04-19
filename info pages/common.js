let html = `<nav class="navbar navbar-expand-lg navbar-light bg-light" style="width:100%;">
<a class="navbar-brand" href="#">US Census!</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="../index.html">Home <span class="sr-only">(current)</span></a>
    </li>
  </ul>
</div>
</nav>`

document.querySelector('.nav').innerHTML = html;
let url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
let api =  fetch(url)
api.then((response)=>{
  return response.json()
}).then(async(response)=>{
    console.log(response)
    let data = response['data']
    for (let i=0 ; i<data.length; i++) {
      let yearElement = document.getElementById('Year'+i);
      let populationElement = document.getElementById('Population'+i);
      let nationElement = document.getElementById('Nation'+i);

      if (yearElement && populationElement && nationElement) {
        yearElement.innerHTML = `ID-Year: ${data[i]['Year']}`;
        populationElement.innerHTML = `Population: ${data[i]['Population']}`;
        nationElement.innerHTML = `ID-Nation: ${data[i]['ID Nation']}`;
      }
    }
  })
