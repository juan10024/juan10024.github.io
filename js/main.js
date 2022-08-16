//Custom Cursor Code
let cursor = document.querySelector('.cursor');
window.onmousemove = (e) => 
{
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px'; 
} 

//Change background header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//Services Modal
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')
      
let modal = function(modalClick)
{
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => 
{
    mb.addEventListener('click', () =>
    {
        modal(i)
    })    
});

modalClose.forEach((mc) =>
{
    mc.addEventListener('click', () =>
    {
        modalViews.forEach((mv) =>
        {
            mv.classList.remove('active-modal')
        })
    })
})

//Mixitup Filter Portfolio
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card' 
    },
    animation: {
        duration: 300
    }
});

//Link Active Work
const linkWork = document.querySelectorAll('.work_item')

function activeWork()
{
    linkWork.forEach( l => l.classList.remove('active_work'))
    this.classList.add('active_work')
}

linkWork.forEach( l => l.addEventListener('click', activeWork)) 

/* Swiper Studies */
let swiperStudies = new Swiper(".studies_container", {
    spaceBetween: 24,
    loop: true, 
    

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
});

//Scroll sections, active link
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/* Change page theme */
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//Scroll Reveal Animation
const sr = ScrollReveal(
    {
        origin: 'top', 
        distance: '40px',
        duration: 2000,
        delay:400,
        reset:true
    })

sr.reveal(`.home_data, .contact `) 
sr.reveal(`.home_handle, .contact_container `, {delay:700}) 
sr.reveal(`.home_social , .home_scroll, .contact_info `, {delay:900, origin: 'bottom'}) 
