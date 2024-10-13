/* SLIDE UP */
let slideUp = (target, duration = 300) => {
  target.style.transitionProperty = 'height, margin, padding'
  target.style.transitionDuration = duration + 'ms'
  target.style.boxSizing = 'border-box'
  target.style.height = target.offsetHeight + 'px'
  target.offsetHeight
  target.style.overflow = 'hidden'
  target.style.height = 0
  target.style.paddingTop = 0
  target.style.paddingBottom = 0
  target.style.marginTop = 0
  target.style.marginBottom = 0
  target.style.border = 'none'

  window.setTimeout(() => {
    target.style.display = 'none'
    target.style.removeProperty('height')
    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    target.style.removeProperty('overflow')
    target.style.removeProperty('transition-duration')
    target.style.removeProperty('transition-property')
    target.style.removeProperty('border')
  }, duration)
}
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
  target.style.removeProperty('display')
  let display = window.getComputedStyle(target).display
  if (display === 'none') display = 'grid'
  target.style.display = display
  let height = target.offsetHeight
  target.style.overflow = 'hidden'
  target.style.height = 0
  target.style.paddingTop = 0
  target.style.paddingBottom = 0
  target.style.marginTop = 0
  target.style.marginBottom = 0
  target.offsetHeight
  target.style.boxSizing = 'border-box'
  target.style.transitionProperty = 'height, margin, padding'
  target.style.transitionDuration = duration + 'ms'
  target.style.height = height + 'px'
  target.style.border = 'none'

  target.style.removeProperty('padding-top')
  target.style.removeProperty('padding-bottom')
  target.style.removeProperty('margin-top')
  target.style.removeProperty('margin-bottom')
  target.style.removeProperty('border')

  window.setTimeout(() => {
    target.style.removeProperty('height')
    target.style.removeProperty('overflow')
    target.style.removeProperty('transition-duration')
    target.style.removeProperty('transition-property')
    target.style.removeProperty('border')
  }, duration)
}


function accordion() {
  const items = document.querySelectorAll('.main__FAQ__bottom__card__accordion')
  const triggers = document.querySelectorAll('.main__FAQ__bottom__card__accordion__trigger')
  const contents = document.querySelectorAll('.main__FAQ__bottom__card__accordion__text')

  triggers.forEach((trigger, idx) => {
    if (items[0].classList.contains('active')) {
      slideDown(contents[0])
    }

    trigger.addEventListener('click', () => {
      const parent = trigger.closest(".main__FAQ__bottom__card__accordion")

      if (!parent.classList.contains('active')) {
        parent.classList.add('active')
        slideDown(contents[idx])

        items.forEach((item, i) => {
          if (i != idx && item.classList.contains('active')) {
            slideUp(contents[i])
            item.classList.remove('active')
          }
        })
      } else {
        parent.classList.remove('active')
        slideUp(contents[idx])
      }
    })
  })
}
accordion()


function testJump(x) {
  var ml = ~~x.getAttribute('maxlength');
  if (ml && x.value.length >= ml) {
    do {
      x = x.nextSibling;
    }
    while (x && !(/text/.test(x.type)));
    if (x && /text/.test(x.type)) {
      x.focus();
    }
  }
}


/* RANGE SLIDER */
const rangeSlider = document.getElementById('range-slider')

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [1000, 5000],
    connect: true,
    step: 100,
    tooltips: [{ to: function (value) { return '$' + Math.round(value); } }, { to: function (value) { return '$' + Math.round(value); } }],
    range: {
      'min': 100,
      'max': 11000
    },
  });
}

const main__top = document.querySelector('.main__top')
const main__abstractDesign = document.querySelector('.main__abstractDesign__svg')
const main__contactSection__top = document.querySelector('.main__contactSection__top')
const contactSection__picture = document.querySelector('.contactSection__picture')
window.addEventListener('resize', () => {
  if (main__top) {
    if ((main__top.clientWidth + 2) < 2000) {
      main__abstractDesign.style.marginLeft = (((main__top.clientWidth + 2) - main__abstractDesign.clientWidth) / 2) + 'px'
      main__abstractDesign.style.marginRight = (((main__top.clientWidth + 2) - main__abstractDesign.clientWidth) / 2) + 'px'
    }
  }
  if ((main__contactSection__top.clientWidth + 2) < 1200) {
    contactSection__picture.style.marginLeft = (((main__contactSection__top.clientWidth + 2) - contactSection__picture.clientWidth) / 2) + 'px'
    contactSection__picture.style.marginRight = (((main__contactSection__top.clientWidth + 2) - contactSection__picture.clientWidth) / 2) + 'px'
  }
})

window.addEventListener('load', () => {
  if (main__top) {
    if ((main__top.clientWidth + 2) < 2000) {
      main__abstractDesign.style.marginLeft = (((main__top.clientWidth + 2) - main__abstractDesign.clientWidth) / 2) + 'px'
      main__abstractDesign.style.marginRight = (((main__top.clientWidth + 2) - main__abstractDesign.clientWidth) / 2) + 'px'
    }
  }
})

const hamb = document.querySelector("#hamb");
const smallMenu = document.querySelector("#smallMenu");
const navMenu = document.querySelector("#navMenu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  smallMenu.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderSmallMenu();
}

function renderSmallMenu() {
  smallMenu.appendChild(navMenu);
}

const links = Array.from(navMenu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  smallMenu.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

const checks = document.querySelectorAll('.main__contactSection__bottom__container__whyContactingUs__containerWithInputs__input')
checks[0].checked = "True"
checks.forEach(check => {
  check.addEventListener('click', () => {
    if (check.checked) {
      check.checked = "False"
      check.style.background = 'none'
    } else {
      check.checked = "True"
      check.style.background = url(astreex.github.io/UXUID/images/checkBox.svg)
    }
  });
})