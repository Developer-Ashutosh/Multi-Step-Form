// Sidebar Variables
const stepNumberOne = document.querySelector(".step-number.one");
const stepNumberTwo = document.querySelector(".step-number.two");
const stepNumberThree = document.querySelector(".step-number.three");
const stepNumberFour = document.querySelector(".step-number.four");

// Step Variables
const stepOne = document.querySelector(".step-one");
const stepTwo = document.querySelector(".step-two");
const stepThree = document.querySelector(".step-three");
const stepFour = document.querySelector(".step-four");
const thankSection = document.querySelector(".thank-section");

// Step One Variables
const clientName = document.querySelector("#name");
const clientNumber = document.querySelector("#number");
const clientInfo = document.querySelectorAll(".step-one .detail");
const firstNextBtn = document.querySelector(".step-one .next-btn");
let next = false;

// Step Two Variables
const plans = document.querySelectorAll(".step-two .detail");
const switchBtn = document.querySelector(".switch-btn");
const switchDot = switchBtn.querySelector("span");
const secondNextBtn = document.querySelector(".step-two .next-btn");
const secondBackBtn = document.querySelector(".step-two .back-btn");
let isSelected = false;

// Step Three Variables
const addOns = document.querySelectorAll(".step-three .detail");
const thirdNextBtn = document.querySelector(".step-three .next-btn");
const thirdBackBtn = document.querySelector(".step-three .back-btn");

// Step Four Variables
const planName = document.querySelector(".step-four .selected-plan .name");
const planValue = document.querySelector(".step-four .selected-plan .value");
const change = document.querySelector(".step-four .reselect");
const planAddOnSection = document.querySelector(".step-four .selected-add-ons");
const totalAmount = document.querySelector(".step-four .total .total-value");
const confirmBtn = document.querySelector(".step-four .confirm-btn");
const fourthBackBtn = document.querySelector(".step-four .back-btn");

// Function to validate user input in Step One
const validateInfo = () => {
  clientInfo.forEach((detail) => {
    firstNextBtn.addEventListener("click", () => {
      const input = detail.querySelector("input");
      const span = detail.querySelector("span");

      if (input.value === "") {
        span.innerText = "This field is required";
        input.style.border = "1px solid var(--Strawberryed)";
        next = false;
      } else if (!/^[A-Za-z\s]+$/.test(clientName.value)) {
        document.querySelector("#name-error").innerText = "Not a Valid Name";
        clientName.style.border = "1px solid var(--Strawberryed)";
        next = false;
      } else if (isNaN(clientNumber.value)) {
        document.querySelector("#number-error").innerText =
          "Not a Valid Number";
        clientNumber.style.border = "1px solid var(--Strawberryed)";
        next = false;
      } else {
        span.innerText = "";
        input.style.border = "1px solid var(--Pastel-blue)";
        next = true;
      }
    });
  });
};

// Function to handle user selections in Step Two and Three
const selectPlansAddOns = () => {
  plans.forEach((plan) => {
    plan.addEventListener("click", () => {
      plans.forEach((plan) => {
        plan.classList.remove("selected");
      });
      plan.classList.add("selected");
      isSelected = true;
      updateFinalDetails();
    });
  });
  addOns.forEach((addOn) => {
    addOn.querySelector("label").addEventListener("click", () => {
      addOn.classList.toggle("selected");
      updateFinalDetails();
    });
  });
};

// Function to handle subscription switching in Step Two
const switchSubscription = () => {
  switchBtn.addEventListener("click", () => {
    const timeSpan = document.querySelectorAll(".switch-section .time-span");
    const planSubscription = document.querySelector(".step-four .cart");

    switchDot.classList.toggle("switch");
    timeSpan.forEach((time) => {
      time.classList.toggle("active");
    });
    if (switchDot.classList.contains("switch")) {
      plans.forEach((plan) => {
        document.querySelectorAll(".subscription").forEach((e) => {
          e.innerText = "0/yr";
        });
        plan.querySelector(".free").innerText = "2 months free";
      });
      planSubscription.querySelector(".selected-plan .time span").innerText =
        "Yearly";
      planSubscription.querySelector(".total .left span").innerText =
        "per year";
    } else {
      plans.forEach((plan) => {
        document.querySelectorAll(".subscription").forEach((e) => {
          e.innerText = "/mo";
        });
        plan.querySelector(".free").innerText = "";
      });
      planSubscription.querySelector(".selected-plan .time span").innerText =
        "Monthly";
      planSubscription.querySelector(".total .left span").innerText =
        "per month";
    }
  });
};

