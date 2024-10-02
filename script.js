document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
});

function scrollToSection(sectionId){
    const section = document.getElementById(sectionId);

        if(section){
            window.scrollTo({
                top: section.offsetTop - 50, // Tránh header che mất nội dung
                behavior: 'smooth' // Chuyển động cuộn mượt
            });
        }
}

