<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    use HasFactory;
    public function campaigns(){
        $this->hasMany(Campaign::class,'id', 'id_place');
    }
}
