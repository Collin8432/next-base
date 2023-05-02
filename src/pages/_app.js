import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PageTransition>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </PageTransition>
    </>
  );
}
