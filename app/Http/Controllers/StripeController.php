<?php

namespace App\Http\Controllers;

use App\Models\Stripe;
use App\Repositories\StripeRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class StripeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(StripeRepository $stripeRepo, Request $request): Response
    {
        $stripesList = $stripeRepo->getAll();   
        
        if($request->user()->is_admin) {
            echo "Jestem adminem";
        } else {
            echo "Nie jestem adminem";
        }
        
        die();

        return Inertia::render('Stripes/Index', [

        ])  ;      
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Stripes/Add', [

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
        'name' => 'required|string|max:64',
        'index' => 'required|string|max:24',
        'width' => 'required|integer',
        'thickness' => 'required|integer',
        'colour' => 'required|string|max:24',
        'price' => 'required|numeric'
        ]);

        $stripe = new Stripe($validated);        
        $stripe->isCool = $request->input('isCool');
        $stripe->save();

        return redirect(route('stripes.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Stripe $stripe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stripe $stripe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Stripe $stripe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stripe $stripe)
    {
        //
    }
}
