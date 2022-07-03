const carouselText = [
  {text: "\ Data Analyst", color: "white"},
  {text: "Frontend Developer", color: "red"},
  {text: "Oregon Duck", color: "yellow"},
  {text: "Orthopedic Researcher", color: "orange"},
]

async function typeSentence(sentence, eleRef, delay = 60) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    for(i = 0; i < carouselList.length; i++) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      if(i === carouselList.length - 1){ break }
      await deleteSentence(eleRef);
      await waitForMs(200);
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

/* Function used to shrink nav bar removing paddings and adding black background */
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
  } else {
      $('.nav').removeClass('affix');
  }
});

carousel(carouselText, "#feature-text");