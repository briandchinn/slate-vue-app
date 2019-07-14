      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar--uppercase navbar-inverse bg-dark">
        <div class="container navbar-container">
          <!-- Brand/Logo -->
          <a class="navbar-brand" href="/index.html">
            <img src="/assets/images/logo/logo-1-b.png" class="" alt="Boomerang">
          </a>

          <div class="d-inline-block">
            <!-- Navbar toggler  -->
            <button class="navbar-toggler hamburger hamburger-js hamburger--spring" type="button" data-toggle="collapse" data-target="#navbar_main" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <div class="collapse navbar-collapse align-items-center justify-content-end" id="navbar_main">
            <!-- Navbar search - For small resolutions -->
            <div class="navbar-search-widget b-xs-bottom py-3 d-lg-none d-none">
              <form class="" role="form">
                <div class="input-group input-group-lg">
                  <input type="text" class="form-control" placeholder="Search for...">
                  <span class="input-group-btn">
                    <button class="btn btn-base-3" type="button">Go!</button>
                  </span>
                </div>
              </form>
            </div>

            <!-- Navbar links -->
            <ul class="navbar-nav">
              <li class="nav-item dropdown megamenu">
                <a class="nav-link" href="/index.html">
                  Overview
                </a>
              </li>
            </ul>

            <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item">
                <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
              </li>
            </ul>
          </div>
          

          <div class="pl-4 d-none d-lg-inline-block">
          <a href="https://goo.gl/9BbH7R" class="btn btn-styled btn-sm btn-base-1 text-uppercase btn-circle" target="_blank">
            Purchase now
          </a>
          </div>
        </div>
      </nav>
    </div>
    
    <nav class="st-menu st-effect-1" id="menu-1">
      <div class="st-profile">
        <div class="st-profile-user-wrapper">
          <div class="profile-user-image">
            <img src="../../assets/images/prv/people/person-1.jpg" class="img-circle" />
          </div>
            <div class="profile-user-info">
              <span class="profile-user-name">Bertram Ozzie</span>
              <span class="profile-user-email">username@example.com</span>
            </div>
        </div>
      </div>

        <div class="st-menu-list mt-2">
            <ul>
                <li>
                    <a href="#">
                        <i class="ion-ios-bookmarks-outline"></i> Theme documentation
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="ion-ios-cart-outline"></i> Purchase Tribus
                    </a>
                </li>
            </ul>
        </div>

        <h3 class="st-menu-title">Account</h3>
        <div class="st-menu-list">
            <ul>
                <li>
                    <a href="#">
                        <i class="ion-ios-person-outline"></i> User profile
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="ion-ios-location-outline"></i> My addresses
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="ion-card"></i> My cards
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="ion-ios-unlocked-outline"></i> Password update
                    </a>
                </li>
            </ul>
        </div>

        <h3 class="st-menu-title">Support center</h3>
        <div class="st-menu-list">
            <ul>
                <li>
                    <a href="#">
                        <i class="ion-ios-information-outline"></i> About Tribus
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="ion-ios-email-outline"></i> Contact &amp; support
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-camera"></i> Getting started
                    </a>
                </li>
            </ul>
        </div>
    </nav>