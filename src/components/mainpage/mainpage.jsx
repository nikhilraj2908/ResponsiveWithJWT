import { Footer } from "../footer/footer";
import Header from "../header/header";
import { Sectionmain } from "../section/section";

export function Mainpage(){
    return(
        <div className="bg-light">
            <Header/>
            <Sectionmain/>
            <Footer/>
        </div>
    )
}