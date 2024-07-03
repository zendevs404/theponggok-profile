<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;
use App\Models\Event;
use App\Models\Comment;
use App\Models\Reply;

class HomeController extends Controller
{

    public function index() {
        $event = Event::all();
        $product = Product::all();
        $comment=comment::all();
        $reply=reply::all();
        return view('home.userpage', compact('product', 'event', 'comment', 'reply'));
    }
    public function redirect () {
        $usertype=Auth::user()->usertype;

        if($usertype=='1') {
            return view('admin.home');
        }

        else {
            $comment=comment::all();
            $reply=reply::all();
            return view('home.userpage', compact('comment', 'reply'));
        }
    }

    public function add_comment(Request $request){
        if(Auth::id()){
            $comment=new comment;

            $comment->name=Auth::user()->name;
            $comment->user_id=Auth::user()->id;
            $comment->comment=$request->comment;

            $comment->save();

            return redirect()->back();
        }
        else{
            return redirect('login');
        }
    }

    public function add_reply(Request $request){
        if(Auth::id()){
            $reply=new reply;

            $reply->name=Auth::user()->name;
            $reply->user_id=Auth::user()->id;
            $reply->comment_id=$request->commentId;
            $reply->reply=$request->reply;

            $reply->save();

            return redirect()->back();
        }
        else{
            return redirect('login');
        }
    }
}
