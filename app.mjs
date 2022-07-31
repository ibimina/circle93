function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!

const nav = document.querySelector("nav");
const mobileToggle = document.querySelector(".mobile-nav");

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

const forms = document.querySelectorAll(".form");
const telecomBtns = document.querySelectorAll(".tele");


telecomBtns[0].classList.add("active");


forms.forEach((form) => {
  form.classList.add("display");
});

forms[0].classList.remove("display");
function dispalyForm(teleCarrier) {
  if (teleCarrier.classList.contains("mtn-btn")) {
    forms.forEach((form) => {
      if (form.classList.contains("mtn-form")) {
        form.classList.remove("display");
      }
      if (!form.classList.contains("mtn-form")) {
        form.classList.add("display");
      }
    });
  } else if (teleCarrier.classList.contains("glo-btn")) {
    telecomBtns[0].classList.remove("active");
    forms.forEach((form) => {
      if (form.classList.contains("glo-form")) {
        form.classList.remove("display");
      }
      if (!form.classList.contains("glo-form")) {
        form.classList.add("display");
      }
    });
  } else if (teleCarrier.classList.contains("airtel-btn")) {
    telecomBtns[0].classList.remove("active");
    forms.forEach((form) => {
      if (form.classList.contains("airtel-form")) {
        form.classList.remove("display");
      }
      if (!form.classList.contains("airtel-form")) {
        form.classList.add("display");
      }
    });
  } else if (teleCarrier.classList.contains("eti-btn")) {
    // teleCarrier.classList.add("active");
    telecomBtns[0].classList.remove("active");

    forms.forEach((form) => {
      if (form.classList.contains("eti-form")) {
        form.classList.remove("display");
      }
      if (!form.classList.contains("eti-form")) {
        form.classList.add("display");
      }
    });
  }
}

function submitVerifiedPh(form) {
  if (form.telphonenumber && form.classList.contains("mtn-form")) {
    let carrier = "MTN";
  
    matchPage.classList.remove("display");
    const network = document.querySelector(".network");
    network.textContent = `100% ${carrier} match`;

    form.reset();
  } else if (form.telphonenumber && form.classList.contains("glo-form")) {
    let carrier = "GLO";
 
    matchPage.classList.remove("display");
    const network = document.querySelector(".network");
    network.textContent = `100% ${carrier} match`;

    form.reset();
  } else if (form.telphonenumber && form.classList.contains("airtel-form")) {
    let carrier = "AIRTEL";
  
    matchPage.classList.remove("display");
    const network = document.querySelector(".network");
    network.textContent = `100% ${carrier} match`;

    form.reset();
  } else if (form.telphonenumber && form.classList.contains("eti-form")) {
    let carrier = "9MOBILE";

    matchPage.classList.remove("display");
    const network = document.querySelector(".network");
    network.textContent = `100% ${carrier} match`;

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

const matchPage = document.querySelector(".mat");
const matchBtn = document.querySelector(".match-btn");

matchPage.classList.add("display");

matchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  matchBtn.parentElement.parentElement.classList.add("display");
});

const subscribePhoneNumberEl = document.querySelector("#phonenumber");
const invalidTextEl = document.querySelector(".invalid-text");
const successPage = document.querySelector(".sub");
const subscriptionForm = document.querySelector(".subscribe");
const successBtn = document.querySelector(".success-btn");

successPage.classList.add("display");

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
    console.log("mtn");
    subscribePhoneNumberEl.classList.add("mtn");
    subscribePhoneNumberEl.classList.remove("invalid");
    invalidTextEl.textContent = "";
    invalidTextEl.style.color = "";
  } else if (gloResult) {
    subscribePhoneNumberEl.classList.add("glo");
    subscribePhoneNumberEl.classList.remove("invalid");
    invalidTextEl.textContent = "";
    invalidTextEl.style.color = "";
  } else if (airtelResult) {
    subscribePhoneNumberEl.classList.add("airtel");
    subscribePhoneNumberEl.classList.remove("invalid");
    invalidTextEl.textContent = "";
    invalidTextEl.style.color = "";
  } else if (etiResult) {
    subscribePhoneNumberEl.classList.add("eti");
    subscribePhoneNumberEl.classList.remove("invalid");
    invalidTextEl.textContent = "";
    invalidTextEl.style.color = "";
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



subscriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();


  subscriptionForm.reset();
  subscribePhoneNumberEl.setAttribute("class","margin-btn")
  successPage.classList.remove("display");
});



successBtn.addEventListener("click", (e) => {
  e.preventDefault();

  successBtn.parentElement.parentElement.classList.add("display");
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
