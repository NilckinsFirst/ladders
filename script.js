const ModalLocation = document.querySelector('.modal-location');
const OpenModalLocation = document.querySelector('.open-modal-location');
const CloseLocationModal = document.querySelector('.close-location-modal');
const ModalCatalog = document.querySelector('.modal-catalog');
const OpenModalCatalog = document.querySelector('.open-catalog-modal');
const CloseCatalogModal = document.querySelector('.close-catalog-modal');

OpenModalLocation.addEventListener("click", function(){
 ModalLocation.classList.remove("d-none");
})

CloseLocationModal.addEventListener("click", function(){
 ModalLocation.classList.add("d-none");
})

OpenModalCatalog.addEventListener("click", function(){
 ModalCatalog.classList.remove('d-none');
})

CloseCatalogModal.addEventListener("click", function(){
 ModalCatalog.classList.add("d-none");
})