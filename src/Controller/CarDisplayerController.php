<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CarDisplayerController extends AbstractController
{
    /**
     * @Route("/car/displayer", name="car_displayer")
     */
    public function index()
    {
        return $this->render('car_displayer/index.html.twig', [
            'controller_name' => 'CarDisplayerController',
        ]);
    }
}
