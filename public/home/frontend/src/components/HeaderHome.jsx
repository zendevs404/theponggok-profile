import React from 'react'

function HeaderHome() {
  return (
    <div>
        {/* Topbar */}
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
            <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{height: 45}}>
                <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2" />Ponggok,Klaten,Jawa Tengah</small>
                <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+62865542234</small>
                <small className="text-light"><i className="fa fa-envelope-open me-2" />umbulponggok@gmail.com</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{height: 45}}>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                </div>
            </div>
            </div>
        </div>
        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
                {/* <h1 class="text-primary m-0">Desa Ponggok</h1> */}
                <img src="../../assets/img/BUMDES TIRTA MANDIRI.png" alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                <a href="/" className="nav-item nav-link active">Home</a>
                <a href="/about" className="nav-item nav-link">Tentang Kami</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Wisata</a>
                    <div className="dropdown-menu m-0">
                    <a href="../../assets/umbul/u_ponggok.html" target="_blank" className="dropdown-item">Umbul Ponggok</a>
                    <a href="../../assets/umbul/u_Besuki.html" target="_blank" className="dropdown-item">Umbul Besuki</a>
                    <a href="../../assets/umbul/u_SiGedhang.html" target="_blank" className="dropdown-item">Umbul SiGedhang</a>
                    </div>
                </div>
                <a href="/tim" className="nav-item nav-link">Developer</a>
                </div>
            </div>
            </nav>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Selamat Datang di Desa Ponggok</h1>
                    <p className="fs-4 text-white mb-4 animated slideInDown">Desa Wisata Air Bunaken Van Java</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderHome