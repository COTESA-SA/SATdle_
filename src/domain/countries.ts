// Source:

const countryCodesWithImage = [
  "Pamplona (ESPAÑA)", 
  "Amsterdam", 
  "Ancona",
  "Andorra",
  "Antwerpen",
  "Aosta",
  "Appenzell", x
  "Arlon", x
  "Barcelona",
  "Basel",
  "Luxembourg",
  "Madrid",
  "Merida",
  "Oviedo",
  "Paris",
  "Toledo",
  "Valencia",
  "Zaragoza",
  "Albacete",
  "Alexandria", x
  "Alexandroupoli", x
  "Algeciras",
  "Almeria",
  "Arendal", x 
  "Arnhem", x
  "Assen",
  "Aveiro",
  "Badajoz",
  "Beja",
  "Bellinzona", x
  "Besancon",
  "Biarritz",
  "Braganca",
  "Branco", x
  "Bregenz", 
  "Brod", x
  "Burgos",
  "Cadiz",
  "Campobasso", x
  "Cartagena",
  "Cherkasy", x
  "Chernivtsi", x
  "Chernobyl",
  "Chur", x
  "Coimbra",
  "Compostela",
  "Covilha",
  "Debrecen",
  "Deva", x
  "Diekirch", x
  "Dubasari", x
  "Eisenstadt", x
  "Elblag", x
  "Erfurt", x
  "Evora", 
  "Falun", x
  "Faro",
  "Frauenfeld", x
  "Fribourg",
  "Gavle", x
  "Gijon",
  "Glarus", x
  "Grevenmacher", x
  "Guadalajara",
  "Guarda", x
  "Haapsalu", x
  "Halmstad", x
  "Hameenlinna", x
  "Hania", x
  "Harnosand", x
  "Herisau", x
  "Hillerod", x
  "Huelva",
  "Jaen",
  "Kalmar", x
  "Karlovac", x
  "Karlskrona", x
  "Kirovohrad", x
  "Kristianstad", x
  "Labem", x
  "Lamia", x
  "Leicester", 
  "Leiria", 
  "Leon",
  "Liberec",
  "Liege",
  "Liestal", x
  "Linares", x
  "Liverpool",
  "Logrono",
  "London",
  "Lorca", x
  "Luhansk",
  "Lyon",
  "Maastricht",
  "Malaga",
  "Malmo",
  "Marbella",
  "Mataro",
  "Melilla",
  "Middelburg",
  "Mikkeli", x
  "Milan",
  "Minsk",
  "Monaco",
  "Mons",
  "Montana", x
  "Munich",
  "Murcia",
  "Nykoping", x
  "Olomouc",
  "Opole", x
  "Oslo",
  "Perth", x
  "Poitier", nombre
  "Portalegre", x
  "Portimao",
  "Porto",
  "Potenza",
  "Prague",
  "Real", x
  "Rijeka", 
  "Rome",
  "Sanmarino",
  "Santarem",x
  "Sarajevo",
  "Schaffhausen", x
  "Schwerin", x
  "Sebastian", nombre
  "Seville",
  "Shumen", x
  "Sibenik", 
  "Sion",
  "Sliven", x
  "Soro", x
  "Stuttgart", 
  "Tarragona",
  "Tonsberg", x
  "Toulouse",
  "Trieste",
  "Tripoli", x
  "Trnava", x
  "Utrecht",
  "Uzhgorod", x
  "Valladolid",
  "Vannersborg", x
  "Vejle", x
  "Viborg", x
  "Vigo",
  "Viljandi", x
  "Visby", x
  "Viseu", 
  "Vitoria", nombre
  "Volos", x
  "Vossavangen", x
  "Vratsa", x
  "Warsaw", 
  "York",
  "Zurich",
];

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countries: Country[] = [
  {
    name: "Pamplona (ESPAÑA)",
    code: "Pamplona (ESPAÑA)",
    longitude: -1.65299999,
    latitude: 42.81299972,
  },
  {
    name: "Altdorf",
    code: "Altdorf",
    longitude: 8.6379995,
    latitude: 46.8790016,
  },
  {
    name: "Amsterdam",
    code: "Amsterdam",
    longitude: 4.88969,
    latitude: 52.374,
  },
  {
    name: "Ancona",
    code: "Ancona",
    longitude: 13.515999,
    latitude: 43.6209983,
  },
  {
    name: "Andorra",
    code: "Andorra",
    longitude: 1.516667,
    latitude: 42.5,
  },
  {
    name: "Antwerpen",
    code: "Antwerpen",
    longitude: 4.402771,
    latitude: 51.260197,
  },
  {
    name: "Aosta",
    code: "Aosta",
    longitude: 7.313076,
    latitude: 45.734955,
  },
  {
    name: "Appenzell",
    code: "Appenzell",
    longitude: 9.408623,
    latitude: 47.3314175,
  },
  {
    name: "Arlon",
    code: "Arlon",
    longitude: 5.816699,
    latitude: 49.6833,
  },
  {
    name: "Barcelona",
    code: "Barcelona",
    longitude: 2.15899991,
    latitude: 41.3580017,
  },
  {
    name: "Basel",
    code: "Basel",
    longitude: 7.588576,
    latitude: 47.559601,
  },
  {
    name: "Luxembourg",
    code: "Luxembourg",
    longitude: 6.131935,
    latitude: 49.611622,
  },
  {
    name: "Madrid",
    code: "Madrid",
    longitude: -3.6909694,
    latitude: 40.4422187,
  },
  {
    name: "Merida",
    code: "Merida",
    longitude: -6.3379998,
    latitude: 38.9119987,
  },
  {
    name: "Oviedo",
    code: "Oviedo",
    longitude: -5.84476,
    latitude: 43.36029,
  },
  {
    name: "Paris",
    code: "Paris",
    longitude: 2.349014,
    latitude: 48.864716,
  },
  {
    name: "Toledo",
    code: "Toledo",
    longitude: -4.02263,
    latitude: 39.8581,
  },
  {
    name: "Valencia",
    code: "Valencia",
    longitude: -0.375,
    latitude: 39.466667,
  },
  {
    name: "Zaragoza",
    code: "Zaragoza",
    longitude: -0.887712,
    latitude: 41.649693,
  },
  {
    name: "Albacete",
    code: "Albacete",
    longitude: -1.8559154,
    latitude: 38.9950921,
  },
  {
    name: "Alexandria",
    code: "Alexandria",
    longitude: 25.333,
    latitude: 43.967,
  },
  {
    name: "Alexandroupoli",
    code: "Alexandroupoli",
    longitude: 25.8753275,
    latitude: 40.845692,
  },
  {
    name: "Algeciras",
    code: "Algeciras",
    longitude: -5.4473991,
    latitude: 36.1311725,
  },
  {
    name: "Almeria",
    code: "Almeria",
    longitude: -2.4628135,
    latitude: 36.8414197,
  },
  {
    name: "Arendal",
    code: "Arendal",
    longitude: 8.94694911492874,
    latitude: 58.42673005,
  },
  {
    name: "Arnhem",
    code: "Arnhem",
    longitude: 5.9108573,
    latitude: 51.984257,
  },
  {
    name: "Assen",
    code: "Assen",
    longitude: 6.560498,
    latitude: 52.9952273,
  },
  {
    name: "Aveiro",
    code: "Aveiro",
    longitude: -8.6537841,
    latitude: 40.640496,
  },
  {
    name: "Badajoz",
    code: "Badajoz",
    longitude: -6.980142450723942,
    latitude: 38.88964355,
  },
  {
    name: "Beja",
    code: "Beja",
    longitude: -7.8650368,
    latitude: 38.0154479,
  },
  {
    name: "Bellinzona",
    code: "Bellinzona",
    longitude: 9.0205888,
    latitude: 46.1920538,
  },
  {
    name: "Besancon",
    code: "Besancon",
    longitude: 6.0243622,
    latitude: 47.2380222,
  },
  {
    name: "Biarritz",
    code: "Biarritz",
    longitude: -1.552726590666314,
    latitude: 43.471143749999996,
  },
  {
    name: "Braganca",
    code: "Braganca",
    longitude: -6.773302360533066,
    latitude: 41.5084468,
  },
  {
    name: "Branco",
    code: "Branco",
    longitude: -7.49189,
    latitude: 39.8239,
  },
  {
    name: "Bregenz",
    code: "Bregenz",
    longitude: 9.7472924,
    latitude: 47.5025779,
  },
  {
    name: "Brod",
    code: "Brod",
    longitude: 18.0121385,
    latitude: 45.1665803,
  },
  {
    name: "Burgos",
    code: "Burgos",
    longitude: -3.696977,
    latitude: 42.343926,
  },
  {
    name: "Cadiz",
    code: "Cadiz",
    longitude: -6.2928976,
    latitude: 36.5297438,
  },
  {
    name: "Campobasso",
    code: "Campobasso",
    longitude: 14.826226697820019,
    latitude: 41.717264799999995,
  },
  {
    name: "Cartagena",
    code: "Cartagena",
    longitude: -0.9841152,
    latitude: 37.6019353,
  },
  {
    name: "Cherkasy",
    code: "Cherkasy",
    longitude: 31.2271744,
    latitude: 49.1460165,
  },
  {
    name: "Chernivtsi",
    code: "Chernivtsi",
    longitude: 25.9376532,
    latitude: 48.2864702,
  },
  {
    name: "Chernobyl",
    code: "Chernobyl",
    longitude: 30.2195609,
    latitude: 51.2705477,
  },
  {
    name: "Chur",
    code: "Chur",
    longitude: 9.5264904,
    latitude: 46.854747,
  },
  {
    name: "Coimbra",
    code: "Coimbra",
    longitude: -8.4294632,
    latitude: 40.2111931,
  },
  {
    name: "Compostela",
    code: "Compostela",
    longitude: -8.5458608,
    latitude: 42.8804219,
  },
  {
    name: "Covilha",
    code: "Covilha",
    longitude: -7.5043211,
    latitude: 40.2805658,
  },
  {
    name: "Debrecen",
    code: "Debrecen",
    longitude: 21.6259782,
    latitude: 47.531399,
  },
  {
    name: "Deva",
    code: "Deva",
    longitude: 22.9008611,
    latitude: 45.8817402,
  },
  {
    name: "Diekirch",
    code: "Diekirch",
    longitude: 6.1600549,
    latitude: 49.8690898,
  },
  {
    name: "Dubasari",
    code: "Dubasari",
    longitude: 29.1493655,
    latitude: 47.2687548,
  },
  {
    name: "Eisenstadt",
    code: "Eisenstadt",
    longitude: 16.536215864955643,
    latitude: 47.83875775,
  },
  {
    name: "Elblag",
    code: "Elblag",
    longitude: 19.4044583,
    latitude: 54.1558708,
  },
  {
    name: "Erfurt",
    code: "Erfurt",
    longitude: 11.0287364,
    latitude: 50.9777974,
  },
  {
    name: "Evora",
    code: "Evora",
    longitude: -7.9092808,
    latitude: 38.5707742,
  },
  {
    name: "Falun",
    code: "Falun",
    longitude: 15.6323059,
    latitude: 60.6070068,
  },
  {
    name: "Faro",
    code: "Faro",
    longitude: -7.9351771,
    latitude: 37.0162727,
  },
  {
    name: "Frauenfeld",
    code: "Frauenfeld",
    longitude: 8.8963347,
    latitude: 47.5561915,
  },
  {
    name: "Fribourg",
    code: "Fribourg",
    longitude: 7.1027113,
    latitude: 46.6789116,
  },
  {
    name: "Gavle",
    code: "Gavle",
    longitude: 17.1467019,
    latitude: 60.6750132,
  },
  {
    name: "Gijon",
    code: "Gijon",
    longitude: -5.66275,
    latitude: 43.5449422,
  },
  {
    name: "Glarus",
    code: "Glarus",
    longitude: 9.108812,
    latitude: 46.9796562,
  },
  {
    name: "Grevenmacher",
    code: "Grevenmacher",
    longitude: 6.4430979,
    latitude: 49.679313,
  },
  {
    name: "Guadalajara",
    code: "Guadalajara",
    longitude: -3.16649,
    latitude: 40.6298,
  },
  {
    name: "Guarda",
    code: "Guarda",
    longitude: -7.195139236071309,
    latitude: 40.7046066,
  },
  {
    name: "Haapsalu",
    code: "Haapsalu",
    longitude: 23.5414798,
    latitude: 58.9399019,
  },
  {
    name: "Halmstad",
    code: "Halmstad",
    longitude: 12.8574827,
    latitude: 56.6739826,
  },
  {
    name: "Hameenlinna",
    code: "Hameenlinna",
    longitude: 24.46654,
    latitude: 60.9948584,
  },
  {
    name: "Hania",
    code: "Hania",
    longitude: 24.0191544,
    latitude: 35.5120831,
  },
  {
    name: "Harnosand",
    code: "Harnosand",
    longitude: 17.9379914,
    latitude: 62.6323084,
  },
  {
    name: "Herisau",
    code: "Herisau",
    longitude: 9.2787571,
    latitude: 47.38555,
  },
  {
    name: "Hillerod",
    code: "Hillerod",
    longitude: 12.3063909,
    latitude: 55.9285735,
  },
  {
    name: "Huelva",
    code: "Huelva",
    longitude: -6.9484945,
    latitude: 37.2575874,
  },
  {
    name: "Jaen",
    code: "Jaen",
    longitude: -3.4920556120372,
    latitude: 37.9557275,
  },
  {
    name: "Kalmar",
    code: "Kalmar",
    longitude: 16.575243899947836,
    latitude: 57.02784235,
  },
  {
    name: "Karlovac",
    code: "Karlovac",
    longitude: 15.5486303,
    latitude: 45.4892522,
  },
  {
    name: "Karlskrona",
    code: "Karlskrona",
    longitude: 15.5866422,
    latitude: 56.1621073,
  },
  {
    name: "Kirovohrad",
    code: "Kirovohrad",
    longitude: 31.7834817,
    latitude: 48.3725226,
  },
  {
    name: "Kristianstad",
    code: "Kristianstad",
    longitude: 14.1566859,
    latitude: 56.0293778,
  },
  {
    name: "Labem",
    code: "Labem",
    longitude: 14.0417,
    latitude: 50.6583,
  },
  {
    name: "Lamia",
    code: "Lamia",
    longitude: 22.4341691,
    latitude: 38.9004584,
  },
  {
    name: "Leicester",
    code: "Leicester",
    longitude: -1.1330789,
    latitude: 52.6361398,
  },
  {
    name: "Leiria",
    code: "Leiria",
    longitude: -8.8071119,
    latitude: 39.7437902,
  },
  {
    name: "Leon",
    code: "Leon",
    longitude: -5.57175,
    latitude: 42.5999,
  },
  {
    name: "Liberec",
    code: "Liberec",
    longitude: 15.0583947,
    latitude: 50.7702648,
  },
  {
    name: "Liege",
    code: "Liege",
    longitude: 5.5733098,
    latitude: 50.6450962,
  },
  {
    name: "Liestal",
    code: "Liestal",
    longitude: 7.7347783,
    latitude: 47.4839723,
  },
  {
    name: "Linares",
    code: "Linares",
    longitude: -3.6343581,
    latitude: 38.0928249,
  },
  {
    name: "Liverpool",
    code: "Liverpool",
    longitude: -2.99168,
    latitude: 53.4071991,
  },
  {
    name: "Logrono",
    code: "Logrono",
    longitude: -2.4396676,
    latitude: 42.4661196,
  },
  {
    name: "London",
    code: "London",
    longitude: -0.1276474,
    latitude: 51.5073219,
  },
  {
    name: "Lorca",
    code: "Lorca",
    longitude: -1.6988053,
    latitude: 37.6715679,
  },
  {
    name: "Luhansk",
    code: "Luhansk",
    longitude: 38.9150477,
    latitude: 49.2724587,
  },
  {
    name: "Lyon",
    code: "Lyon",
    longitude: 4.8320114,
    latitude: 45.7578137,
  },
  {
    name: "Maastricht",
    code: "Maastricht",
    longitude: 5.6909768,
    latitude: 50.8512438,
  },
  {
    name: "Malaga",
    code: "Malaga",
    longitude: -4.4216366,
    latitude: 36.7213028,
  },
  {
    name: "Malmo",
    code: "Malmo",
    longitude: 13.0001566,
    latitude: 55.6052931,
  },
  {
    name: "Marbella",
    code: "Marbella",
    longitude: -4.88562,
    latitude: 36.508976,
  },
  {
    name: "Mataro",
    code: "Mataro",
    longitude: 2.4448926,
    latitude: 41.5398348,
  },
  {
    name: "Melilla",
    code: "Melilla",
    longitude: -2.9409026,
    latitude: 35.2918698,
  },
  {
    name: "Middelburg",
    code: "Middelburg",
    longitude: 3.6136962,
    latitude: 51.4997302,
  },
  {
    name: "Mikkeli",
    code: "Mikkeli",
    longitude: 27.2726569,
    latitude: 61.6877956,
  },
  {
    name: "Milan",
    code: "Milan",
    longitude: 9.1896346,
    latitude: 45.4641943,
  },
  {
    name: "Minsk",
    code: "Minsk",
    longitude: 27.5618225,
    latitude: 53.9024716,
  },
  {
    name: "Monaco",
    code: "Monaco",
    longitude: 7.4276832,
    latitude: 43.7323492,
  },
  {
    name: "Mons",
    code: "Mons",
    longitude: 3.951958,
    latitude: 50.4549568,
  },
  {
    name: "Montana",
    code: "Montana",
    longitude: 43.4125,
    latitude: 23.225,
  },
  {
    name: "Munich",
    code: "Munich",
    longitude: 11.5753822,
    latitude: 48.1371079,
  },
  {
    name: "Murcia",
    code: "Murcia",
    longitude: -1.1305431,
    latitude: 37.9923795,
  },
  {
    name: "Nykoping",
    code: "Nykoping",
    longitude: 17.0120656,
    latitude: 58.7545409,
  },
  {
    name: "Olomouc",
    code: "Olomouc",
    longitude: 17.251143,
    latitude: 49.5940567,
  },
  {
    name: "Opole",
    code: "Opole",
    longitude: 17.9236408,
    latitude: 50.6668184,
  },
  {
    name: "Oslo",
    code: "Oslo",
    longitude: 10.7389701,
    latitude: 59.9133301,
  },
  {
    name: "Perth",
    code: "Perth",
    longitude: 115.8605801,
    latitude: -31.9558964,
  },
  {
    name: "Poitier",
    code: "Poitier",
    longitude: -0.0467273,
    latitude: 44.6545981,
  },
  {
    name: "Portalegre",
    code: "Portalegre",
    longitude: -7.721513354015343,
    latitude: 39.2076447,
  },
  {
    name: "Portimao",
    code: "Portimao",
    longitude: -8.5368426,
    latitude: 37.1375808,
  },
  {
    name: "Porto",
    code: "Porto",
    longitude: -8.6107884,
    latitude: 41.1494512,
  },
  {
    name: "Potenza",
    code: "Potenza",
    longitude: 15.82095999021995,
    latitude: 40.5183188,
  },
  {
    name: "Prague",
    code: "Prague",
    longitude: 14.4212535,
    latitude: 50.0874654,
  },
  {
    name: "Real",
    code: "Real",
    longitude: -7.74635,
    latitude: 41.2959,
  },
  {
    name: "Rijeka",
    code: "Rijeka",
    longitude: 14.4412309,
    latitude: 45.3271752,
  },
  {
    name: "Rome",
    code: "Rome",
    longitude: 12.4829321,
    latitude: 41.8933203,
  },
  {
    name: "Sanmarino",
    code: "Sanmarino",
    longitude: 12.458306,
    latitude: 43.9458623,
  },
  {
    name: "Santarem",
    code: "Santarem",
    longitude: -8.6867081,
    latitude: 39.2363637,
  },
  {
    name: "Sarajevo",
    code: "Sarajevo",
    longitude: 18.3866868,
    latitude: 43.8519774,
  },
  {
    name: "Schaffhausen",
    code: "Schaffhausen",
    longitude: 8.634513,
    latitude: 47.6960491,
  },
  {
    name: "Schwerin",
    code: "Schwerin",
    longitude: 11.4148038,
    latitude: 53.6288297,
  },
  {
    name: "Sebastian",
    code: "Sebastian",
    longitude: -1.98445,
    latitude: 43.3207,
  },
  {
    name: "Seville",
    code: "Seville",
    longitude: -5.9953403,
    latitude: 37.3886303,
  },
  {
    name: "Shumen",
    code: "Shumen",
    longitude: 26.9247362,
    latitude: 43.2703797,
  },
  {
    name: "Sibenik",
    code: "Sibenik",
    longitude: 15.8961863,
    latitude: 43.7338436,
  },
  {
    name: "Sion",
    code: "Sion",
    longitude: 0.00822,
    latitude: 43.73903,
  },
  {
    name: "Sliven",
    code: "Sliven",
    longitude: 26.3153528,
    latitude: 42.6817633,
  },
  {
    name: "Soro",
    code: "Soro",
    longitude: 86.73683730021526,
    latitude: 21.2997306,
  },
  {
    name: "Stuttgart",
    code: "Stuttgart",
    longitude: 9.1800132,
    latitude: 48.7784485,
  },
  {
    name: "Tarragona",
    code: "Tarragona",
    longitude: 1.2546057,
    latitude: 41.1172364,
  },
  {
    name: "Tonsberg",
    code: "Tonsberg",
    longitude: 6.4302622,
    latitude: 50.6370671,
  },
  {
    name: "Toulouse",
    code: "Toulouse",
    longitude: 1.4442469,
    latitude: 43.6044622,
  },
  {
    name: "Trieste",
    code: "Trieste",
    longitude: 13.7772781,
    latitude: 45.6496485,
  },
  {
    name: "Tripoli",
    code: "Tripoli",
    longitude: 13.1777923,
    latitude: 32.896672,
  },
  {
    name: "Trnava",
    code: "Trnava",
    longitude: 17.5858175,
    latitude: 48.3767652,
  },
  {
    name: "Utrecht",
    code: "Utrecht",
    longitude: 5.12768396945229,
    latitude: 52.080985600000005,
  },
  {
    name: "Uzhgorod",
    code: "Uzhgorod",
    longitude: 22.3022569,
    latitude: 48.6223732,
  },
  {
    name: "Valladolid",
    code: "Valladolid",
    longitude: -4.728562,
    latitude: 41.6521328,
  },
  {
    name: "Vannersborg",
    code: "Vannersborg",
    longitude: 16.7047073,
    latitude: 58.5579658,
  },
  {
    name: "Vejle",
    code: "Vejle",
    longitude: 9.5333238,
    latitude: 55.7000057,
  },
  {
    name: "Viborg",
    code: "Viborg",
    longitude: 9.4059354,
    latitude: 56.4469128,
  },
  {
    name: "Vigo",
    code: "Vigo",
    longitude: -8.7247205,
    latitude: 42.2376602,
  },
  {
    name: "Viljandi",
    code: "Viljandi",
    longitude: 25.5876563,
    latitude: 58.3646073,
  },
  {
    name: "Visby",
    code: "Visby",
    longitude: 18.297982,
    latitude: 57.6379361,
  },
  {
    name: "Viseu",
    code: "Viseu",
    longitude: -7.9138664,
    latitude: 40.6574713,
  },
  {
    name: "Vitoria",
    code: "Vitoria",
    longitude: -2.6724025,
    latitude: 42.8465088,
  },
  {
    name: "Volos",
    code: "Volos",
    longitude: 22.9401864,
    latitude: 39.3624833,
  },
  {
    name: "Vossavangen",
    code: "Vossavangen",
    longitude: 6.4147445,
    latitude: 60.6286944,
  },
  {
    name: "Vratsa",
    code: "Vratsa",
    longitude: 23.716533924123755,
    latitude: 43.399902499999996,
  },
  {
    name: "Warsaw",
    code: "Warsaw",
    longitude: 21.0067249,
    latitude: 52.2319581,
  },
  {
    name: "York",
    code: "York",
    longitude: -1.0815361,
    latitude: 53.9590555,
  },
  {
    name: "Zurich",
    code: "Zurich",
    longitude: 8.5410422,
    latitude: 47.3744489,
  },
];

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code)
);

export const smallCountryLimit = 5000;
export const bigEnoughCountriesWithImage = countriesWithImage; // note: removed "small country" filtering from here

export function getCountryName(language: string, country: Country) {
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
