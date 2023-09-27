import expressoTradicional from '../assets/coffee-expresso.png';
import expressoAmericano from '../assets/coffee-americano.png';
import expressoCremoso from '../assets/coffee-creamy-expresso.png';
import expressoGelado from '../assets/coffee-cold.png';
import cafeComLeite from '../assets/coffee-with-milk.png';
import latte from '../assets/latte.png';
import capuccino from '../assets/cappuccino.png';
import macchiato from '../assets/macchiato.png';
import mocaccino from '../assets/moccacino.png';
import chocolateQuente from '../assets/hot-chocolate.png';
import cubano from '../assets/coffee-cuban.png';
import havaiano from '../assets/coffee-hawaiian.png';
import arabe from '../assets/coffee-arabic.png';
import irlandes from '../assets/coffee-irish.png';

export type Coffee = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: string;
  image: string;
};

export default [
  {
    id: 0,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: '9.90',
    image: expressoTradicional
  },
  {
    id: 1,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: '9.90',
    image: expressoAmericano
  },
  {
    id: 2,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: '9.90',
    image: expressoCremoso
  },
  {
    id: 3,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: '9.90',
    image: expressoGelado
  },
  {
    id: 4,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: '9.90',
    image: cafeComLeite
  },
  {
    id: 5,
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: '9.90',
    image: latte
  },
  {
    id: 6,
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: '9.90',
    image: capuccino
  },
  {
    id: 7,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: '9.90',
    image: macchiato
  },
  {
    id: 8,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: '9.90',
    image: mocaccino
  },
  {
    id: 9,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: '9.90',
    image: chocolateQuente
  },
  {
    id: 10,
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: '9.90',
    image: cubano
  },
  {
    id: 11,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: '9.90',
    image: havaiano
  },
  {
    id: 12,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: '9.90',
    image: arabe
  },
  {
    id: 13,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: '9.90',
    image: irlandes
  }
] as Coffee[];
