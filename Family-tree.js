function toggleChildren(event) {
  const li = event.target.closest('li');
  const ul = li.querySelector('ul');
  if (ul) {
    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const treeLinks = document.querySelectorAll('.tree li a');
  treeLinks.forEach(link => {
    if (link.parentElement.querySelector('ul')) {
      link.addEventListener('click', toggleChildren);
    }
  });
});