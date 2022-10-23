import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  width: number = window.innerWidth

  texts = [
    { h2: 'Szkoła jazdy Trzebnica (Prusice) – co oferujemy?',
      p:  'OSK Julita Lasek zaprasza do nowoczesnej szkoły jazdy w Prusicach. Oferujemy kompleksowy kurs prawa jazdy, który przygotuje każdego do rozpoczęcia przygody za kierownicą i zdania państwowego egzaminu. Kurs składa się z 30 godzin części teoretycznej oraz 30 godzin części praktycznej (jazd). Nasi kursanci otrzymają także dostęp do materiałów szkoleniowych oraz 4 godziny profesjonalnych zajęć z ratownikiem medycznym, który w kompleksowy sposób przeprowadzi zajęcia z pierwszej pomocy.'
    },
    { h2: 'W jaki sposób odbywa się część teoretyczna kursu?',
      p:'Nasz kurs przewiduje teoretyczną naukę jazdy wyłącznie w wersji e-learningowej. Kursanci OSK dostaną dostęp do wykładów oraz materiałów, które będą mogli w dowolnej chwili odtworzyć w domu. Platforma, na której będą się poruszać, zawiera także testy i egzaminy, dzięki którym będą mogli sprawdzić swoją wiedzę na temat opanowanego materiału. Zajęcia z ratownikiem medycznym, które wchodzą w skład części teoretycznej, będą odbywać się na miejscu w OSK – szkole jazdy w Prusicach.'
    },
    { h2: 'Czy OSK Julita Lasek oferuje naukę jazdy w Trzebnicy?',
      p:'Szkoła jazdy OSK Julita Lasek ma swój budynek w Prusicach, ale przewidujemy naukę jazdy z dojazdem do kursanta w zakresie 10 kilometrów – oferujemy dojazd do uczestników kursu prawa jazdy z Trzebnicy, Żmigrodu, Prusic i okolicy Prusic. Jazdy natomiast odbywać się będą w większym zakresie kilometrów – w tym w Miliczu, gdzie kursanci będą ćwiczyć na placu manewrowym.'
    },
    { h2: 'Co potrzeba, aby rozpocząć kurs na prawo jazdy? ',
      p:'Aby rozpocząć kurs na prawo jazdy, należy wyrobić numer PKK. Z doświadczenia wiemy, że składanie tego rodzaju dokumentów stanowi kłopot dla początkujących kierowców, dlatego przeprowadzimy Cię przez cały proces. Jak więc to zrobić? Wystarczy stawić w biurze OSK Prusice z wnioskiem do Wydziału Komunikacji, który pomożemy Ci wypełnić na miejscu. Do wyrobu numeru potrzebujesz także zdjęcia dowodowego oraz badania lekarskiego.'
    },
    { h2: 'Jak mogę zapisać się na kurs w szkole jazdy? (Trzebnica, Prusice, Żmigród)',
      p:'Jest kilka możliwości zapisania się do naszej szkoły jazdy w Prusicach. Na kurs prawa jazdy zapiszesz się poprzez kontakt telefoniczny, mailowy lub przez wiadomość prywatną na naszym profilu facebookowym. Oczywiście, zapraszamy także do biura OSK, które znajduje się w Prusicach przy ulicy Ludowej 4 – zapiszesz się tam na miejscu!'
    },
    {
      h2: 'Czy kurs prawo jazdy Prusice w szkole jazdy OSK przygotowuje do zdania egzaminu w Miliczu?',
      p: 'Nasza szkoła jazdy w Trzebnicy (Prusice) oferuje kompleksowe przygotowanie do państwowego egzaminu na prawo jazdy. Milicz jest najczęstszym wyborem naszych kursantów, jeśli chodzi o przystąpienie do egzaminu teoretycznego oraz praktycznego. Tam też przeprowadzamy lekcje na placu manewrowym DORD.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
