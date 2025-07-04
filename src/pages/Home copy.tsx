type HomeProps = {
  path?: string; // Required for preact-router
};

const paragraphs = [
  "Tik šiandien stengsiuosi gyventi tik šią dieną ir nespręsti visų savo gyvenimo problemų iš karto. Galiu padaryti kažką dvylika valandų, kas mane sukrėstų, jei manyčiau, kad turiu tai daryti visą gyvenimą.",
  "Tik šiandien būsiu laimingas. Daugelis žmonių yra tiek laimingi, kiek nusprendžia tokie būti.",
  "Tik šiandien prisitaikysiu prie to, kas yra, ir nesistengsiu visko pritaikyti pagal savo norus. Priimsiu savo „sėkmę“ tokia, kokia ji ateina, ir prisiderinsiu prie jos.",
  "Tik šiandien stengsiuosi stiprinti savo protą. Mokysiuosi. Išmoksiu ką nors naudingo. Nebūsiu protinis tinginys. Skaitysiu kažką, kas reikalauja pastangų, mąstymo ir susikaupimo.",
  "Tik šiandien ugdysiu savo sielą trimis būdais: padarysiu ką nors gero kitam žmogui ir liksiu nepastebėtas; jei kas nors apie tai sužinos, tai nebesiskaičiuos. Padarysiu bent du dalykus, kurių nenoriu daryti – vien tam, kad lavinčiau save. Nepasiduosiu užgautiems jausmams – net jei jie bus užgauti, šiandien to nerodysiu.",
  "Tik šiandien būsiu malonus. Atrodysiu kiek įmanoma geriau, apsirengsiu tvarkingai, kalbėsiu ramiai, elgsiuosi mandagiai, nekritikuosiu nė truputėlio, nesiskųsiu dėl nieko ir nesistengsiu tobulinti ar reguliuoti nieko, išskyrus save patį.",
  "Tik šiandien turėsiu planą. Galbūt jo nesilaikysiu tiksliai, bet turėsiu. Saugosiu save nuo dviejų negandų: skubėjimo ir neryžtingumo.",
  "Tik šiandien skirsiu pusvalandį ramybei ir poilsiui. Per šį pusvalandį stengsiuosi geriau suprasti savo gyvenimą.",
  "Tik šiandien nebūsiu bailus. Ypač nebijosiu mėgautis tuo, kas yra gražu, ir tikėsiu, kad kaip aš duodu pasauliui, taip pasaulis duos man.",
];

export default function Home(_props: HomeProps) {
  return (
    <main className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          {/* Header / Preview */}
          <header className="post-preview">
            {/* <h3 className="post-subtitle">Pagal „Just for Today“ – tekstą</h3> */}
            <h2 className="post-subtitle">Pagal „Just for Today“ – tekstą</h2>
            <p className="post-meta">
              Įkėlė <a href="#!">Povilas</a> – 2025 m. gegužės 27 d.
            </p>
          </header>

          {/* Main Article Content */}
          <article className="mb-4">
            <section>
              {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </section>

            {/* Quote Block */}
            <blockquote className="blockquote">
              Citata (Pagal „Just for Today“ – tekstus, naudojamus Anoniminių
              Alkoholikų (AA) bendruomenėje. Tai mano asmeninis vertimas į
              lietuvių kalbą.)
              <footer className="blockquote-footer">
                <cite>
                  Pastaba: Tai nėra oficialus AA tekstas ar patvirtintas
                  vertimas. Tai asmeninė interpretacija, dalijantis mintimis
                  tinklaraštyje.
                </cite>
              </footer>
            </blockquote>

            {/* Image */}
            {/* <a href="#!">
              <img
                className="img-fluid"
                src="assets/img/12_steps_compressed.png"
                alt="12 žingsnių schema"
                loading="lazy"
              />
            </a> */}
          </article>
        </div>
      </div>
    </main>
  );
}
