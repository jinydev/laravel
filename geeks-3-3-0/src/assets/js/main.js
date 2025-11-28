//
// Main js
//

(function () {
  // Multi level menu dropdown
  const dropdownLinks = document.querySelectorAll(".dropdown-menu a.dropdown-toggle");
  dropdownLinks.forEach(function (dropdownLink) {
    dropdownLink.addEventListener("click", function (e) {
      if (!this.nextElementSibling.classList.contains("show")) {
        const parentDropdownMenu = this.closest(".dropdown-menu");
        const currentlyOpenSubMenus = parentDropdownMenu.querySelectorAll(".show");
        currentlyOpenSubMenus.forEach(function (openSubMenu) {
          openSubMenu.classList.remove("show");
        });
      }

      const subMenu = this.nextElementSibling;
      subMenu.classList.toggle("show");

      const parentDropdown = this.closest("li.nav-item.dropdown.show");
      if (parentDropdown) {
        parentDropdown.addEventListener("hidden.bs.dropdown", function (e) {
          const dropdownSubMenus = document.querySelectorAll(".dropdown-submenu .show");
          dropdownSubMenus.forEach(function (dropdownSubMenu) {
            dropdownSubMenu.classList.remove("show");
          });
        });
      }

      e.stopPropagation();
    });
  });

  // Default Tooltip
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Default Popover
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach(function (popoverTriggerEl) {
    new bootstrap.Popover(popoverTriggerEl);
  });

  // Radio button - payment method switch
  // Get references to the radio buttons and payment elements
  const cardRadioOne = document.querySelector("#cardRadioone");
  const cardRadioTwo = document.querySelector("#cardRadioTwo");
  const internetPayment = document.querySelector("#internetpayment");
  const cardPayment = document.querySelector("#cardpayment");

  // Check if both radio buttons exist
  if (cardRadioOne && cardRadioTwo) {
    internetPayment.style.display = "none";

    // Add event listener to the first radio button
    cardRadioOne.addEventListener("change", function () {
      if (this.checked) {
        cardPayment.style.display = "";
        internetPayment.style.display = "none";
      }
    });

    // Add event listener to the second radio button
    cardRadioTwo.addEventListener("change", function () {
      if (this.checked) {
        internetPayment.style.display = "";
        cardPayment.style.display = "none";
      }
    });
  }

  // Password field strength
  const passwordFields = document.querySelectorAll(".password-field input");
  passwordFields.forEach(function (passwordField) {
    passwordField.addEventListener("keyup", function () {
      var strength = checkPasswordStrength(this.value);
      var outputTarget = this.parentElement;

      outputTarget.classList.remove(...outputTarget.classList);
      outputTarget.classList.add("password-field", "level" + strength);
    });
  });

  function checkPasswordStrength(password) {
    var strength = 0;

    // If password is 6 characters or longer
    if (password.length >= 6) {
      strength += 1;
    }

    // If password contains both lower and uppercase characters, increase strength value.
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 1;
    }

    // If it has numbers and characters, increase strength value.
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      strength += 1;
    }

    return strength;
  }

  // Menu toggle for admin dashboard
  const navToggle = document.getElementById("nav-toggle");
  const dbWrapper = document.getElementById("db-wrapper");
  if (navToggle && dbWrapper) {
    navToggle.addEventListener("click", function (e) {
      e.preventDefault();
      dbWrapper.classList.toggle("toggled");
    });
  }

  // Print for invoice
  const invoice = document.getElementById("invoice");
  if (invoice) {
    const printLink = invoice.querySelector(".print-link");
    printLink.addEventListener("click", function () {
      window.print();
    });
  }

  // Sidenav fixed for docs
  const sidebarNavLinks = document.querySelectorAll(".sidebar-nav-fixed a");
  sidebarNavLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        var target = document.querySelector(this.hash);
        target = target ? target : document.querySelector("[name=" + this.hash.slice(1) + "]");
        if (target) {
          event.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 90,
            behavior: "smooth",
          });
          target.focus();
          if (target !== document.activeElement) {
            target.setAttribute("tabindex", "-1");
            target.focus();
          }
        }
      }
      sidebarNavLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  // Check all for checkbox
  const checkAll = document.querySelector("#checkAll");

  if (checkAll) {
    checkAll.addEventListener("click", function () {
      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(function (checkbox) {
        if (checkbox !== checkAll) {
          checkbox.checked = checkAll.checked;
        }
      });
    });
  }

  // Btn icon for active
  const btnIcons = document.querySelectorAll("#btn-icon .btn-icon");
  if (btnIcons) {
    btnIcons.forEach(function (btnIcon) {
      btnIcon.addEventListener("click", function () {
        btnIcon.parentElement.classList.add("active");
        const siblings = getSiblings(btnIcon.parentElement);
        siblings.forEach(function (sibling) {
          sibling.classList.remove("active");
        });
      });
    });
  }

  function getSiblings(elem) {
    const siblings = [];
    let sibling = elem.parentNode.firstChild;
    for (; sibling; sibling = sibling.nextSibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
    }
    return siblings;
  }

  // Stopevent for dropdown
  const stopEvents = document.querySelectorAll(".stopevent");
  stopEvents.forEach(function (stopEvent) {
    stopEvent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });

  // Input tags (Tagify)
  const tagsInput = document.querySelector("input[name=tags]");
  if (tagsInput) {
    new Tagify(tagsInput);
  }

  // Validation js
  const forms = document.querySelectorAll(".needs-validation");
  forms.forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });

  // Toast
  const toastElements = document.querySelectorAll(".toast");
  toastElements.forEach(function (toastEl) {
    new bootstrap.Toast(toastEl);
  });

  // Offcanvas
  const offcanvasElements = document.querySelectorAll(".offcanvas");
  offcanvasElements.forEach(function (offcanvasEl) {
    new bootstrap.Offcanvas(offcanvasEl);
  });

  // Dropdown toggle
  const dropdownToggleElements = document.querySelectorAll(".dropdown-toggle");
  dropdownToggleElements.forEach(function (dropdownToggleEl) {
    new bootstrap.Dropdown(dropdownToggleEl);
  });

  // Live Alert
  const liveAlertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const liveAlertBtn = document.getElementById("liveAlertBtn");
  if (liveAlertPlaceholder && liveAlertBtn) {
    liveAlertBtn.addEventListener("click", function () {
      alert("Nice, you triggered this alert message!", "success");
    });
  }

  function alert(message, type) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML =
      '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    liveAlertPlaceholder.appendChild(wrapper);
  }

  // Slider using noUiSlider
  const sliderElement = document.getElementById("slider");
  if (sliderElement) {
    noUiSlider.create(sliderElement, {
      start: [32],
      connect: [true, false],
      range: {
        min: 0,
        max: 60,
      },
      tooltips: [
        wNumb({
          decimals: 0,
        }),
      ],
    });
  }

  var progressWrap = document.querySelector(".btn-scroll-top");
  if (progressWrap != null) {
    var progressPath = document.querySelector(".btn-scroll-top path");
    var pathLength = progressPath.getTotalLength();
    var offset = 50;
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    window.addEventListener("scroll", function (event) {
      var scroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
      var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollElementPos >= offset) {
        progressWrap.classList.add("active-progress");
      } else {
        progressWrap.classList.remove("active-progress");
      }
    });
    progressWrap.addEventListener("click", function (e) {
      e.preventDefault();
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }
  // Price Range Slider
  var priceRangeSlider = document.getElementById("priceRange");

  if (priceRangeSlider) {
    noUiSlider.create(priceRangeSlider, {
      connect: true,
      behaviour: "tap",
      start: [0, 1500],
      step: 200,
      range: {
        min: [0],
        max: [1500],
      },
      format: wNumb({
        // decimals: 1,
        // thousand: ".",
        prefix: "$",
      }),
    });

    var priceRangeValueElement = document.getElementById("priceRange-value");

    priceRangeSlider.noUiSlider.on("update", function (values) {
      priceRangeValueElement.innerHTML = values.join(" - ");
    });
  }

  // Experienc Range Slider

  var expRangeSlider = document.getElementById("expRange");

  if (expRangeSlider) {
    noUiSlider.create(expRangeSlider, {
      connect: true,
      behaviour: "tap",
      start: [0, 15],
      step: 1,
      range: {
        min: 0,
        max: 15,
      },
      format: wNumb({}),
    });

    var expRangeValueElement = document.getElementById("expRange-value");

    expRangeSlider.noUiSlider.on("update", function (values) {
      expRangeValueElement.innerHTML = values.join(" - ");
    });
  }
})();
