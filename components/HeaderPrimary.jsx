export default function HeaderPrimary() {
  return (
    <section className="header-primary d-none d-lg-block">
      <nav className="nav-primary">
        <ul>
          <li>
            <a href="https://x.ro" title="Home">
              Home
            </a>
          </li>

          <li>
            <a href="https://x.ro" title="Costume">
              Costume
            </a>
          </li>

          <li>
            <a href="https://x.ro" title="Camasi">
              Camasi
            </a>
          </li>

          <li>
            <a href="https://x.ro" title="Accesorii">
              Accesorii
            </a>
          </li>
        </ul>
        <section className="nav-primary-end px-2">
          <ul>
            <li>
              <section className="nav-primary-end">
                <span className="animated-button">
                  <div className="trans">
                    <i className="fa-solid fa-sliders"></i>
                  </div>
                  <span className="label">Customize your suit</span>
                </span>
              </section>
            </li>
          </ul>
        </section>
      </nav>

      <nav className="nav-secondary mt-3 mb-4">
        <ul>
          <li>
            <a href="https://x.ro" title="Glamour suits">
              Glamour suits
            </a>
          </li>

          <li>
            <a href="https://x.ro" title="Wedding Suits">
              Wedding Suits
            </a>
          </li>

          <li>
            <a href="https://x.ro" title="Office Suits">
              Office Suits
            </a>
          </li>

          <li>
            <a href="https://x.ro" title="Customise your suit">
              Customise your suit
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
