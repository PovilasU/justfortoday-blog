import AudioKnyga from "../components/AudioKnyga";
type Props = {
  path?: string;
};

export default function Contact(_props: Props) {
  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <div className="mt-4">
            {/* <h4> Mediateka</h4>

            <p>
              skaitantos knygos, meditacijos ir kiti įrašai, kurie gali padėti
              kasdienybėje.{" "}
            </p> */}
            <AudioKnyga />
          </div>
        </div>
      </div>
    </div>
  );
}
