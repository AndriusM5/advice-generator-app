const api_url = "https://api.adviceslip.com/advice";
const advice_id = document.getElementById("adviceId");
const advice = document.getElementById("advice");

function getData() {
  fetch(api_url).then(function (response) {
    response.json().then(function (data) {
      advice_id.innerText = data.slip.id;
      advice.innerText = data.slip.advice;
      //   console.log(data.slip.advice);
    });
  });
}

getData();