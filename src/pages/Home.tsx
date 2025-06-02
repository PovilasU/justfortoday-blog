type Props = {
  path?: string; // Required for preact-router
};

export default function Home(_props: Props) {
  return (
    <div class="home">
      <h1>Just For Today</h1>
      <p>
        This is a simple Preact app to help you focus on the present moment.
        Click the links below to explore different features.
      </p>
    </div>
  );
}
