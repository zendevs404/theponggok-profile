<div class="container-xxl py-5">
    <div class="container">
        <div class="text-center" data-aos="fade-down" data-aos-delay="150">
            <h6 class="section-title bg-white text-center text-primary px-3">Kegiatan</h6>
            <h1 class="mb-5">Kegiatan Terbaru</h1>
        </div>
        
        <div class="row gy-5 gx-4 justify-content-center">
            @foreach ($event as $event)
                <div class="col-lg-4 col-md-6" data-aos="fade-down" data-aos-delay="250">
                    <div class="package-item">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="event/{{ $event->image }}" alt="{{ $event->title }}">
                        </div>
                        <div class="d-flex border-bottom">
                            <small class="flex-fill text-center border-end py-2">
                                <i class="fa fa-map-marker-alt text-primary me-2"></i>{{ $event->location }}
                            </small>
                            <small class="flex-fill text-center border-end py-2">
                                <i class="fa fa-calendar-alt text-primary me-2"></i>{{ \Carbon\Carbon::parse($event->date)->format('d M Y') }}
                            </small>
                        </div>
                        <div class="text-center p-4">
                            <p>{{ $event->description }}</p>
                            <div class="d-flex justify-content-center mb-2">
                                <a href="" class="btn btn-sm btn-primary px-3" style="border-radius: 35px;">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</div>
