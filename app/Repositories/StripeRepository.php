<?php

namespace App\Repositories;
use App\Models\Stripe;
use Faker\Provider\Base;

class StripeRepository extends BaseRepository{
    public function __construct(Stripe $model) 
    {
        $this->model = $model;
    }
}