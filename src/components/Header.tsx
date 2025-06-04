import { Link as PLink } from "preact-router";

const Link = PLink as any;

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
          <Link class="navbar-brand" href={`/`}>
            Pagrindinis
          </Link>

          <input type="checkbox" id="menuToggle" class="d-none" />
          <label class="navbar-toggler" for="menuToggle">
            Menu <i class="fas fa-bars"></i>
          </label>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto py-4 py-lg-0">
              <li class="nav-item">
                <Link class="nav-link px-lg-3 py-3 py-lg-4" href={`/`}>
                  Pagrindinis
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link px-lg-3 py-3 py-lg-4" href={`/about`}>
                  Apie
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link px-lg-3 py-3 py-lg-4" href={`/checklist`}>
                  Dienos Gairės
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link px-lg-3 py-3 py-lg-4" href={`/todo`}>
                  Dienos Planas
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link px-lg-3 py-3 py-lg-4" href={`/help`}>
                  Pagalba
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href={`/medialibrary`}
                >
                  Mediateka
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href={`/meditation`}
                >
                  meditacija
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link px-lg-3 py-3 py-lg-4"
                  href={`/dailyreflection`}
                >
                  savianalizė
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="masthead">
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                <h1>Tik šiandien</h1>
                <span class="subheading">Šios dienos mintys</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
