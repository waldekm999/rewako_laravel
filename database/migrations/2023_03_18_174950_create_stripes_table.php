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
        Schema::create('stripes', function (Blueprint $table) {
            $table->id();            
            $table->string('name');
            $table->string('index')->unique();
            $table->integer('width');
            $table->integer('thickness');
            $table->string('colour');
            $table->double('price');
            $table->boolean('isCool');
            $table->string('unit')->default('mb');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stripes');
    }
};
