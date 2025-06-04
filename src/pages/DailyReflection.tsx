import { useState } from "preact/hooks";

type Props = {
  path?: string;
};

export default function DailyReflection(_props: Props) {
  const [formData, setFormData] = useState({
    person: "",
    event: "",
    flaw: "",
  });

  const clearForm = () => {
    setFormData({ person: "", event: "", flaw: "" });
  };

  return (
    <>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Sukūriau šią svetainę kaip įrankį sau – priminimą, kaip norėčiau
                gyventi kiekvieną dieną. Kartais gyvenimo ritme lengva
                pasiklysti, tad ši vieta padeda man sugrįžti prie to, kas
                svarbiausia.
              </p>

              <p>
                Tokias refleksijas praktikavo ir stoikų filosofas{" "}
                <strong>Marcus Aurelius</strong> – jis kasdien apmąstydavo savo
                veiksmus, mintis ir emocijas, kad augtų kaip žmogus. Savo
                dienoraštyje („Meditacijos“) jis rašė ne kitam, o sau – tam, kad
                primintų, kaip verta gyventi.
              </p>

              <h4 className="mt-4">🎯 Kodėl verta reflektuoti?</h4>
              <ul>
                <li>Padeda pastebėti savo emocijas ir reakcijas</li>
                <li>Ugdo sąmoningumą ir savitvardą</li>
                <li>
                  Leidžia kasdien pasitikrinti kryptį: ar gyvenu taip, kaip
                  noriu?
                </li>
              </ul>

              <h4 className="mt-4">🧠 Marcus Aurelius pavyzdys:</h4>
              <div className="table-responsive">
                <table className="table table-sm table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Situacija</th>
                      <th>Reakcija</th>
                      <th>Ką galėjau padaryti geriau</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Grubus tarnas</td>
                      <td>Supykau</td>
                      <td>Priminti sau, kad visi klysta</td>
                    </tr>
                    <tr>
                      <td>Nesutarimas su draugu</td>
                      <td>Užsidariau</td>
                      <td>Galėjau kalbėtis ramiai ir atvirai</td>
                    </tr>
                    <tr>
                      <td>Pasijutau pavargęs ir piktas</td>
                      <td>Norėjau viską mesti</td>
                      <td>Priminti sau, kad dorybė virš emocijų</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                Marcus nerašė tobulai – jis rašė sau. Taip galime ir mes. Diena
                gali būti apžvelgiama įvairiai: per pyktį, džiaugsmą,
                situacijas, kur jautėmės silpni ar stiprūs. Nėra „teisingo“ būdo
                – svarbu nuoširdumas.
              </p>

              <p className="mt-3">
                Asmeniškai, jei dienos bėgyje jaučiu, kad mano nuotaika
                pasikeitė ar viduje kyla įtampa, sustoju ir padarau trumpą
                savianalizę. Tada galiu pažvelgti į situaciją iš šalies – tai
                padeda atgauti vidinę ramybę. Tokie momentai ypač svarbūs norint
                išlaikyti emocinę pusiausvyrą. Tai tarsi mažas sustojimas, kuris
                primena, kad darbas su savimi vyksta kiekvieną dieną – o ši
                praktika tampa įrankiu, padedančiu turėti ne tik gerą dieną, bet
                ir geresnį gyvenimą.
              </p>

              <h3 className="mt-5">📝 Dienos refleksija</h3>
              {/* <p>
                Štai kokią lentelę aš pildau – ji padeda man pažvelgti į save
                objektyviau ir augti per patirtį.
              </p> */}

              <p className="mt-3">
                Dažniausiai pasitaikantys vidiniai trūkumai, kuriuos verta
                atpažinti:
              </p>
              <ul>
                <li>📍 Pavydas</li>
                <li>📍 Nekantrumas</li>
                <li>📍 Savanaudiškumas</li>
                <li>📍 Savigaila</li>
                <li>📍 Puikybė</li>
                <li>📍 Nesažiningumas</li>
                <li>📍 Kontrolės troškimas</li>
                <li>📍 Arogancija</li>
                <li>📍 Savicentriškumas</li>
                <li>📍 Saiko neturejimas</li>
              </ul>

              <div className="table-responsive mt-3">
                <table className="table table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th
                        style={{
                          width: "30%",
                          whiteSpace: "normal",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        Situacija
                      </th>
                      <th
                        style={{
                          width: "35%",
                          whiteSpace: "normal",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        Reakcija
                      </th>
                      <th
                        style={{
                          width: "35%",
                          whiteSpace: "normal",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        Ką galėjau padaryti geriau
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* <td>Nesutarimas su draugu</td>
                      <td>Užsidariau</td>
                      <td>Galėjau kalbėtis ramiai ir atvirai</td> */}

                      <td className="bg-light">Nesutarimas su draugu</td>
                      <td className="bg-light">Užsidariau</td>
                      <td className="bg-light">
                        Galėjau kalbėtis ramiai ir atvirai
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <textarea
                          // type="text"
                          className="form-control"
                          style={{ minHeight: "100px", fontSize: "1rem" }}
                          value={formData.person}
                          onInput={(e) =>
                            setFormData({
                              ...formData,
                              person: (e.target as HTMLInputElement).value,
                            })
                          }
                          // placeholder="Pvz.: kolega, save..."
                        />
                        {/* <textarea
                          className="form-control"
                          style={{ minHeight: "100px", fontSize: "1rem" }}
                          value={formData.event}
                          onInput={(e) =>
                            setFormData({
                              ...formData,
                              person: (e.target as HTMLTextAreaElement).value,
                            })
                          }
                          placeholder="Pvz.: kolega, save..."
                        /> */}
                      </td>
                      <td>
                        <textarea
                          className="form-control"
                          style={{ minHeight: "100px", fontSize: "1rem" }}
                          value={formData.event}
                          onInput={(e) =>
                            setFormData({
                              ...formData,
                              event: (e.target as HTMLTextAreaElement).value,
                            })
                          }
                          // placeholder="Trumpas įvykio aprašymas"
                        />
                      </td>
                      <td>
                        <textarea
                          className="form-control"
                          style={{ minHeight: "100px", fontSize: "1rem" }}
                          value={formData.flaw}
                          onInput={(e) =>
                            setFormData({
                              ...formData,
                              flaw: (e.target as HTMLTextAreaElement).value,
                            })
                          }
                          // placeholder="Pvz.: pavydas, puikybė, savigaila..."
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button className="btn btn-secondary mt-3" onClick={clearForm}>
                Išvalyti
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
