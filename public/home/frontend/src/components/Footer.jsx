import React from 'react'

function Footer() {
  return (
    <div>
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Informasi</h4>
                    <a className="btn btn-link" href="#">Tentang Kami</a>
                    <a className="btn btn-link" href="#">Kontak</a>
                    <a className="btn btn-link" href="#">FAQs &amp; Help</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Kontak</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Ponggok,Klaten,Jawa Tengah</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3" />+62865542234</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3" />umbulponggok@gmail.com</p>
                    <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href>#</a>
                    <a className="btn btn-outline-light btn-social" href>#</a>
                    <a className="btn btn-outline-light btn-social" href>#</a>
                    <a className="btn btn-outline-light btn-social" href>#</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Gallery</h4>
                    <div className="row g-2 pt-2">
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="../../assets/img/Gedhang/sigedang1.jpg" alt />
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="../../assets/img/ponggok4.jpg" alt />
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="../../assets/img/Besuki/besuki1.jpeg" alt />
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="../../assets/img/Besuki/besuki4.jpg" alt />
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="../../assets/img/Gedhang/sigedang3.jpg" alt />
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="../../assets/img/ponggok7.jpg" alt />
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Wisata air desa yang sangat menawan</p>
                    <div className="position-relative mx-auto" style={{maxWidth: 400}}>
                    <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Masukan Email" />
                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Kirim</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    © <a className="border-bottom" href="#">www.bumdesponggok.com</a>, All Right Reserved.
                    Designed By <a className="border-bottom" href="#">Mahasiswa Amikom Yogyakarta</a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                        <a href>Home</a>
                        <a href>Cookies</a>
                        <a href>Help</a>
                        <a href>FQAs</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer