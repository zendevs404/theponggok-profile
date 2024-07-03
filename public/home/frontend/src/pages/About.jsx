import React from 'react'
import HeaderAbout from '../components/HeaderAbout'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
        <HeaderAbout/>
        {/* Tentang Kami */}
        <div className="container-xxl py-5">
            <div className="container">
            <div className="row g-5">
                <div className="col-lg-6" data-aos="fade-down" data-aos-delay={150} style={{minHeight: 400}}>
                <div className="position-relative h-100">
                    <img className="img-fluid position-absolute w-100 h-100" src="../../assets/img/ponggok1.jpg" alt style={{objectFit: 'cover', borderRadius: 15}} />
                </div>
                </div>
                <div className="col-lg-6" data-aos="fade-down" data-aos-delay={250}>
                <h6 className="section-title bg-white text-start text-primary pe-3">Perkenalan Desa Ponggok</h6>
                <h1 className="mb-4">Selamat datang di <span className="text-primary">Desa Ponggok</span></h1>
                <p className="mb-4">Desa Ponggok adalah desa wisata yang berada di Kecamatan Polanharjo Kabupaten Klaten yang memiliki potensi alam berupa sumber mata air jernih, segar dan melimpah dengan Umbul Ponggok sebagai objek wisata andalan.</p>
                <p className="mb-4">Desa Ponggok memiliki beberapa objek wisata, antara lain Umbul Ponggok, Umbul Besuki, Umbul Sigedhang, dan Waduk Galau. Selain itu, Desa Ponggok juga menawarkan wisata edukasi terkait tata kelola desa dan BUMDes, pengelolaan wisata, budidaya perikanan, budidaya maggot, ketahanan pangan, pertanian, pengelolaan sampah, dan UMKM.</p>
                {/* <a class="btn btn-primary py-3 px-5 mt-2" href="" data-aos="fade-down" data-aos-delay="250">Read More</a> */}
                </div>
            </div>
            </div>
        </div>
        {/* Visi Misi */}
        <section id="visi-misi" className="mt-5 section-padding">
            <div className="container">
            <div className="row">
                <div className="col-11 text-center" data-aos="fade-down" data-aos-delay={150}>
                <div className="section-title">
                    <h3 className="display-5 fw-bolder">Visi Misi</h3>
                    <div className="x-line h-50" />
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 img-fluid visi p-1" data-aos="fade-down" data-aos-delay={150}>
                <h3 className="text-center fw-semi-bold">Visi</h3>
                <p className="p-justify">Visi BUMDes Tirta Mandiri yaitu
                    menjadi desa wisata yang mandiri,
                    mampu dalam pengelolaan potensi desa
                    dan pembangunan berkelanjutan untuk
                    mewujudkan masyarakat yang sejahtera,
                    berkualitas, berbudaya, maju, adil,
                    demokratis, dan peduli terhadap
                    lingkungan.</p>
                </div>
                <div className="col-md-1" data-aos="fade-down" data-aos-delay={250}>
                <div className="y-line h-100" />
                </div>
                <div className="col-md-6" data-aos="fade-down" data-aos-delay={350}>
                <h3 className="text-center fw-semi-bold">Misi</h3>
                <div className="d-flex pt-4 mb-3 align-items-center">
                    <div className="iconbox me-4">
                    <i className="ri-hashtag" />
                    </div>
                    <div>
                    <p>1. Mengembangkan asset yang ada untuk
                        terus dapat memaksimalkan sebagai
                        sumber pendapatan desa yang
                        berkelanjutan. </p>
                    </div>
                </div>
                <div className="d-flex mb-3 align-items-center">
                    <div className="iconbox me-4">
                    <i className="ri-hashtag" />
                    </div>
                    <div>
                    <p>2. Mampu menganalisa potensi, peluang,
                        dan tantangan, untuk menyusun rencana
                        usaha yang mengikuti trend pasar atau
                        menciptakan pasar baru.</p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="iconbox me-4">
                    <i className="ri-hashtag" />
                    </div>
                    <div>
                    <p>3. Pengelolaan keungan yang sehat berikut
                        dengan strategi perencanaan investasi
                        yang tepat dan tingkat resiko yang
                        rendah. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Tim Pengurus */}
        <div className="container-xxl py-5">
            <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Tim Pengurus</h6>
                <h1 className="mb-5">Berjumpalah dengan Tim Kami</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src="../../assets/img/Pengurus/Pengurus 1.png" alt />
                    </div>
                    <div className="position-relative d-flex justify-content-center" style={{marginTop: '-19px'}}>
                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                    </div>
                    <div className="text-center p-4">
                    <h5 className="mb-0">Yaya Setiyaningrum</h5>
                    <small>Direktur</small>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src="../../assets/img/Pengurus/Pengurus 2.png" alt />
                    </div>
                    <div className="position-relative d-flex justify-content-center" style={{marginTop: '-19px'}}>
                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                    </div>
                    <div className="text-center p-4">
                    <h5 className="mb-0">Slamet Widodo</h5>
                    <small>Wakil Direktur</small>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src="../../assets/img/Pengurus/Pengurus 3.png" alt />
                    </div>
                    <div className="position-relative d-flex justify-content-center" style={{marginTop: '-19px'}}>
                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                    </div>
                    <div className="text-center p-4">
                    <h5 className="mb-0">Siti Munawaroh</h5>
                    <small>Seketaris</small>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src="../../assets/img/Pengurus/Pengurus 4.png" alt />
                    </div>
                    <div className="position-relative d-flex justify-content-center" style={{marginTop: '-19px'}}>
                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                    </div>
                    <div className="text-center p-4">
                    <h5 className="mb-0">Wahyu Bejo Utomo</h5>
                    <small>Bendahara</small>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About