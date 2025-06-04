type HomeProps = {
  path?: string; // Required for preact-router
};

const paragraphsWithExamples = [
  {
    text: "Tik šiandien aš susitelksiu tik į tai, kas yra mano kontrolėje, paleisdamas viską, kas už jos ribų.",
    example:
      "Pavyzdžiui, jei laukiu atsakymo iš kito žmogaus, nepamiršiu, kad negaliu kontroliuoti jo veiksmų, tik savo reakciją.",
  },
  {
    text: "Susitiksiu dieną ramia protu, priimdamas, kad nerimas nepakeis likimo kelio.",
    example:
      "Kai jaučiu nerimą dėl ateities, giliai kvėpuoju ir stengiuosi sutelkti dėmesį į tai, ką galiu dabar padaryti.",
  },
  {
    text: "Tik šiandien praktikuosiu gerumą — nes tikroji dorybė slypi, kaip elgiuosi su kitais ir su savimi.",
    example: "Padėsiu kolegai be lūkesčių sulaukti padėkos arba atsidėkojimo.",
  },
  {
    text: "Laimė kyla iš gyvenimo harmonijoje su gamta ir vadovaujantis protu.",
    example:
      "Skirsiu laiko pasivaikščiojimui gamtoje ir įsiklausysiu į savo mintis bei jausmus.",
  },
  {
    text: "Tik šiandien priimsiu dalykus tokius, kokie jie yra, o ne tokius, kokių norėčiau, ir susidursiu su iššūkiais drąsiai bei kantriai.",
    example:
      "Jei susidursiu su kliūtimi darbe, vietoj skundimosi ieškosiu sprendimo ir išliksiu kantrus.",
  },
  {
    text: "Tik šiandien stiprinsiu savo protą apgalvojimu ir mokymusi, žinodamas, kad išmintis yra pastangų ir savidisciplinos vaisius.",
    example: "Paskirsiu 15 minučių skaitymui arba naujų įgūdžių mokymuisi.",
  },
  {
    text: "Tik šiandien sąmoningai priimsiu nepatogumus, suprasdamas, kad sunkumai ugdo ištvermę ir formuoja charakterį.",
    example:
      "Vykdysiu tą užduotį, kurios stengiuosi vengti, kad išmokčiau ištvermės ir disciplinos.",
  },
  {
    text: "Tik šiandien atliksiu vieną darbą, kurio nenoriu daryti — ar tai būtų sunkus pokalbis, nuobodus uždavinys, ar fizinė užduotis — žinodamas, kad disciplina duoda laisvę.",
    example:
      "Paskambinsiu asmeniui, su kuriuo ilgai nesu kalbėjęs, nors man tai sunku.",
  },
  {
    text: "Tik šiandien atliksiu gerą darbą be lūkesčių būti pastebėtam, vykdydamas pareigą prisidėti prie bendro gėrio.",
    example: "Pasiūlysiu pagelbėti kaimynui be jokios naudos sau.",
  },
  {
    text: "Tik šiandien būsiu sąmoningas savo mintyse ir veiksmuose, siekdamas elgtis teisingai, kalbėti tiesą ir gyventi su nepalaužiama integritetu.",
    example:
      "Prieš priimdamas sprendimą, pagalvosiu, ar jis atitinka mano vertybes ir moralę.",
  },
  {
    text: "Tik šiandien dažnai sustosiu pasikaupti, prisimindamas, kad dabartinė akimirka yra vienintelė tikroji mano nuosavybė.",
    example:
      "Darysiu trumpas sąmoningumo praktikas dienos metu, kad išlikčiau čia ir dabar.",
  },
  {
    text: "Tik šiandien priimsiu kiekvieną patirtį kaip galimybę ugdyti dorybę, tikėdamasis, kad gerai praleistas gyvenimas yra aukščiausias gėris.",
    example:
      "Net jei kas nors nepasiseks, klausių savęs, ką galiu iš to išmokti ir kaip galiu tobulėti.",
  },
  {
    text: "Ir svarbiausia – aš pasirodysiu kiekvieną dieną, nes nuoseklumas ir kasdienė praktika yra kelias į išmintį ir vidinę ramybę.",
    example:
      "Net jei jaučiuosi tingus ar nenorintis, būsiu čia ir darysiu tai, ką galiu – žingsnis po žingsnio.",
  },
];

export default function Home(_props: HomeProps) {
  return (
    <main className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          {/* Header / Preview */}
          <header className="post-preview">
            <h2 className="post-subtitle">Pagal stoikų filosofiją</h2>
            <p className="post-meta">
              Įkėlė <a href="#!">Povilas</a> – 2025 m. gegužės 27 d.
            </p>
          </header>

          {/* Main Article Content */}
          <article className="mb-4">
            <section>
              {paragraphsWithExamples.map(({ text, example }, index) => (
                <div key={index} style={{ marginBottom: "1.5rem" }}>
                  <p>{text}</p>
                  <p
                    style={{
                      fontStyle: "italic",
                      color: "#555",
                      marginLeft: "1rem",
                    }}
                  >
                    {example}
                  </p>
                </div>
              ))}
            </section>

            {/* Quote Block */}
            <blockquote className="blockquote">
              Citata įkvėpta stoikų filosofijos, siekiant praktikuoti kasdienę
              dorybę ir ramybę.
              <footer className="blockquote-footer">
                <cite>
                  Pastaba: Tai mano asmeninė interpretacija ir refleksija.
                </cite>
              </footer>
            </blockquote>
          </article>
        </div>
      </div>
    </main>
  );
}
