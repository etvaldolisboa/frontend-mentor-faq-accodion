const items = document.querySelectorAll('.item');

items.forEach(function (item) {

  item.addEventListener('click', function () {
    const itemActived = document.querySelector('.actived');
    item.classList.add('actived');
    if (itemActived) {
      itemActived.classList.remove('actived')
    }
  })
})