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
function downloadFile() {
    // Create a hidden link to trigger the download
    var link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1xFA-cXF8Y9beIHNFhaVqGXdBBMB3Nbw3'; // Your direct download URL
    link.download = ''; // Optional: you can specify a filename here
    link.click(); // Trigger the download
}
