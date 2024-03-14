document.addEventListener('DOMContentLoaded', function() {
    const userButton = document.querySelector('.userName');
    const sidebar = document.querySelector('.sidebar');

    // Show sidebar when mouse enters either the User button or the sidebar
    userButton.addEventListener('mouseenter', function() {
        sidebar.classList.add('show-sidebar');
    });

    sidebar.addEventListener('mouseenter', function() {
        sidebar.classList.add('show-sidebar');
    });

    // Hide sidebar when mouse leaves the sidebar
    sidebar.addEventListener('mouseleave', function() {
        sidebar.classList.remove('show-sidebar');
    });

    // Prevent default behavior of the User button
    userButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default action of navigating to another page
    });
});

function toggleActive(element) {
    const activeJobs = document.querySelectorAll('.job.active');
    activeJobs.forEach(job => {
        if (job !== element) {
            job.classList.remove('active');
        }
    });
    element.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const target = event.target;
    if (!target.matches('.job') && !target.closest('.job')) {
        document.querySelectorAll('.job.active').forEach(job => {
            job.classList.remove('active');
        });
    }
});