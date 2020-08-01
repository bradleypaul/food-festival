require("bootstrap");
const img1 = require("../../assets/img/food-table.jpg");
const img2 = require("../../assets/img/grill.jpg");

$(document).ready(function () {
  if (window.location.href.indexOf("event") > -1) {
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
      title: "Title Placeholder",
      subtitle: "",
      description: ""
    };

    const pageEl = document.querySelector("#page");

    const containerEl = createEl("div", { class: "container" },
      createEl("div", { class: "card mb-3" },
        createEl("img", { class: "card-img-top", style: "width: 5px", src: currentEvent.image || "https://via.placeholder.com/350x150" }),
        createEl("div", { class: "card-body" },
          createEl("h1", { class: "card-title" }, currentEvent.title || ""),
          createEl("h2", { class: "text-muted" }, currentEvent.subtitle || ""),
          createEl("p", { class: "card-text mt-3" }, currentEvent.description || createLoremIpsum(100)),
          createEl("a", { class: "btn btn-primary", href: "tickets.html" }, "Buy Tickets")
        )
      ),

    )
    pageEl.appendChild(containerEl)
  }



  if (window.location.href.indexOf("tickets") > -1) {

    const purchaseBtn = document.getElementById("purchaseBtn");
    const purchaseEmail = document.getElementById("purchaseEmail");
    const modalEl = document.querySelector(".modal-content");
    const modalBodyEl = document.querySelector(".modal-body");
    const modalFooterEl = document.querySelector(".modal-footer");


    function purchaseTicket() {

      modalEl.removeChild(modalBodyEl)
      modalEl.removeChild(modalFooterEl)

      modalEl.append(createEl("div", { class: "modal-body" },
        createEl("h5", { class: "modal-title" },
          `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`
        ),
      ))

    }
    purchaseBtn.addEventListener("click", purchaseTicket);
  }
  // First image is hard coded in index.html
  const carouselSlides = [
    {
      title: "We travel all over the US",
      subtitle: "Check out our schedule!",
      img: img1,
      btnText: "View Schedule",
      btnUrl: "schedule.html"
    },
    {
      title: "Our food is seriously the bomb!",
      subtitle: "What are you waiting for?",
      img: img2,
      btnText: "Purchase Tickets",
      btnUrl: "tickets.html"
    },
  ]

  carouselSlides.forEach((slide, i) => {
    $('.carousel-inner').append(`
  <div class="carousel-item fullscreen-carousel" style="background-image: url('${slide.img}')">
    <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
        <div class="container">
          <div class="row align-items-center justify-content-center">
              <h2 class="display-4 mb-2">${slide.title}</h2>
          </div>
          <div class="row align-items-center justify-content-center"> 
            <h3>${slide.subtitle}</h3>
          </div>
          <div class=" mt-4 row align-items-center justify-content-center"> 
            <a class="btn btn-primary" href="${slide.btnUrl}">
                ${slide.btnText}
            </a>
          </div>
        </div>
    </div>
  </div>`)
  })
});