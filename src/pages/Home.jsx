import * as master from "../components";



function Home() {
  return (
    <>
    <master.forms.Login/>
      <main>
        <h1>Home</h1>
      </main>
    <master.modals.Info/>
      <master.layouts.Footer/>
    </>
  );
}

export default Home;