// Function to update final details in Step Four
const updateFinalDetails = () => {
  const selectedPlan = document.querySelector(".step-two .detail.selected");
  planName.innerText = selectedPlan.querySelector(".info h3").innerText;
  planValue.innerText = selectedPlan.querySelector(".info .cost").innerText;

  const selectedAddOns = document.querySelectorAll(
    ".step-three .detail.selected"
  );
  let addOnsValue = 0;
  let addOnHTML = "";
  selectedAddOns.forEach((addOn) => {
    addOnHTML += `
                <div class="add-on">
                    <div class="name">${
                      addOn.querySelector("label h3").innerText
                    }</div>
                    <div class="price">
                        +$<span class="value">${
                          addOn.querySelector(".add-on-price").innerText
                        }</span><span class="subscription">/mo</span>
                    </div>
                </div>
            `;
  });
  planAddOnSection.innerHTML = addOnHTML;

  if (switchDot.classList.contains("switch")) {
    planAddOnSection.querySelectorAll(".subscription").forEach((e) => {
      e.innerText = "0/yr";
    });
  } else {
    planAddOnSection.querySelectorAll(".subscription").forEach((e) => {
      e.innerText = "/mo";
    });
  }

  planAddOnSection.querySelectorAll(".add-on").forEach((e) => {
    addOnsValue += parseInt(e.querySelector(".value").innerText);
  });
  totalAmount.innerText =
    parseInt(selectedPlan.querySelector(".info .cost").innerText) +
    parseInt(addOnsValue);
};

// Function to change steps in the form
const changeStep = () => {
  firstNextBtn.addEventListener("click", () => {
    if (next) {
      stepOne.style.transform = "translateY(-100%)";
      stepTwo.style.transform = "translateY(-100%)";
      stepNumberOne.classList.toggle("active");
      stepNumberTwo.classList.toggle("active");
    }
  });
  secondBackBtn.addEventListener("click", () => {
    stepOne.style.transform = "translateY(0%)";
    stepTwo.style.transform = "translateY(0%)";
    stepNumberOne.classList.toggle("active");
    stepNumberTwo.classList.toggle("active");
  });
  secondNextBtn.addEventListener("click", () => {
    if (isSelected) {
      stepTwo.style.transform = "translateY(-200%)";
      stepThree.style.transform = "translateY(-200%)";
      stepNumberTwo.classList.toggle("active");
      stepNumberThree.classList.toggle("active");
    }
  });
  thirdBackBtn.addEventListener("click", () => {
    stepTwo.style.transform = "translateY(-100%)";
    stepThree.style.transform = "translateY(-100%)";
    stepNumberTwo.classList.toggle("active");
    stepNumberThree.classList.toggle("active");
  });
  thirdNextBtn.addEventListener("click", () => {
    stepThree.style.transform = "translateY(-300%)";
    stepFour.style.transform = "translateY(-300%)";
    stepNumberThree.classList.toggle("active");
    stepNumberFour.classList.toggle("active");
  });
  fourthBackBtn.addEventListener("click", () => {
    stepThree.style.transform = "translateY(-200%)";
    stepFour.style.transform = "translateY(-200%)";
    stepNumberThree.classList.toggle("active");
    stepNumberFour.classList.toggle("active");
  });
  confirmBtn.addEventListener("click", () => {
    stepFour.style.transform = "translateY(-400%)";
    thankSection.style.transform = "translateY(-400%)";
  });

  change.addEventListener("click", () => {
    stepTwo.style.transform = "translateY(-100%)";
    stepThree.style.transform = "translateY(-100%)";
    stepFour.style.transform = "translateY(-200%)";
    stepNumberTwo.classList.toggle("active");
    stepNumberFour.classList.toggle("active");
  });
};

// Initialize the form functionality
validateInfo();
selectPlansAddOns();
switchSubscription();
changeStep();
