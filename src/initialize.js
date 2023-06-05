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
}

export { initializePage };
