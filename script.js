document.addEventListener('DOMContentLoaded', () => {
    const skillsets = document.querySelectorAll('.skillset');
    let index = 0;

    function showSkillset() {
        skillsets.forEach((skillset, i) => {
            if (i === index) {
                skillset.style.animation = 'zoomIn 1s forwards';
                setTimeout(() => {
                    skillset.style.animation = 'zoomOut 1s forwards';
                }, 4000); // Display for 4 seconds
            } else {
                skillset.style.animation = 'none';
            }
        });

        index = (index + 1) % skillsets.length;
    }

    // Show the first skillset immediately
    showSkillset();

    // Change skillsets every 6 seconds (4 seconds display + 2 seconds transition)
    setInterval(showSkillset, 6000);
});
