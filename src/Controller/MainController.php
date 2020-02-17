<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('main/index.html.twig', []);
    }

    /**
     * @Route("/neuf", name="neuf")
     */
    public function neuf() {
        return $this->render('main/neuf.html.twig', []);
    }

    /**
     * @Route("/occasion", name="occasion")
     */
    public function occasion() {
        return $this->render('main/occasion.html.twig', []);
    }

    /**
     * @Route("/about", name="about")
     */
    public function about() {
        return $this->render('main/about.html.twig', []);
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact() {
        return $this->render('main/contact.html.twig', []);
    }


}
