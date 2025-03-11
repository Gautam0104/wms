function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggle-btn").querySelector("i");

  sidebar.classList.toggle("collapsed");

  // Rotate the chevron icon 180°
  toggleBtn.classList.toggle("rotate-135");
}
