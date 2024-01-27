'usestrict'
const navButton = document.querySelector('.bar-icon')
const navContainer = document.querySelector('.nav-bar')
const aboutPage = document.querySelector('.about')
const navLinks = document.querySelectorAll('.links')
const navHeight = navContainer.getBoundingClientRect().height
const header = document.querySelector('header')

//navigation button
navButton.addEventListener('click', function(){
     navContainer.classList.toggle('responsive')
     aboutPage.classList.toggle('shifted')
})

//move to page
navLinks.forEach(nav => {
    nav.addEventListener('click', function(e){
    e.preventDefault();
    const scrollPoint = e.target.getAttribute('href') 
    document.querySelector(`${scrollPoint}`).scrollIntoView({behavior: 'smooth'})
    const currentPage = document.querySelector(`${scrollPoint}`)
    currentPage.classList.add('current-page')
    const removeCurrentPage = () => {currentPage.classList.remove('current-page')}
    setTimeout(removeCurrentPage, 1000)

    })
    });

    function showNotification(message) {
        alert(message);
    }

    // Function to handle link click events
    function handleLinkClick(event, linkId) {
        event.preventDefault(); // Prevent the default behavior of the link
        showNotification(`For security reasons, ${linkId}'s repository is private, contact me to gain access <email: chukwujiobivictoric@gmail.com>`);
    }

    // Add click event listeners to the links
    document.querySelector('.kingsheart-code').addEventListener('click', function(event) {
        handleLinkClick(event, 'kingsheart');
    });

    document.querySelector('.alphamagnet-code').addEventListener('click', function(event) {
        handleLinkClick(event, 'alphamagnet');
    });

    // Get the current year
    const currentYear = new Date().getFullYear();

    const companyName = "chukwujiobi victor ifeanyi";

    // Set the dynamic copyright notice
    document.getElementById('copyright').innerHTML = `&copy; ${currentYear} ${companyName}. All Rights Reserved.`;
