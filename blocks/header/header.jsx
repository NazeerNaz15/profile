export default function Header() {

  return (

    <div className="fixed-navbar">
  <header id="header" className="wpo-site-header undefined">
    <nav className="navigation navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
            <div className="mobail-menu">
              <div className="mobail_menu">
                <div className="mobileMenu ">
                  <div className="menu-close">
                    <div className="clox">
                      <i className="ti-close"></i>
                    </div>
                  </div>
                  <ul className="responsivemenu">
                    <ul className="MuiList-root MuiList-padding css-1ontqvh">
                      <p>Home <i className="fa fa-angle-down"></i>
                      </p>
                      <li>
                        <a>About</a>
                      </li>
                      <li>
                        <a>Projects</a>
                      </li>
                      <li>
                        <a>Contact</a>
                      </li>
                      <li>
                        <a>Blog</a>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="showmenu">
                  <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Nazz Studio</a>
            </div>
          </div>
          <div className="col-lg-6 col-md-1 col-1">
            <div id="navbar" className="collapse navbar-collapse navigation-holder">
              <button className="menu-close">
                <i className="ti-close"></i>
              </button>
              <ul className="nav navbar-nav mb-2 mb-lg-0">
                <li className="menu-item-has-children">
                  <a href="/home">Home</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/home">Home style 1</a>
                    </li>
                    <li>
                      <a href="/home2">Home style 2</a>
                    </li>
                    <li>
                      <a href="/home3">Home style 3</a>
                    </li>
                    <li>
                      <a href="/home4">Home style 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-2">
            <div className="header-right">
              <a className="theme-btn">Contact Me</a>
              <div className="header-search-form-wrapper d-lg-none d-block">
                <div className="cart-search-contact">
                  <button className="search-toggle-btn">
                    <i className="fi flaticon-magnifiying-glass"></i>
                  </button>
                  <div className="header-search-form">
                    <form>
                      <div>
                        <input type="text" className="form-control" placeholder="Search here..."/>
                        <button type="submit">
                          <i className="fi flaticon-magnifiying-glass"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>
  )
}