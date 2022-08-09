function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
const subscribePhoneNumberEl = document.querySelector("#phonenumber");
  
const invalidTextEl = document.querySelector(".invalid-text");
  
const successPage = document.querySelector(".sub");
  
const subscriptionForm = document.querySelector(".subscribe");
  
const successBtn = document.querySelector(".success-btn");

const forms = document.querySelectorAll(".form");
  
const telecomBtns = document.querySelectorAll(".tele");
  
const nav = document.querySelector("nav");
  
const mobileToggle = document.querySelector(".mobile-nav");

const matchPage = document.querySelector(".mat");
  
const matchBtn = document.querySelector(".match-btn");
 
 
 //mobile navigation segment 
mobileToggle.addEventListener("click", (e) => {
  e.preventDefault();
  let visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    mobileToggle.setAttribute("aria-expanded", "true");
    nav.setAttribute("data-visible", "true");
  } else {
    mobileToggle.setAttribute("aria-expanded", "false");
    nav.setAttribute("data-visible", "false");
  }
});

// challengeOne telecom identifier//
//display telecom carrier img when a user type there phone number

//PSEUDOCODE//
//Get the phonenumber input tag
//listen for an input event
//if the phone number matches the regex pattern for the different telecom 
//display the telecom carrier image
//get the invalid text tag
//else display invalid phonenumber
  function removeActive() {
    telecomBtns.forEach((btn)=>{
      btn.classList.remove("active");
    })
  }

  function showForm(teleCarr) {
     forms.forEach((form) => {
      if (form.classList.contains(teleCarr)) {
        form.classList.remove("display");
      }else if (!form.classList.contains(teleCarr)) {
        form.classList.add("display");
      }
       })
  }
  
function dispalyForm(teleCarrier) {
  if (teleCarrier.classList.contains("mtn-btn")) {
   removeActive()
     teleCarrier.classList.add("active");
    let teleCarr = "mtn-form"
        showForm(teleCarr)
    
  } else if (teleCarrier.classList.contains("glo-btn")) {
    removeActive()
    teleCarrier.classList.add("active");
      let teleCarr = "glo-form"
        showForm(teleCarr)
  
  } else if (teleCarrier.classList.contains("airtel-btn")) {
   removeActive()
      teleCarrier.classList.add("active");
      let teleCarr = "airtel-form"
   
    showForm(teleCarr)
  
  } else if (teleCarrier.classList.contains("eti-btn")) {
    removeActive()
 teleCarrier.classList.add("active");
      let teleCarr = "eti-form"
    showForm(teleCarr)
   
  }
}
     const network = document.querySelector(".network");
function showMatchPg(carrier) {
    matchPage.classList.remove("display");
    network.textContent = `100% ${carrier} match`;
}
function submitVerifiedPh(form) {
  if (form.telphonenumber && form.classList.contains("mtn-form")) {
    let carrier = "MTN";
    showMatchPg(carrier)
    form.reset();
  } else if (form.telphonenumber &&  form.classList.contains("glo-form")) {
    let carrier = "GLO";
    showMatchPg(carrier)
    form.reset();
  } else if (form.telphonenumber && form.classList.contains("airtel-form")) {
    let carrier = "AIRTEL";
    showMatchPg(carrier)
    form.reset();
  } else if (form.telphonenumber && form.classList.contains("eti-form")) {
    let carrier = "9MOBILE";
     showMatchPg(carrier)
    form.reset();
  }
}

telecomBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let teleCarrier = e.target;
    dispalyForm(teleCarrier);
  });
});

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitVerifiedPh(form);
  });
});


matchBtn.addEventListener("click", (e) => {
  e.preventDefault(); matchBtn.parentElement.parentElement.classList.add("display");
});

//check if input phonenumber matches the set pattern to enable telecom image

  function showImg(subscribePhoneNumberEl,network) {
    subscribePhoneNumberEl.classList.add(network);
    subscribePhoneNumberEl.classList.remove("invalid");
    invalidTextEl.textContent = "";
    invalidTextEl.style.color = "";
  }
  
subscribePhoneNumberEl.addEventListener("input", (e) => {
  e.preventDefault();
  let phoneNumber = e.target.value;
  let mtnPattern =
    /^(\+234|234|0)(803|806|814|810|813|814|816|703|706|903|906)([0-9]{7})$/;

  let airtelPattern =
    /^(\+234|234|0)(802|808|812|708|701|902|901|907|912)([0-9]{7})$/;

  let etiPattern = /^(\+234|234|0)(809|817|818|908|909)([0-9]{7})$/;

  let gloPattern = /^(\+234|234|0)(805|807|811|815|705|905)([0-9]{7})$/;

  let mtnResult = phoneNumber.match(mtnPattern);
  let gloResult = phoneNumber.match(gloPattern);
  let airtelResult = phoneNumber.match(airtelPattern);
  let etiResult = phoneNumber.match(etiPattern);

  if (mtnResult) {
  let network="mtn"

    showImg(subscribePhoneNumberEl,network)
  } else if (gloResult) {
      let network="glo"
  
    showImg(subscribePhoneNumberEl,network)
  } else if (airtelResult) {
      let network="airtel"

    showImg(subscribePhoneNumberEl,network)
  } else if (etiResult) {
      let network="eti"
   
    showImg(subscribePhoneNumberEl,network)
  } else {
    subscribePhoneNumberEl.classList.add("invalid");
    subscribePhoneNumberEl.classList.remove("eti");
    subscribePhoneNumberEl.classList.remove("airtel");
    subscribePhoneNumberEl.classList.remove("glo");
    subscribePhoneNumberEl.classList.remove("mtn");
    invalidTextEl.textContent = "invalid number";
    invalidTextEl.style.color = "red";
  }
});


//function to handle subscription form
subscriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  subscriptionForm.reset();
  subscribePhoneNumberEl.setAttribute("class","margin-btn")
  successPage.classList.remove("display");
});


//remove success page after a successful match of phonenumber
successBtn.addEventListener("click", (e) => {
  e.preventDefault(); successBtn.parentElement.parentElement.classList.add("display");
});

    // console.log('make magic in here!');
  
    // const header = document.querySelector('h2');
    // if(header) {
    //   header.textContent = 'make some magic here!!';
    // }
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //
