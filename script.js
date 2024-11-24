const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
// Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click
());

//download file
function downloadFile(url, filename) {
    // Create a hidden link to trigger the download
    const link = document.createElement('a');
    link.href = url; // File URL
    link.download = filename; // Desired filename
    document.body.appendChild(link); // Append to the DOM
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link for cleanup
}
