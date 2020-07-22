<?php

namespace App\Controller;

use App\Entity\Car;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\CarRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{

    //Fonction qui renvoie true si l'élément est un véhicule neuf
    public function isNeuf($car)
    {
        return $car->gettype()=='Neuf';
    }

    //Fonction qui renvoie true si l'élément est un véhicule neuf
    public function isOccasion($car)
    {
        return !($this->isNeuf($car));
    }

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
    public function neuf(CarRepository $carRepository) {
        return $this->render('main/neuf.html.twig', [
            'cars' => array_filter($carRepository->findAll(), array($this, "isNeuf"))
        ]);
    }

    /**
     * @Route("/occasion", name="occasion")
     */
    public function occasion(CarRepository $carRepository) {
        return $this->render('main/occasion.html.twig', [
            'cars' => array_filter($carRepository->findAll(), array($this, "isOccasion"))
        ]);
    }

    /**
     * @Route("/car/{type}/{id}", name="detail", methods={"GET"})
     */
    public function detail(Car $car): Response
    {
        return $this->render('main/detail.html.twig', [
            'equipments' => explode(",",$car->getEquipments()),
            'car' => $car,
        ]);
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
