import { Project} from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Projet ALMA',
    summary: 'Création daccès à l\'eau potable dans le quaertier de Matoto en Guinée.',
    description: `Notre projet ALMA vise à garantir un accès durable à l'eau potable pour un village isolées de Guinée de 2000 habitants.

    💧 Un projet achevé pour transformer des vies \n
Le projet ALMA a été une réponse concrète à l'urgence de l'accès à l'eau potable en Guinée, où des millions de personnes étaient confrontées à l'absence d'eau saine. À Conakry, dans le quartier de Matoto-Khabitaya, nous avons construit un forage moderne permettant d'offrir un accès gratuit et durable à l’eau potable, 365 jours par an.

🏙️ Le choix de Matoto \n
Située au cœur de Conakry, Matoto est la commune la plus peuplée, mais aussi l'une des plus touchées par la pauvreté. C'est là que nous avons choisi d'agir pour répondre à un besoin vital. Le forage, situé à proximité d’une école primaire, d’une mosquée et de nombreux logements, permet désormais à plus de 200 foyers d’accéder à de l’eau propre, sans avoir à parcourir de longues distances.

🚰 Le forage : une solution durable \n
Le forage que nous avons installé offre une eau de qualité, grâce à une pompe électrique et un château d’eau équipé de 4 cuves de 1000L. En cas de coupure de courant, l’eau est stockée et reste accessible, garantissant un approvisionnement constant, même en période de panne.

🛠️ Comment nous avons réalisé le projet \n
En partenariat avec SAFIAGRI BUSINESS & SERVICES SARL, l’entreprise spécialisée en forages, nous avons suivi un processus rigoureux pour garantir la pérennité du projet : Foration du sol, Installation de la pompe électrique et des cuves de stockage, Tests de débit et analyse de la qualité de l'eau, Maçonnerie, plomberie et finishing pour assurer l’efficacité du dispositif.

📚 Un impact sanitaire et éducatif \n
Le forage n’est pas seulement une source d’eau, mais également un vecteur de santé. En fournissant de l’eau potable, nous contribuons à réduire les maladies liées à l’hygiène et à améliorer les conditions de vie des habitants. Par ailleurs, des fournitures scolaires ont été distribuées aux élèves du quartier pour leur offrir un environnement propice à l’apprentissage.

💸 Chiffres clés du projet : \n

    Coût total : financé grâce à la solidarité de nos donateurs \n
    20L d’eau : à un prix accessible de 0,20 € \n
    Accès quotidien à 50L d’eau par personne pour plus de 200 foyers \n
    Une étape franchie, mais beaucoup reste à faire \n

    D'après 'Abdallah Ibn'Abbas, le prophète(ﷺ) a dit: "La meilleure aumône est de donner de l'eau à boire" 


    Grâce à votre aide, nous avons pu construire un forage durable ! Le projet ALMA est désormais un succès concret qui a transformé le quotidien de milliers de personnes. Mais nous savons qu'il reste encore beaucoup à accomplir. Nous continuons d’agir pour permettre à chacun d’accéder à des conditions de vie dignes et équitables.
      `,
    location: 'Guinée',
    image: '/images/accueilguinee.jpg',
    gallery: [
      '/images/guinee1.jpg',
      '/images/guinee2.jpg',
      '/images/guinee3.jpg',
      '/images/guinee4.jpg',
      '/images/guinee5.jpg',
      '/videos/forageguinee.mp4',

    ],
    date: '2021 / 2022',
    impact: 'Plus de 2000 personnes ont désormais accès à l\'eau potable.'
  },
  {
    id: '2',
    title: 'Orphelinats à Tanger',
    summary: 'Construction d\'écoles et fourniture de matériel scolaire au Mali.',
    description: `Le projet 
    

    `,
    location: 'Maroc',
    image: '/images/ecolemaroc.png',
    gallery: [
      '/images/ecolemaroc.png',
    ],
    date: 'Septembre 2022',
    impact: ''
  },
  {
    id: '3',
    title: 'Maraude à Nancy',
    summary: 'Maraude avec des packs de premières necessité pour les sans abris',
    description: `
    Il faisait froid, humiude, c'était une période compliquée. Ce n'était pas planifié mais nous avons voulu faire un petit geste à notre échelle grâce à des stocks que nous avions.
    \n Nous avons rajouter des produits afin de faire des packs de première nécéssité à distribuer aux sans-abris.
    Les packs étaient composés de vétements chauds, de produits d'hygiènes, de nourritures et comme les chiens sont pour beaucoup leur meilleurs amis, il y avait aussi de la nourriture pour chien.
    \n

    Pendant cette maraude, nous avons rencontré un homme à qui nous avons donné un pack et discuté. Il nous a indiqué d'autres lieux où on pourrait trouver d'autres sans abris à aider. 
    A la fin de la discussion, cet homme altruiste et humble nous a remercié et a terminé en nous disant "comme vous m'avez donné quelque chose, je vous donne aussi quelque chose en retour"
    Il a cherché dans ses poches et nous a donné des chocolats à chacune de nous. \n
    Pour nous remercier, il n'avait rien et nous a tout donné.

    Un grand merci à vous de nous permttre d'aider ces personnes !
    
    `,
    location: 'France',
    image:'/images/ecolemaroc.png',
    gallery: [
      '/images/ecolemaroc.png',
    ],
    date: 'Vendredi 21 décembre 2022',
    impact: '',
  },
  

  
];

{/*
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Fatou Diallo',
    role: 'Bénéficiaire, Sénégal',
    quote: 'Grâce au puits installé par Association Amanah, nos enfants n\'ont plus à marcher des kilomètres chaque jour pour chercher de l\'eau. Cela a changé nos vies.',
    image: 'https://images.pexels.com/photos/7048043/pexels-photo-7048043.jpeg'
  },
  {
    id: '2',
    name: 'Ibrahim Koné',
    role: 'Directeur d\'école, Mali',
    quote: 'Les nouvelles infrastructures et le matériel fournis par Amanah ont transformé notre école. Nos élèves sont maintenant enthousiastes à l\'idée d\'apprendre et leurs résultats s\'améliorent constamment.',
    image: 'https://images.pexels.com/photos/5417678/pexels-photo-5417678.jpeg'
  },
  {
    id: '3',
    name: 'Aminata Traoré',
    role: 'Agricultrice, Burkina Faso',
    quote: 'Les techniques agricoles que j\'ai apprises avec Amanah m\'ont permis de tripler ma production. Maintenant, je peux nourrir ma famille et vendre le surplus au marché.',
    image: 'https://images.pexels.com/photos/6177537/pexels-photo-6177537.jpeg'
  }
];*/}

export const socialLinks = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/asso.amanah/',
    icon: 'facebook'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/associationamanah/',
    icon: 'instagram'
  }
];

