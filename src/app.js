const button = document.querySelector('.button');

const popover = document.createElement('div');
popover.classList.add('popover');
popover.insertAdjacentHTML('afterbegin', `<h3 class="popover-header">Popover title</h3>
      <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>
      <div class="arrow"></div>`)

button.addEventListener('click', () => {
  if (!document.querySelector('.popover')) {
    button.insertAdjacentElement('beforebegin', popover)
    position(button, popover);
  } else {
    popover.remove();
  }
})

function position(button, popover) {
  const arrow = popover.querySelector('.arrow');
  popover.style.left = `${button.offsetLeft + button.offsetWidth / 2 - popover.offsetWidth / 2}px`;
  popover.style.top = `${button.offsetTop - popover.offsetHeight - arrow.offsetHeight}px`;
  arrow.style.left = `${popover.offsetWidth / 2 - arrow.offsetWidth / 2}px`;
}