import FileUpload from "./FileUpload";
import Layout from "../Layout";
import ControlledCarousel from "./ControlledCarousel";

const Certificates = () => {
    return (
        <>
            <Layout>
                <div className='certif-container'> 
                    <div style={{ display: 'flex', justifyContent: "center" }}>
                        <div className='admin-title'> CERTIFICATE GENERATOR</div>
                    </div>
                    <ControlledCarousel />
                    <FileUpload />
                </div >
            </Layout>
        </>
    );
}

export default Certificates;