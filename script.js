document.querySelectorAll('.miniatura').forEach(img => {
  img.onclick = () => {
    document.getElementById('imagengrandota').src = img.src;
    document.querySelectorAll('.miniatura').forEach(i => i.classList.remove('seleccionada'));
    img.classList.add('seleccionada');
  };
});
