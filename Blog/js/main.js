//Styles Nav, Changed on scroll
window.addEventListener('scroll', () =>
{
    document.querySelector('nav').classList.toggle('window-scroll', 
    window.scrollY > 0)
})

//Show and Hide Sections FAQs
const faq = document.querySelectorAll('.faq');

faq.forEach( faq =>
{
    faq.addEventListener('click', () =>
    {
        faq.classList.toggle('open'); 

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus')
        {
            icon.className = 'uil uil-minus'; 
        } else 
        {
            icon.className = 'uil uil-plus';
        }
    })
})

//Scroll Reveal Animation
const sr = ScrollReveal(
    {
        origin: 'top',  
        distance: '60px',
        duration: 1700,
        delay:400,
        reset:true
    })

sr.reveal(`.header_container, .course, .testimonial, .about_primary-right, .team_container `) 
sr.reveal(`.header_container img, .course_info, .testimonial_info, .about_primary-left  `, {delay:700}) 
sr.reveal(`.header_left p  , .home_scroll, .testimonial_body, .primary_cards `, {delay:900, origin: 'left'}) 
