<?php

namespace App\Http\Controllers;

use App\Models\brief;
use Illuminate\Http\Request;

class BriefController extends Controller
{



    public function index() {
        $data = brief::all();
        return response()->json($data);
    }

    public function store (Request $request)
    {
        $brief = new brief();
        $brief->name_brief = $request->name_brief;
        $brief->start_brief = $request->start_brief;
        $brief->end_brief = $request->end_brief;
        $brief->save();
        return response()->json($brief);
    }

    public function getBreif($id)
    {
        $data = brief::find($id);
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $update_brief = brief::find($id);
        $update_brief->name_brief = $request->name_brief;
        $update_brief->start_brief = $request->start_brief;
        $update_brief->end_brief = $request->end_brief;
        $update_brief->save();
        return response()->json($update_brief);
    }
}
