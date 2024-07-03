<div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
                <!-- <h1 class="text-primary m-0">Desa Ponggok</h1> -->
                <img src="home/img/BUMDES TIRTA MANDIRI.png" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="home/index.html" class="nav-item nav-link active">Home</a>
                    <a href="home/tentang_kami.html" class="nav-item nav-link">Tentang Kami</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Wisata</a>
                        <div class="dropdown-menu m-0">
                            <a href="home/umbul/u_ponggok.html" target="_blank" class="dropdown-item">Umbul Ponggok</a>
                            <a href="home/umbul/u_Besuki.html" target="_blank" class="dropdown-item">Umbul Besuki</a>
                            <a href="home/umbul/u_SiGedhang.html" target="_blank" class="dropdown-item">Umbul SiGedhang</a>
                        </div>
                    </div>
                    <a href="home/tim.html" class="nav-item nav-link">Developer</a>

                    @if (Route::has('login'))

                    @auth

                    <x-app-layout>
    
                    </x-app-layout>


                    @else
                    <a class="btn btn-primary custom-btn nav-item mt-lg-3 mb-lg-3" href="{{ route('login') }}">Login</a>
                    <a class="btn btn-success custom-btn nav-item mt-lg-3 mt-2 mb-lg-3 ms-lg-2" style="border-radius: 20px;"  href="{{ route('register') }}">Register</a>
                    @endauth

                    @endif

                </div>
            </div>
        </nav>

        <div class="container-fluid bg-primary py-5 mb-5 hero-header">
            <div class="container py-5">
                <div class="row justify-content-center py-5">
                    <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Selamat Datang di Desa Ponggok</h1>
                        <p class="fs-4 text-white mb-4 animated slideInDown">Desa Wisata Air Bunaken Van Java</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
    .custom-btn {
        padding: 10px 20px;
        font-size: 14px;
        height: 60%;
        font-weight: 600 !important;
    }
</style>