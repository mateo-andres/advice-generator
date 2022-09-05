async function generateAdvice(){
  const response = await fetch('https://api.adviceslip.com/advice')
  let data = await response.json()
  let advice = data.slip.advice
  let adviceId = data.slip.id
  console.log(advice, adviceId);
  const adviceTextP  = document.getElementById('adviceText')
  const adviceNumberh5  = document.getElementById('adviceNumber')

  adviceTextP.innerText = `"${advice}"`
  adviceNumberh5.innerText = `Advice #${adviceId}`
}

generateAdvice()
