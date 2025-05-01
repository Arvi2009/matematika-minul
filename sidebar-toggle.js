document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.getElementById("sidebar-toggle");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Optional: close sidebar when clicking outside on small screens
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove("open");
    }
  });
});
