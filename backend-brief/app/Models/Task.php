<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = 'tasks';



    public function brief()
    {
        return $this->belongsTo(brief::class);
    }

    public function apprenants()
    {
        return $this->belongsToMany(apprenants::class, 'apprenants_tasks', 'task_id', 'apprenant_id')->withPivot('étatTask');
    }
}
