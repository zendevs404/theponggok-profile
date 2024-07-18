<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    @include('admin.css')

    <style>
        .center{
            margin: auto;
            width: 50%;
            border: 2px solid white;
            text-align: center;
            margin-top: 40px;
        }

        .font_style{
            text-align: center;
            font-size: 40px;
            padding-top: 20px;
        }

        .img_size{
            width: 100px;
            height: 100px;
        }

        .th_color{
            background: #d9d9d9;
            color: black;
        }

        .th_deg{
            padding: 30px;
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

          <h2 class="font_style">All Events</h2>


            <table class="center">
                <tr class="th_color">
                    <th class="th_deg">Title</th>
                    <th class="th_deg">Description</th>
                    <th class="th_deg">Location</th>
                    <th class="th_deg">Date</th>
                    <th class="th_deg">Image</th>
                    <th class="th_deg">Delete</th>
                    <th class="th_deg">Edit</th>
                </tr>

                @foreach ($event as $event)

                <tr>
                    <td>{{$event->title}}</td>
                    <td>{{$event->description}}</td>
                    <td>{{$event->location}}</td>
                    <td>{{$event->date}}</td>
                    <td>
                        <img class="img_size" src="/event/{{$event->image}}" alt="">
                    </td>

                    <td>
                        <a class="btn btn-danger" onclick="return confirm('Are you sure to Delete?')" href="{{url('delete_event', $event->id)}}">Delete</a>
                    </td>
                    <td>
                        <a class="btn btn-success" href="{{url('update_event', $event->id)}}">Edit</a>
                    </td>
                </tr>

                @endforeach
            </table>
          </div>
        </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
    @include('admin.script');
    <!-- End custom js for this page -->
  </body>
</html>