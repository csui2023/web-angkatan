import Division from "./Division";

export default function TheTeam() {
  return (
    <div className="mt-40 flex flex-col gap-10 justify-start items-center">
      <h1 className="text-7xl font-clash-display text-center mb-8">Meet the Team!</h1>
      <Division
        name="Inti"
        people={[
          { id: "andrew-devito-aryo", namaLengkap: "Andrew Devito Aryo" },
          { id: "anthony-edbert-feriyanto", namaLengkap: "Anthony Edbert Feriyanto" },
          { id: "catherine-aurellia", namaLengkap: "Catherine Aurellia" },
          { id: "ida-made-revindra-dikta-mahendra", namaLengkap: "Ida Made Revindra Dikta Mahendra" },
          { id: "harman-hakim", namaLengkap: "Harman Hakim" },
          { id: "raden-ahmad-yasin-mahendra", namaLengkap: "Raden Ahmad Yasin Mahendra" },
          { id: "oscar-ryanda", namaLengkap: "Oscar Ryanda" },
          { id: "thorbert-anson-shi", namaLengkap: "Thorbert Anson Shi" },
          { id: "ezar-akhdan-shada-surahman", namaLengkap: "Ezar Akhdan Shada Surahman" },
          { id: "irma-nia-alwijah", namaLengkap: "Irma Nia Alwijah" },
          { id: "rayienda-hasmaradana-najlamahsa", namaLengkap: "Rayienda Hasmaradana Najlamahsa" },
        ]}
      />
      <Division
        name="Kreatif"
        people={[
          { id: "arief-ridzki-darmawan", namaLengkap: "Arief Ridzki Darmawan"},
          { id: "widya-mutia-ichsan", namaLengkap: "Widya Mutia Ichsan"},
          { id: "najwa-zarifa", namaLengkap: "Najwa Zarifa"},
          { id: "naila-syarifa-yosarvi", namaLengkap: "Naila Syarifa Yosarvi"},
          { id: "aileen-josephine-halim", namaLengkap: "Aileen Josephine Halim"},
          { id: "christian-yudistira-hermawan", namaLengkap: "Christian Yudistira Hermawan"},
          { id: "muhammad-raihan-maulana", namaLengkap: "Muhammad Raihan Maulana"},
        ]}
      />
      <Division
        name="Gathering"
        people={[
          { id: "maira-shasmeen-mazaya", namaLengkap: "Maira Shasmeen Mazaya"},
          { id: "nabila-maharani-putri", namaLengkap: "Nabila Maharani Putri"},
          { id: "david-juan-ananda", namaLengkap: "David Juan Ananda"},
          { id: "rama-aditya-rifki-harmono", namaLengkap: "Rama Aditya Rifki Harmono"},
          { id: "nabeel-muhammad", namaLengkap: "Nabeel Muhammad"},
          { id: "rizqya-az-zahra-putri", namaLengkap: "Rizqya Az Zahra Putri"},
          { id: "mawla-raditya-pambudi", namaLengkap: "Mawla Raditya Pambudi"},
          { id: "rayhan-alviandi", namaLengkap: "Rayhan Alviandi"},
          { id: "tarissa-mutia-andini", namaLengkap: "Tarissa Mutia Andini"},
          { id: "rosanne-valerie", namaLengkap: "Rosanne Valerie" },
          { id: "muhammad-jordan-ar-razi-aziz", namaLengkap: "Muhammad Jordan Ar-Razi Aziz " },
          { id: "muhammad-wendy-fyfo-anggara", namaLengkap: "Muhammad Wendy Fyfo Anggara" },
          { id: "felita-zahra-d", namaLengkap: "Felita Zahra D" },
          { id: "abby-shelley-tampubolon", namaLengkap: "Abby Shelley Tampubolon" },
          { id: "athallah-nadhif", namaLengkap: "Athallah Nadhif" },
          { id: "indah-cahya-puspitahati", namaLengkap: "Indah Cahya Puspitahati" },
          { id: "sarah-saphira-setiawan", namaLengkap: "Sarah Saphira Setiawan" },
          { id: "sayyid-thariq-gilang-muttaqien", namaLengkap: "Sayyid Thariq Gilang Muttaqien" },
          { id: "ignasius-bramantya-widiprasetya", namaLengkap: "Ignasius Bramantya Widiprasetya" },
          { id: "arya-gilang-prasetya", namaLengkap: "Arya Gilang Prasetya" },
          { id: "andharu-hanif-achmadsyah", namaLengkap: "Andharu Hanif Achmadsyah" },
        ]}
      />
      <Division
        name="Humpub"
        people={[
          { id: "azzahra-salsabila", namaLengkap: "Azzahra Salsabila" },
          { id: "anindya-nabila-syifa", namaLengkap: "Anindya Nabila Syifa" },
          { id: "muhammad-wendy-fyfo-anggara", namaLengkap: "Muhammad Wendy Fyfo Anggara" },
          { id: "muhammad-rizky-ramadhani", namaLengkap: "Muhammad Rizky Ramadhani" },
          { id: "muhammad-fadhil-nur-aziz", namaLengkap: "Muhammad Fadhil Nur Aziz" },
          { id: "regina-meilani-aruan", namaLengkap: "Regina Meilani Aruan" },
          { id: "irfan-rizqi-nurrahman", namaLengkap: "Irfan Rizqi Nurrahman" },
          { id: "kusuma-ratih-hanindyani", namaLengkap: "Kusuma Ratih Hanindyani" },
          { id: "rosanne-valerie", namaLengkap: "Rosanne Valerie" },
        ]}
      />
      <Division
        name="Webdev"
        people={[
          { id: "stefanus-tan-jaya", namaLengkap: "Stefanus Tan Jaya" },
          { id: "valentino-kim-fernando", namaLengkap: "Valentino Kim Fernando" },
          { id: "muhammad-vito-secona", namaLengkap: "Muhammad Vito Secona" },
          { id: "muhammad-fazil-tirtana", namaLengkap: "Muhammad Fazil Tirtana" },
          { id: "franky-raymarcell-sinaga", namaLengkap: "Franky Raymarcell Sinaga" },
        ]}
      />
    </div>
  );
}
