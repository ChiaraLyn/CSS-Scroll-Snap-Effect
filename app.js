// Create Wrapper to contain snaps
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

// Snaps constructor
class Snap {
  constructor(quote, cite, imgUrl, font, fontSize, fontSizeMobile, fontClr, fontWeight, justifyContent) {   
    this.quote = quote,
    this.cite = cite,
    this.imgUrl = imgUrl,
    this.font = font,
    this.fontSize = fontSize, 
    this.fontSizeMobile = fontSizeMobile, 
    this.fontClr = fontClr,
    this.fontWeight = fontWeight,
    this.justifyContent = justifyContent,
    this.render()
  }
  
}

// Render method that appends each content snap
Snap.prototype.render = function() {

  let anonymousDiv = document.createElement('div');  

  anonymousDiv.innerHTML = `
  <div class="content">
    <blockquote class="blockquote">
      <p>${this.quote}</p>
      <cite>${this.cite}</cite>
    </blockquote>
  </div>
  `;

  // Grab snapping content
  let content = anonymousDiv.firstElementChild;
  // Set style for each snapping content
  content.style.backgroundImage = `url(${this.imgUrl})`;
  content.style.fontFamily = `${this.font}`;
  content.style.fontSize = `${this.fontSize}`;
  content.style.color = `${this.fontClr}`;
  content.style.fontWeight = `${this.fontWeight}`;
  content.style.justifyContent = `${this.justifyContent}`;
  
  // Media query for snapping content
  let isMobile = window.matchMedia("only screen and (max-width: 1024px)");

  if (isMobile.matches) {		
    content.style.fontSize = `${this.fontSizeMobile}`;
    content.style.padding = '2rem';
  }

  // Append Content to wrapper
  wrapper.appendChild(anonymousDiv);
 
}

// Create Snaps
class SnapArray {
  snaps = [
    new Snap(
      'The only true paradise is paradise lost.',
      '― Marcel Proust',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'Indie Flower, sans-serif',
      '5vh',
      '2.8vh',
      'var(--smoke_white)',
      '400',
      'flex-end'
    ),
    new Snap(
      'If we once, and for so long, lived in balance with nature and each other, we should be able to do so again.',
      '― John Zerzan',
      'https://images.unsplash.com/photo-1585130401366-fe05a8d813c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1124&q=80',
      'Gloria Hallelujah, sans-serif',
      '4vh',
      '2.8vh',
      'var(--main_gray)',
      '400',
      'flex-end'
    ),
    new Snap(
      'Thousands of tired, nerve-shaken, over-civilized people are beginning to find out that going to the mountains is going home. That wilderness is a necessity.',
      '― John Muir',
      'https://images.unsplash.com/photo-1534531409543-069f6204c5b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
      'Nanum Pen Script, sans-serif',
      '5vh',
      '3.2vh',
      'var(--smoke_white)',
      '400',
      'flex-end'
    ),
    new Snap(
      'Within this space of increasing dependence on the System, the powers that hold us to the chain are spreading. Whether they are strong or weak; public or private; official or alternative. Because dependence on the System first makes inconceivable a life without the System; therefore, if a life outside the System is unthinkable, the political struggle is also transformed: no longer fighting the System, but fighting for the improvement of the System, for the care of the System, for the resurgence/renaissance of the System. In short, for the rehabilitation of the world as it is rather than for the rehabilitation of our humanity wounded and extinguished by dependence on the System.',
      '― Enrico Manicardi',
      'https://images.unsplash.com/photo-1584112618315-4888370e5e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
      'Architects Daughter, sans-serif',
      '2.6vh',
      '2vh',
      'var(--main_gray)',
      '400',
      
      'flex-start'
    ),
  ]
}

// Create snaps array
const snapArr = new SnapArray();

