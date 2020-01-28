import navbar from './navbar.js';

export default {
    render(data) {
        let isActive = (expected) => {
            if (!data.router.currentRoute) return false;
            return data.router.currentRoute.path.match(new RegExp(`^\/?#?\/?${expected}\/?$`));
        }
        return new Promise((resolve, reject) => {

            console.log(navbar.render(isActive));

            resolve(`
            <!-- Background -->
            <div class="background-wrapper">
                <div class="background-left"></div>
                <div class="background-right">
                    <div class="background-right-top"></div>
                    <div class="background-right-bottom"></div>
                </div>
            </div>
            <!-- Background END -->

            <!-- Main Window -->
            <main class="bg-white">
                <!-- Navigation Bar -->
                <nav class="navbar navbar-expand-xl navbar-light bg-light w-100 d-flex flex-row align-items-center">
                    <a class="navbar-brand ml-4" href="./#/">
                        <img src="img/logo.jpg" width="32" height="32" class="d-inline-block align-top" alt="logo">
                        <span class="navbar-logo-text ml-1 font-weight-bold">pomah</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse h-100" id="navbarNav">
                        <ul class="navbar-nav-main navbar-nav ml-5 font-weight-bold">
                            <li class="nav-item mx-3${ isActive('contacts') ? ' nav-link-active' : ''}">
                                <a class="nav-link text-dark px-0" href="./#/contacts">Find Pomah</a>
                            </li>
                            <li class="nav-item mx-3${ isActive('community') ? ' nav-link-active' : ''}">
                                <a class="nav-link text-dark px-0" href="./#/community">Community</a>
                            </li>
                            <li class="nav-item mx-3${ isActive('blog') ? ' nav-link-active' : ''}">
                                <a class="nav-link text-dark px-0" href="./#/blog">Blog</a>
                            </li>
                            <li class="nav-item mx-3${ isActive('about-us') ? ' nav-link-active' : ''}">
                                <a class="nav-link text-dark px-0" href="./#/about-us">About Pomah</a>
                            </li>
                        </ul>
                        <ul class="ml-auto mr-3 navbar-nav-login navbar-nav">
                            <li class="nav-item mx-1">
                                <a class="nav-link text-dark px-5 py-3${ isActive('login') ? ' navbar-nav-login-active' : ''}" href="./#/login">Login</a>
                            </li>
                            <li class="nav-item mx-1">
                                <a class="nav-link text-dark px-5 py-3${ isActive('register') ? ' navbar-nav-login-active' : ''}" href="./#/register">Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <!-- Navigation Bar End -->
                
                <!-- Content -->
                <div class="content h-100">
                    <div class="main-left-wrapper">
                        <div class="main-left-content d-flex flex-row justify-content-center">
                            <router-view></router-view>
                        </div>
                    </div>
                    <div class="main-right-wrapper">
                        <div class="h-100">
                            <div id="carouselExampleCaptions" class="carousel slide h-100" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner h-100">
                                    <div class="carousel-item active h-100">
                                        <img src="img/house-full.jpg" class="d-block w-100 h-100" alt="house">
                                        <div class="carousel-caption d-none d-md-block w-100">
                                            <div class="carousel-description mx-auto d-flex">
                                                <div class="col-3 d-flex flex-row justify-content-center align-items-center">
                                                    <img src="img/money-icon.jpg" alt="money-icon">
                                                </div>
                                                <div class="col-8 d-flex flex-row align-items-center">
                                                    <div class="text-left">
                                                        <div class="h5 font-weight-bold text-dark">Best Price Guarantee</div>
                                                        <div class="text-secondary">Competitive price from extensive network budget hotels to 5 star hotels such as ibis, Amaris, Santika Hotel with best price guarantee.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100">
                                        <img src="img/house-full.jpg" class="d-block w-100 h-100" alt="house">
                                        <div class="carousel-caption d-none d-block">
                                            <div class="carousel-description mx-auto d-flex">
                                                <div class="col-3 d-flex flex-row justify-content-center align-items-center">
                                                    <img src="img/money-icon.jpg" alt="money-icon">
                                                </div>
                                                <div class="col-8 d-flex flex-row align-items-center">
                                                    <div class="text-left">
                                                        <div class="h5 font-weight-bold text-dark">Best Price Guarantee</div>
                                                        <div class="text-secondary">Competitive price from extensive network budget hotels to 5 star hotels such as ibis, Amaris, Santika Hotel with best price guarantee.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item h-100">
                                        <img src="img/house-full.jpg" class="d-block w-100 h-100" alt="house">
                                        <div class="carousel-caption d-none d-block">
                                            <div class="carousel-description mx-auto d-flex">
                                                <div class="col-3 d-flex flex-row justify-content-center align-items-center">
                                                    <img src="img/money-icon.jpg" alt="money-icon">
                                                </div>
                                                <div class="col-8 d-flex flex-row align-items-center">
                                                    <div class="text-left">
                                                        <div class="h5 font-weight-bold text-dark">Best Price Guarantee</div>
                                                        <div class="text-secondary">Competitive price from extensive network budget hotels to 5 star hotels such as ibis, Amaris, Santika Hotel with best price guarantee.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Content End-->
            </main>
            <!-- Main Window End -->

            `);
        });
    }
}