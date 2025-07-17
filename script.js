function alertAbout() {
  alert("Hi! I'm a creative developer who loves building modern web apps with HTML, CSS, and JavaScript.");
}

function toggleProjects() {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    if (project.style.display === 'none') {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}
