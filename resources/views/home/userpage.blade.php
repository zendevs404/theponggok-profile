<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Website Umbul Ponggok</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="home/img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- RemixIcon -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"/>

    <!-- Libraries Stylesheet -->
    <link href="home/lib/animate/animate.min.css" rel="stylesheet">
    <link href="home/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="home/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="home/css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="home/css/main.css" rel="stylesheet">

    <!-- AOS JS -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>
 
    <!-- Topbar -->
    @include('home.topbar')

    <!-- Navbar & Hero Start -->
    @include('home.navbar')

    <!-- Tentang Kami -->
    @include('home.tentangkami')

    <!-- Kegiatan -->
    @include('home.kegiatan')

    <!-- Destinasi -->
    @include('home.destinasi')

    <!-- Produk -->
    @include('home.produk')
    
    <!-- Testi Pengunjung (Carousels) -->
     @include('home.testi')

     <!-- Comments -->

     <div style="text-align:center; padding-bottom:30px;">
        <h1 style="font-size: 30px; text-align:center; padding-top:20px; padding-bottom: 20px; margin:auto;">Apa komentar anda?</h1>

        <form action="{{url('add_comment')}}" method="POST" >

            @csrf
            <textarea name="comment" style="height: 150px; width:600px;" placeholder="Tulis komentar disini"></textarea>

            <br>

            <input type="submit" class="btn btn-primary" value="Comment">
        </form>

     </div>

    <div style="padding-left:20%;">
        <h1 style="font-size:20px; padding-bottom:20px;">Semua Komentar</h1>

        @foreach ($comment as $comment)
        
        <div>
            <b>{{$comment->name}}</b>
            <p>{{$comment->comment}}</p>

            <a href="javascript::void(0);"onclick="reply(this)" data-Commentid="{{$comment->id}}">Reply</a>

            @foreach ($reply as $rep)
            
            <div style="padding-left:3%; padding-bottom:10px; padding-bottom:10px;">
                <b>{{$rep->name}}</b>
                <p>{{$rep->reply}}</p>
            </div>
            @endforeach

        </div>

        @endforeach

        <!-- Reply Textbox -->

        <div style="display: none;" class="replyDiv" >

            <form action="{{url('add_reply')}}" method="POST">

            @csrf
            <input type="text" id="commentId" name="commentId" hidden="">
            <textarea style="height: 100px; width:500px; " placeholder="Tulis komentar disini"></textarea>

            <br>

            <button type="submit" class="btn btn-primary" style="border-radius:25px;">Reply</button>
            <a href="javascript::void(0);" class="btn btn-primary" onclick="reply_close(this)" >Close</a>

            </form>
        </div>
    </div>

    <!-- Footer-->
     @include('home.footer')

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

    <script type="text/javascript">
        
        function reply(caller){
            document.getElementById('commentId').value=$(caller).attr('data-Commentid');
            $('.replyDiv').insertAfter($(caller));

            $('.replyDiv').show();
        }

        function reply_close(caller){
            $('.replyDiv').hide();
        }
    </script>


    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="home/lib/wow/wow.min.js"></script>
    <script src="home/lib/easing/easing.min.js"></script>
    <script src="home/lib/waypoints/waypoints.min.js"></script>
    <script src="home/lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="home/lib/tempusdominus/js/moment.min.js"></script>
    <script src="home/lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="home/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

    <!-- Template Javascript -->
    <script src="home/js/main.js"></script>

    <!-- AOS js -->
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script src="home/js/aos_wisata.js"></script>
</body>

</html>