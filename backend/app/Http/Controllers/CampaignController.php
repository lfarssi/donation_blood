<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Campaign;

class CampaignController extends Controller
{

    public function index(){
  
        $campaigns=Campaign::join('places', 'places.id', '=', 'campaigns.id_place')
        ->select('campaigns.*', 'places.placeName')
        ->get();
        return response()->json([
            "data"=>$campaigns,
            'message' => 'Data sent successfully'
          ], 200);

    }

    public function store(Request $req){

        $title=$req->title;
        $date=$req->date;
        Campaign::create([
            "title"=>$title,
            "created_at"=>$date
        ]);
        return response()->json([
            'message' => 'Data saved successfully'
          ], 201);

    }
}
