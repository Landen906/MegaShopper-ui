export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Megashopper Home
      </a>

      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
        <li>
          <a href="/dashboard">Customer Dashboard</a>
        </li>
        <li>
          <a href="/employeedashboard">Employee Dashboard</a>
        </li>
      </ul>
    </nav>
  );
}
