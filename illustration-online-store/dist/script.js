window.onload = () => {
  const previewEl = document.querySelector('.image-preview');
  const previewWidth = previewEl.offsetWidth;
  const previewHeight = previewEl.offsetHeight;

  document.querySelector('.left-column').addEventListener('click', e => {
    const curClassList = e.target.classList;
    if (
    !curClassList.contains('small-image') ||
    curClassList.contains('small-image') && curClassList.contains('active'))
    return;

    document.querySelector('.small-image.active').classList.remove('active');
    curClassList.add('active');
    const imgIndex = e.target.dataset.index;
    previewEl.dataset.index = imgIndex;
  });

  previewEl.addEventListener('mousemove', e => {
    const offsetXPercent = Math.round(e.offsetX * 100 / previewWidth);
    const offsetYPercent = Math.round(e.offsetY * 100 / previewHeight);
    previewEl.style.backgroundPosition = `${offsetXPercent}% ${offsetYPercent}%`;
  });

  previewEl.addEventListener('mouseleave', e => {
    previewEl.style.removeProperty('background-position');
  });
};