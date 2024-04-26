<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('compagnes', function (Blueprint $table) {
            $table->id();
            $table->string("dateCompagne");
            $table->string("horaireDebut");
            $table->string("horaireFin");
            $table->unsignedBigInteger("lieu_id");
            $table->unsignedBigInteger("staff_id");
            $table->unsignedBigInteger("equipe_id");
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('compagnes');
    }
};
