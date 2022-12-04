<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apprenant', function (Blueprint $table) {

            $table->increments('id_appr');
            $table->string('nom');
            $table->string('prenom');
            $table->string('email');
            $table->string('cin');
            $table->string('naissance');
            $table->UnsignedInteger('id_promotion');
            $table->foreign('id_promotion')->references('id')->on('Promotion')
            ->onDelete('cascade');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('apprenant', function (Blueprint $table) {
            //
        });
    }
};
