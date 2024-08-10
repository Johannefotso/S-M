document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Quiz Interaction
    const quizButton = document.getElementById('quizButton');
    const quizResult = document.getElementById('quizResult');

    if (quizButton) {
        quizButton.addEventListener('click', function() {
            const userAnswer = prompt('How many hours a day do you spend on social media?');
            if (userAnswer) {
                quizResult.textContent = `You answered: ${userAnswer} hours. Consider reducing screen time if it's affecting your mental health.`;
            }
        });
    }

    // Toggle Community Forum
    const forumToggleButton = document.getElementById('forumToggleButton');
    const forumSection = document.getElementById('forumSection');

    if (forumToggleButton) {
        forumToggleButton.addEventListener('click', function() {
            if (forumSection.style.display === 'none' || !forumSection.style.display) {
                forumSection.style.display = 'block';
            } else {
                forumSection.style.display = 'none';
            }
        });
    }
});