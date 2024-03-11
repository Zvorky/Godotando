import packageInfo from "../package.json";

function Home() {
  return (
    <div>
      <div>
        <h1>{packageInfo.name}</h1>
        {packageInfo.description}
      </div>
      <div class="block">
        <h2 class="soon">[ Em Construção ]</h2>
        Participe do nosso desenvolvimento pelo
        <h3>
          <a
            href={`https://github.com/${packageInfo.author}/${packageInfo.name}`}
          >
            GitHub!
          </a>
        </h3>
      </div>
      <footer>
        {packageInfo.name} v{packageInfo.version}
        <div>
          <a href={`https://github.com/${packageInfo.author}/`}>
            © 2024 {packageInfo.author}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
