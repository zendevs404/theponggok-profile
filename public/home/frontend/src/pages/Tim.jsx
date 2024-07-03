import React from 'react'
import HeaderTim from '../components/HeaderTim'
import Footer from '../components/Footer'

function Tim() {
  return (
    <div>
        <HeaderTim/>
        {/* Tim Pengurus */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">
                    Developer
                </h6>
                <h1 className="mb-5">Berjumpalah Dengan Developer Ganteng Kami!</h1>
                </div>
                <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                    <div className="overflow-hidden">
                        <img
                        className="img-fluid"
                        src="../../assets/img/Tim/raf-modified-removebg-preview.png"
                        alt=""
                        />
                    </div>
                    <div
                        className="position-relative d-flex justify-content-center"
                        style={{ marginTop: "-19px" }}
                    >
                        <a
                        className="btn btn-square mx-1"
                        href="https://github.com/m-RafliRangga-p"
                        target="_blank"
                        >
                        <i className="ri-github-fill" />
                        </a>
                    </div>
                    <div className="text-center p-4">
                        <h5 className="mb-0">Muhammad Rafli R.P - 22.11.4668</h5>
                        <small>Fullstack Developer</small>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                    <div className="overflow-hidden">
                        <img
                        className="img-fluid"
                        src="../../assets/img/Tim/IMG_4687-modified-removebg-preview.png"
                        alt=""
                        />
                    </div>
                    <div
                        className="position-relative d-flex justify-content-center"
                        style={{ marginTop: "-19px" }}
                    >
                        <a
                        className="btn btn-square mx-1"
                        href="https://github.com/zendevs404"
                        target="_blank"
                        >
                        <i className="ri-github-fill" />
                        </a>
                    </div>
                    <div className="text-center p-4">
                        <h5 className="mb-0">Devananda Fikri M.R - 22.11.4669</h5>
                        <small>Fullstack Developer</small>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                    <div className="overflow-hidden">
                        <img
                        className="img-fluid"
                        src="../../assets/img/Tim/lex-modified-removebg-preview.png"
                        alt=""
                        />
                    </div>
                    <div
                        className="position-relative d-flex justify-content-center"
                        style={{ marginTop: "-19px" }}
                    >
                        <a
                        className="btn btn-square mx-1"
                        href="https://github.com/alexsyubarjo"
                        target="_blank"
                        >
                        <i className="ri-github-fill" />
                        </a>
                    </div>
                    <div className="text-center p-4">
                        <h5 className="mb-0">Nanda Pratama - 22.11.4623</h5>
                        <small>Ui/UX,Frontend</small>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item">
                    <div className="overflow-hidden">
                        <img
                        className="img-fluid"
                        src="../../assets/img/Tim/yul-modified_final-removebg-preview.png"
                        alt=""
                        />
                    </div>
                    <div
                        className="position-relative d-flex justify-content-center"
                        style={{ marginTop: "-19px" }}
                    >
                        <a
                        className="btn btn-square mx-1"
                        href="https://github.com/YuwiAwan"
                        target="_blank"
                        >
                        <i className="ri-github-fill" />
                        </a>
                    </div>
                    <div className="text-center p-4">
                        <h5 className="mb-0">Yuli Dwi Kurniawan - 22.11.4669</h5>
                        <small>Ui/Ux,Frontend</small>
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

export default Tim