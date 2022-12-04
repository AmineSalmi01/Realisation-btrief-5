<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class brief extends Model
{
    use HasFactory;

    protected $table = 'brief';
    protected $primaryKey = "id_brief";
    protected $fillable = [
        'name_brief', 'start_brief', 'end_brief'
    ];
}
