import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

function TestimonialCarousel() {
  return (
    <div>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Customer Satisfacionary Survey</h6>
                <h1 className="mb-5">Apa Kata Mereka?</h1>
                </div>
                <OwlCarousel
                className="owl-carousel testimonial-carousel position-relative"
                autoplay={true}
                smartSpeed={1000}
                center={true}
                margin={24}
                dots={true}
                loop={true}
                nav={false}
                responsive={{
                    0: {
                    items: 1
                    },
                    768: {
                    items: 1
                    },
                    992: {
                    items: 2
                    }
                }}
                >
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="../../assets/img/1.jpg" alt="Testimonial 1" style={{width: 80, height: 80}} />
                    <h5 className="mb-0">Yanto</h5>
                    <p>Solo, Indonesia</p>
                    <p className="mb-0">Umbul ponggok destinasi yang sangat wajib dikunjungi.</p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="../../assets/img/3.jpg" alt="Testimonial 2" style={{width: 80, height: 80}} />
                    <h5 className="mb-0">Yanti</h5>
                    <p>Jakarta Selatan</p>
                    <p className="mt-2 mb-0">"Mengunjungi Umbul Ponggok, Besuki, dan Sigedang Kapilaler adalah seperti memasuki surga tersembunyi di tengah alam yang megah.</p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="../../assets/img/2.jpg" alt="Testimonial 3" style={{width: 80, height: 80}} />
                    <h5 className="mb-0">Anom Priyanto</h5>
                    <p>Palestina</p>
                    <p className="mt-2 mb-0">Saya telah berkunjung ke banyak tempat wisata, namun keindahan Umbul Ponggok, Besuki, dan Sigedang Kapilaler benar-benar menakjubkan.</p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="../../assets/img/4.jpg" alt="Testimonial 4" style={{width: 80, height: 80}} />
                    <h5 className="mb-0">Rachmasari</h5>
                    <p>Yogyakarta</p>
                    <p className="mt-2 mb-0">Umbul Ponggok, Besuki, dan Sigedang Kapilaler tidak hanya sekadar tempat wisata, tetapi juga tempat yang memiliki energi yang sangat positif.</p>
                </div>
                </OwlCarousel>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCarousel