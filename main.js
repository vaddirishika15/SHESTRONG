// document.addEventListener('DOMContentLoaded', function () {
// const modal=document.getElementById('myModal');
// const modalImage=document.getElementById('modal-image');
// const modalText=document.getElementById('modal-text');
// const gridImages=document.querySelectorAll('.grid img');
// //const openModalBtn = document.getElementById('openModalBtn'); 
// // Information for each image
// const imageInfo=[
//     {
//         imageSrc: "images/mhm.jpg",
//         infoText: "Information for Image 1 goes here.",
//     },
//     {
//         imageSrc: 'images/RACH.jpg',
//         infoText: 'Information for Image 2 goes here.',
//     },
//     {
//         imageSrc: 'images/ed.jpg',
//         infoText: 'Information for Image 3 goes here.',
//     },
//     {
//         imageSrc: 'images/pd.jpg',
//         infoText: 'Information for Image 4 goes here.',
//     },
//     {
//         imageSrc: 'images/cg.jpg',
//         infoText: 'Information for Image 5 goes here.',
//     },
//     {
//         imageSrc: 'images/er.jpg',
//         infoText: 'Information for Image 6 goes here.',
//     },
// ];
// console.log('JavaScript code is running.');
// gridImages.forEach((image, index) => {
//     image.addEventListener('click', () => {
//         console.log('Image clicked:', index);
//         modal.style.display='block';
//         modalImage.src=imageInfo[index].imageSrc;
//         modalText.textContent=imageInfo[index].infoText;
//     });
// });
// //openModalBtn.addEventListener('click', () => {
//    // modal.style.display = 'block';
// //});
// });
// Function to show the modal with information
function showInfo(infoText) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');

    modal.style.display = 'block';
    modalImage.style.display = 'none'; 
    modalText.textContent = infoText;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
