function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggle-btn").querySelector("i");

  sidebar.classList.toggle("collapsed");
  if (sidebar == "collapse") {
    // Rotate the chevron icon 180°
    toggleBtn.innerHTML = ``;
  }
}
