<?php

namespace App\Form;

use App\Entity\Car;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CarType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('type', ChoiceType::class, [
                'choices' => [
                    'Neuf' => 'Neuf',
                    'Occasion' => 'Occasion'
                ]
            ])
            ->add('Color', TextType::class, [
                'label' => 'Couleur',
                'attr' => ['placeholder' => 'Couleur du véhicule']
            ])
            ->add('brand', TextType::class, [
                'label' => 'Marque',
                'attr' => ['placeholder' => 'Marque du véhicule']
            ])
            ->add('model', TextType::class, [
                'label' => 'Modèle',
                'attr' => ['placeholder' => 'Modèle du véhicule']
            ])
            ->add('price', IntegerType::class, [
                'label' => 'Prix',
                'attr' => ['placeholder' => 'Prix du véhicule']
            ])
            ->add('released', DateType::class, [
                'format' => 'dd-MM-yyyy',
                'years' => range(1960, 2020)
            ])
            ->add('energyType', ChoiceType::class, [
                'label' => 'Energie',
                'choices' => [
                    'Gazole' => 'Gazole',
                    'Essence' => 'Essence',
                    'Hybride' => 'Hybride',
                    'Electricité' => 'Electricité'
                ]
            ])
            ->add('mileage', IntegerType::class, [
                'label' => 'Kilométrage',
                'attr' => ['placeholder' => 'Kilométrage du véhicule']
            ])
            ->add('equipments', TextType::class, [
                'label' => 'Equipements',
                'attr' => ['placeholder' => 'Entrez les équipements du véhicule séparés par des virgules']
            ])
            ->add('warranty', TextType::class, [
                'label' => 'Garantie',
                'attr' => ['placeholder' => 'Durée de garantie du véhicule']
            ])
            ->add('thumbnail', FileType::class, [
                'required' => false,
                'label' => 'Photo',
                'attr' => ['placeholder' => 'Image']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Car::class,
        ]);
    }
}
