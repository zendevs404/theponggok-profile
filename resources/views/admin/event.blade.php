<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    @include('admin.css')

    <style type="text/css">
        .div_center{
            text-align: center;
            padding-top: 40px;
        }

        .h2_font{
            font-size: 30px;
            padding-bottom: 40px;
            font-weight: 800;
        }

        .input_color{
            color: black;
        }
    </style>
  </head>
  <body>
    <div class="container-scroller">
      <!-- partial:partials/_sidebar.html -->
      @include('admin.sidebar');

      <!-- partial -->
      @include('admin.header');
        <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper">

          @if(session()->has('message'))

          <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>

            {{session()->get('message')}}

          </div>
          @endif
          
            <div class="div_center">
                <h2 class="h2_font">Add Event</h2>

                <form action="{{url('/add_event')}}" method="POST" enctype="multipart/form-data">

                @csrf
                    <label for="">Event Title :</label><br>
                    <input type="text" class="input_color" name="title" placeholder="add event title">
                    <br>
                    <br>
                    <label for="">Event Description :</label><br>
                    <input type="text" class="input_color" name="description" placeholder="add event description">
                    <br>
                    <br>
                    <label for="">Event Location :</label><br>
                    <input type="text" class="input_color" name="location" placeholder="add event location">
                    <br>
                    <br>
                    <label for="">Event Date :</label><br>
                    <input type="date" class="input_color" name="date" placeholder="add event location">
                    <br>
                    <br>
                    <label for="">Event Image :</label><br>
                    <input type="file" name="image" required="">
                    <br>
                    <br>
                    <br>
                    <input type="submit" name="submit" class="btn btn-primary" value="Submit">

                </form>
            </div>
          </div>
        </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
    @include('admin.script');
    <!-- End custom js for this page -->
  </body>
</html>