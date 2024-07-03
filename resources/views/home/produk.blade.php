<div class="container-xxl py-5">
    <div class="container">
        <div class="text-center pb-4" data-aos="fade-down" data-aos-delay="150">
            <h6 class="section-title bg-white text-center text-primary px-3">Produk</h6>
            <h1 class="mb-5">Produk Kami</h1>
        </div>

        <div class="row gy-5 gx-4 justify-content-center">
            @foreach ($product as $product)
                <div class="col-lg-4 col-sm-6 text-center pt-4" data-aos="fade-down" data-aos-delay="250">
                    <div class="position-relative border border-primary pt-4 pb-4 px-4">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="product/{{$product->image}}" alt="">
                        </div>
                        <h5 class="mt-4">{{ $product->title}}</h5>
                        <hr class="w-25 mx-auto bg-primary mb-1">
                        <hr class="w-50 mx-auto bg-primary mt-0">
                        <p class="mb-0">{{ $product->description }}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</div>