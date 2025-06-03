import { useState, useEffect } from "preact/hooks";

type Props = {
  path?: string;
};

export default function AudioKnyga(_props: Props) {
  const recordings = [
    276761, 276758, 276496, 276406, 276400, 276395, 276373, 276384, 274421,
    274375, 274372, 275383, 273932, 273886, 273883, 273874, 273567, 273397,
    273394, 273385, 273078, 274706, 274773, 274937, 275011, 272589, 272465,
    272419, 272416, 272407, 271976, 271930, 271927, 271918, 271611, 270980,
    270931, 270928, 270919, 270612, 274577, 270446, 270443, 270434, 270127,
    270010, 269961, 269949, 269642, 269525, 269473, 269464, 269157, 269040,
    268991, 268988, 268979, 268672, 268555, 268506,
  ];

  const recordingsReversed = [...recordings].reverse();

  // State for checked items: object { [id]: boolean }
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  // Load saved state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("nematoma-kova-checked");
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  // Update localStorage whenever checked changes
  useEffect(() => {
    localStorage.setItem("nematoma-kova-checked", JSON.stringify(checked));
  }, [checked]);

  // Toggle checkbox handler
  function toggleChecked(id: number) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <>
      <h5>🎧 Audioknyga: Nikodemas Agiorietis – „Nematoma kova“</h5>
      <p>
        Žemiau pateikiamos nuorodos į „Marijos radijo“ svetainėje publikuotą
        audioknygą <strong>„Nematoma kova“</strong>. Klausymui pateikiu jas
        <strong> eilės tvarka</strong>, kad būtų patogu sekti skaitymą nuo
        pradžios iki pabaigos.
      </p>

      <ul>
        {recordingsReversed.map((id, index) => (
          <li key={id} style={{ marginBottom: "0.5em" }}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={!!checked[id]}
                onChange={() => toggleChecked(id)}
                style={{ marginRight: "0.5em" }}
              />
              <a
                href={`https://www.marijosradijas.lt/transliacijos/${id}-muzika-ir-skaitiniai.html`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {index + 1} dalis
              </a>
            </label>
          </li>
        ))}
      </ul>

      <p>
        <small>
          Šaltinis:{" "}
          <a
            href="https://www.marijosradijas.lt"
            target="_blank"
            rel="noopener noreferrer"
          >
            marijosradijas.lt
          </a>
          . Visos teisės priklauso Marijos radijui. Šiame puslapyje pateiktos
          tik nuorodos – vartotojo patogumui. Turinys nėra kopijuojamas ar
          talpinamas vietoje.
        </small>
      </p>
    </>
  );
}
