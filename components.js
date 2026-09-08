class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="topnav" id="pageHeader">
            <a href="index.html">Home</a>
            <a href="projects.html">Projects</a>
            <a href="games.html">Games</a>
            <a href="experience.html">Work</a>

            <span style="margin-left:auto; font-size: 2em; color: black; display: flex; justify-content:center;">
                <a href="https://very-spook.itch.io/">
                <i class="fa-brands fa-itch-io" style="font-size: 30px;"></i></a>
                <a href="https://www.linkedin.com/in/joshua-almario-a44b24238/">
                <i class="fa-brands fa-square-linkedin" style="font-size: 30px;"></i> </a>
                <a href="https://github.com/jalmario22">
                <i class="fa-brands fa-square-github" style="font-size: 30px;"></i> </a>
            </span>
            
        </header>
    `;
  }
}

class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>&copy; 2026 My Shared Website</p>
      </footer>
    `;
  }
}

customElements.define('main-header', MainHeader);
customElements.define('main-footer', MainFooter);