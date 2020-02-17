<?php

namespace App\Controller;

use App\Entity\Admin;
use App\Form\AdminType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;


/**
 * @Route("/admin")
 */

class AdminController extends AbstractController
{

    private $manager;
    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;
    }

    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/", name="admin")
     */
    public function index()
    {
        return $this->render('admin/admin.html.twig', [
            'controller_name' => 'AdminController',
        ]);
    }


    /**
     * @Route("/auth", name="authentification")
     */
    public function authentification() {


        return $this->render('admin/auth.html.twig', [
            'controller_name' => 'AdminController'
        ]);
    }



    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/registration", name="admin_registration")
     */
    public function registration(Request $request, UserPasswordEncoderInterface $encoder) {
        $admin = new Admin();

        $form = $this->createForm(AdminType::class, $admin);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $hash = $encoder->encodePassword($admin, $admin->getPassword());

            $admin->setPassword($hash);
            $admin->setRoles(['ROLE_ADMIN']);

            $this->manager->persist($admin);
            $this->manager->flush();
            return $this->redirectToRoute('authentification');
        }
        
        return $this->render('admin/registration.html.twig', [
            'form' => $form->createView()
        ]);
    }


    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/logout", name="admin_logout")
     */
    public function logout() {
        
    }
}
