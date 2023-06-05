function initializePage() {
  const content = document.getElementById('content');
  console.log(content);
  const header = document.createElement('header');
  header.textContent = 'Todo App';
  content.appendChild(header);
  header.classList.add('bg-slate-800', 'text-fuchsia-50', 'text-4xl');

  const svgLogo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const svgLogoPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  svgLogo.setAttribute('viewBox', '0 -960 960 960');
  svgLogoPath.setAttribute(
    'd',
    'M250-279h220v-60H250v60Zm120-171h220v-60H370v60Zm120-171h220v-60H490v60ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z'
  );
  svgLogo.classList.add('fill-current', 'w-30', 'h-20', 'mr-2', 'm-0');
  svgLogo.appendChild(svgLogoPath);

  header.insertBefore(svgLogo, header.firstChild);

  const container = document.createElement('div');
  container.classList.add('container', 'max-w-none');

  content.appendChild(container);

  const leftPanel = document.createElement('div');
  leftPanel.classList.add('left-panel', 'bg-slate-500', 'min-w-fit');

  container.appendChild(leftPanel);

  const ulSandwich = document.createElement('ul');
  const liGeneral = document.createElement('li');

  leftPanel.appendChild(ulSandwich);
  ulSandwich.appendChild(liGeneral);

  const btnGeneral = document.createElement('button');
  btnGeneral.classList.add(
    'bg-transparent',
    'hover:bg-slate-600',
    'text-slate-900',
    'font-semibold',
    'hover:text-white',
    'py-2',
    'px-4',
    'border',
    'border-slate-600',
    'hover:border-transparent',
    'rounded',
    'text-lg',
    'inline-flex',
    'items-center',
    'w-[170px]',
    'justify-center'
  );

  liGeneral.appendChild(btnGeneral);

  const svgGeneral = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  const svgGeneralPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  svgGeneral.setAttribute('viewBox', '0 -960 960 960');
  svgGeneralPath.setAttribute(
    'd',
    'm394-80-70-123H189l-87-154 69-123-69-123 87-154h135l70-123h172l70 123h135l87 154-69 123 69 123-87 154H636L566-80H394Zm243-429h100l54-94-54-94H637l-54 94 54 94ZM430-388h100l54-92-54-92H430l-54 92 54 92Zm0-244h100l54-94-54-94H430l-54 94 54 94ZM224-509h100l54-94-54-94H224l-54 94 54 94Zm0 246h100l54-94-55-94H223l-54 94 55 94Zm206 123h100l54-94-54-94H430l-54 94 54 94Zm207-123h100l54-94-54-94H637l-51 94 51 94Z'
  );
  svgGeneral.classList.add('fill-current', 'w-7', 'h-7', 'mr-2', 'm-0');
  svgGeneral.appendChild(svgGeneralPath);

  btnGeneral.appendChild(svgGeneral);

  const spanGeneral = document.createElement('spam');
  spanGeneral.textContent = 'General';

  btnGeneral.appendChild(spanGeneral);

  const liProjects = document.createElement('li');
  liProjects.classList.add('font-semibold', 'text-slate-900');
  liProjects.textContent = 'Projects';

  ulSandwich.appendChild(liProjects);

  const ulListOfProj = document.createElement('ul');
  ulListOfProj.classList.add('listOfProjects', 'mt-5');

  liProjects.appendChild(ulListOfProj);
  
}

export { initializePage };
