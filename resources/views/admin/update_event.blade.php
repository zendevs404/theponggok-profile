<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->

    <base href="/public">

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
                <h2 class="h2_font">Update Event</h2>

                <form action="{{url('/update_event_confirm', $event->id)}}" method="POST" enctype="multipart/form-data">

                @csrf
                    <label for="">Event Title :</label><br>
                    <input type="text" class="input_color" name="title" placeholder="add product title" required="" value="{{$event->title}}">
                    <br>
                    <br>
                    <label for="">Event Description :</label><br>
                    <input type="text" class="input_color" name="description" placeholder="add product description" required="" value="{{$event->description}}">
                    <br>
                    <br>

                    <label for="">Current Event Image :</label><br>
                    <img style="margin: auto;" height="100" width="100" src="/event/{{$event->image}}" alt="">

                    <br>
                    <br>
                    
                    <label for="">Change Event Image :</label><br>
                    <input type="file" name="image">
                    <br>
                    <br>
                    <br>
                    <label for="">Change Event Date :</label><br>
                    <input type="date" class="input_color" name="date" placeholder="add event location"  value="{{$event->date}}">
                    <br>
                    <br>
                    <input type="submit" name="submit" class="btn btn-primary" value="Submit" required="">

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