import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Banner
                title="il tuo supporto è fondamentale"
                subtitle="dai il tuo contributo"
            />
        </>
    );
}

export default App;
