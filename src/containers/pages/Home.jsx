import Layout from "../../hocs/layouts/Layout"
import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"

function Home() {
    return(
        <Layout>
            <Navbar />
                <div className="pt-28">
                    Home

                </div>
                <Footer />
        </Layout>
    )
}

export default Home