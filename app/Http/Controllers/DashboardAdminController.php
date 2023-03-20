<?php

namespace App\Http\Controllers;


use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;


class DashboardAdminController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('DashboardAdmin', [

        ]);
    }
}