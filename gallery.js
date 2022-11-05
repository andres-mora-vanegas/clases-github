function renderGallery() {
  if (window.innerWidth < 400) {
    console.log("no hay espacio");
} else {
    console.log("si hay espacio");
    const $galleryContainer = document.querySelector('#gallery');
    if($galleryContainer){
        $galleryContainer.innerHTML='esta es la galería';
    }
  }
}
renderGallery();
