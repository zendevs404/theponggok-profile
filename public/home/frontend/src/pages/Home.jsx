import React from 'react'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'
import TestimonialCarousel from '../components/TestimonialCarousel'

function Home() {
  return (
    <div>
        <HeaderHome/>
        {/* Tentang Kami */}
        <div className="container-xxl py-5">
            <div className="container">
            <div className="row g-5">
                <div className="col-lg-6" data-aos="fade-down" data-aos-delay={150} style={{minHeight: 400}}>
                <div className="position-relative h-100">
                    <img className="img-fluid position-absolute w-100 h-100" src="../../assets/img/ponggok1.jpg" alt style={{objectFit: 'cover'}} />
                </div>
                </div>
                <div className="col-lg-6" data-aos="fade-down" data-aos-delay={250}>
                <h6 className="section-title bg-white text-start text-primary pe-3">Tentang Kami</h6>
                <div className="animated-text">
                    Selamat datang di <span />
                </div>
                <p className="mb-3 mt-3">Desa Ponggok adalah desa wisata yang berada di Kecamatan Polanharjo Kabupaten Klaten yang memiliki potensi alam</p>
                <p className="mb-4">Potensi alam tersebut berupa sumber mata air jernih, segar dan melimpah dengan Umbul Ponggok sebagai objek wisata andalan</p>
                <a className="btn btn-primary py-3 px-5 mt-2" href="/about" data-aos="fade-down" data-aos-delay={250}>Read More</a>
                </div>
            </div>
            </div>
        </div>
        {/* Kegiatan */}
        <div className="container-xxl py-5">
            <div className="container">
            <div className="text-center" data-aos="fade-down" data-aos-delay={150}>
                <h6 className="section-title bg-white text-center text-primary px-3">Kegiatan</h6>
                <h1 className="mb-5">Kegiatan Terbaru</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6" data-aos="fade-down" data-aos-delay={150}>
                <div className="package-item">
                    <div className="overflow-hidden">
                    {/* image dummy ya */}
                    <img className="img-fluid" src="../../assets/img/Berita1.jpeg" alt />
                    </div>
                    <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />Ponggok</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" /> 3 Januari 2023</small>
                    </div>
                    <div className="text-center p-4">
                    <p>Pengibaran bendera unik dan menantang digelar di objek wisata air Umbul Ponggok, Desa Ponggok, Kecamatan Polanharjo, Klaten, Jawa Tengah, Sabtu (13/8/2022) siang. Para kru Umbul Ponggok menggelar pengibaran di bawah air.
                        Kegiatan yang dimulai pukul 14.00 WIB itu layaknya upacara bendera umumnya. Ada inspektur upacara, peserta upacara, dan pengibar bendera.</p>
                    <div className="d-flex justify-content-center mb-2">
                        <a href="#" className="btn btn-sm btn-primary px-3" style={{borderRadius: 35}}>Read More</a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-down" data-aos-delay={250}>
                <div className="package-item">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src="../../assets/img/Berita 2.jpg" alt />
                    </div>
                    <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />Ponggok</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />4 May 2023</small>
                    </div>
                    <div className="text-center p-4">
                    <p>Desa Ponggok menyimpan kekayaan tak ternilai. Di antara hijaunya alam, masyarakat Desa Ponggok memelihara warisan leluhur mereka budidaya ikan. Dari generasi ke generasi, mereka telah menjaga tradisi ini dengan penuh kearifan dan cinta akan alam.
                        Dengan keuletan dan kebijaksanaan, para petani ikan Desa Ponggok menjalankan tugas mereka setiap hari. Mereka mengatur dan merawat kolam-kolam ikan dengan penuh kasih sayang, menjamin kesejahteraan para ikan yang menjadi sumber kehidupan mereka.</p>
                    <div className="d-flex justify-content-center mb-2">
                        <a href="#" className="btn btn-sm btn-primary px-3" style={{borderRadius: 35}}>Read More</a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-down" data-aos-delay={350}>
                <div className="package-item">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src="../../assets/img/Berita3.jpg" alt />
                    </div>
                    <div className="d-flex border-bottom">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />Ponggok</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />3 Juni 2023</small>
                    </div>
                    <div className="text-center p-4">
                    <p>Dengan tangan yang cekatan dan jiwa kreatif yang tiada henti, masyarakat Desa Ponggok menghasilkan beragam kerajinan tangan yang memukau. Mulai dari anyaman bambu yang elegan hingga patung-patung kayu yang bernilai seni tinggi, setiap karya memiliki cerita dan keunikan tersendiri.</p>
                    <div className="d-flex justify-content-center mb-2">
                        <a href="#" className="btn btn-sm btn-primary px-3" style={{borderRadius: 35}}>Read More</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Destinasi */}
        <div className="container-xxl py-5 destination">
            <div className="container">
            <div className="text-center" data-aos="fade-down" data-aos-delay={150}>
                <h6 className="section-title bg-white text-center text-primary px-3">Destinasi</h6>
                <h1 className="mb-5">Destinasi Populer</h1>
            </div>
            <div className="row g-3">
                <div className="col-lg-7 col-md-6">
                <div className="row g-3">
                    <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s" data-aos="zoomIn" data-aos-delay={150}>
                    <a className="position-relative d-block overflow-hidden" href="../../assets/umbul/u_ponggok.html" target="_blank">
                        <img className="img-fluid" src="../../assets/img/ponggok5.jpeg" alt />
                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">Umbul Ponggok</div>
                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={{borderRadius: 20}}>Read More</div>
                    </a>
                    </div>
                    <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s" data-aos="zoomIn" data-aos-delay={250}>
                    <a className="position-relative d-block overflow-hidden" href="../../assets/umbul/u_SiGedhang.html" target="_blank">
                        <img className="img-fluid" src="../../assets/img/Gedhang/sigedang1.jpg" alt />
                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">Umbul Kapiler</div>
                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={{borderRadius: 20}}>Read More</div>
                    </a>
                    </div>
                    <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s" data-aos="zoomIn" data-aos-delay={350}>
                    <a className="position-relative d-block overflow-hidden" href="../../assets/umbul/u_SiGedhang.html" target="_blank">
                        <img className="img-fluid" src="../../assets/img/Gedhang/sigedang3.jpg" alt />
                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">Umbul SiGedhang</div>
                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={{borderRadius: 20}}>Read More</div>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" data-aos="zoomIn" data-aos-delay={450} style={{minHeight: 350}}>
                <a className="position-relative d-block h-100 overflow-hidden" href="../../assets/umbul/u_Besuki.html" target="_blank">
                    <img className="img-fluid position-absolute w-100 h-100" src="../../assets/img/Besuki/besuki4_up.jpg" alt style={{objectFit: 'cover'}} />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">Umbul Besuki</div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2" style={{borderRadius: 20}}>Read More</div>
                </a>
                </div>
            </div>
            </div>
        </div>
        {/* Produk */}
        <div className="container-xxl py-5">
            <div className="container">
            <div className="text-center pb-4" data-aos="fade-down" data-aos-delay={150}>
                <h6 className="section-title bg-white text-center text-primary px-3">Produk</h6>
                <h1 className="mb-5">Produk Kami</h1>
            </div>
            <div className="row gy-5 gx-4 justify-content-center">
                <div className="col-lg-4 col-sm-6 text-center pt-4" data-aos="fade-down" data-aos-delay={250}>
                <div className="position-relative border border-primary pt-4 pb-4 px-4">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src="../../assets/img/Bakpia.jpg" alt />
                    </div>
                    <h5 className="mt-4">Bakpia</h5>
                    <hr className="w-25 mx-auto bg-primary mb-1" />
                    <hr className="w-50 mx-auto bg-primary mt-0" />
                    <p className="mb-0">Bakpia Ponggok bukan sekadar sepotong camilan, melainkan juga merupakan simbol kekayaan budaya dan kreativitas kewirausahaan yang berakar di Desa Ponggok. Dibandingkan dengan bakpia dari daerah lain, Bakpia Ponggok memiliki keunikan tersendiri yang tidak dapat disaingi. Proses pembuatannya tidak hanya mengandalkan resep turun-temurun, tetapi juga mengusung nilai-nilai kebersamaan dan keuletan dalam menjaga tradisi. Setiap gigitan dari Bakpia Ponggok menyiratkan aroma dan cita rasa yang melekat dalam setiap helai kertas pembungkusnya</p>
                </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center pt-4" data-aos="fade-down" data-aos-delay={350}>
                <div className="position-relative border border-primary pt-4 pb-4 px-4">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src="../../assets/img/chip.jpg" alt />
                    </div>
                    <h5 className="mt-4">Nila Murni Ponggok</h5>
                    <hr className="w-25 mx-auto bg-primary mb-1" />
                    <hr className="w-50 mx-auto bg-primary mt-0" />
                    <p className="mb-0">Nila Murni Ponggok adalah kewirausahaan warga Ponggok yang memproduksi produk lokal Ponggok berupa makanan ringan berbahan baku ikan nila. Produk yang dikembangkan dari komoditi ikan nila desa Ponggok, dan menjadi merk dagang pertama yang dihasilkan oleh kelompok UKM Desa Ponggok ini, digagas oleh Ketua Tim Penggerak PKK Desa Ponggok, Ibu Ratnasari Irawati dan dibina secara intensif oleh tim penggerak PKK desa Ponggok sejak tahun 2018</p>
                </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center pt-4" data-aos="fade-down" data-aos-delay={450}>
                <div className="position-relative border border-primary pt-4 pb-4 px-4">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src="../../assets/img/kripik.jpg" alt />
                    </div>
                    <h5 className="mt-4">Keripik Blimbing</h5>
                    <hr className="w-25 mx-auto bg-primary mb-1" />
                    <hr className="w-50 mx-auto bg-primary mt-0" />
                    <p className="mb-0">Kripik Blimbing adalah Salah satu produk unggulan desa ponggok produk ini berasal Kelompok Tani (Poktan) Lumpang Sewu Kecamatan Ponggok yang telah berhasil mengolah limbah atau hasil panen yang kurang baik menjadi Keripik Belimbing.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Testi Pengunjung (Carousels) */}
            <TestimonialCarousel />
        {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
        <Footer/>
    </div>
  )
}

export default Home