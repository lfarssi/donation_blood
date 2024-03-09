<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Campaigns;

class CampaignController extends Controller
{
    public function store(Request $req){

        $title=$req->title;
        $date=$req->date;
        Campaigns::create([
            "title"=>$title,
            "created_at"=>$date
        ]);
        return response()->json([
            'message' => 'Data saved successfully'
          ], 201);

    }
}
