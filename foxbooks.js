const path = [['Home', 'foxbooks.html'],]; // breadcrumb path
const crumbDiv = document.querySelector(".crumbs");

window.onload = () => {
  const [title, location] = getPageNameandLink(window.location.pathname);

  if (title != 'Home') 
    path.push([title, location]);

  path.forEach((location, index) => {
    const aTag = document.createElement('a');
    aTag.id = 'breadcrumb';
    aTag.href = location[1];
    aTag.textContent = location[0];

    crumbDiv.appendChild(aTag);
    
    if (index == path.length - 1 ) return;
    const divider = document.createElement('a');
    divider.textContent = '->';
    crumbDiv.appendChild(divider);
  })
};

function getPageNameandLink(windowLocation) {
  switch (windowLocation) {
    case '/SD330/foxbooks.html':
      return ['Home', 'foxbooks.html']
    case '/SD330/class-catalogue.html':
      return ['Class Catalogue', 'class-catalogue.html']
    case '/SD330/booksearch.html':
      return ['Book Search', 'booksearch.html']
  }
}
