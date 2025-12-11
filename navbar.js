// components/navbar.js
export function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="container">
      <a class="brand" href="index.html">MyApp</a>
      <div>
        <a href="index.html">Home</a>
        <a href="signup.html">Signup</a>
        <a href="login.html">Login</a>
        <a href="todos.html">Todos</a>
      </div>
    </div>
  `;
  return nav;
}
