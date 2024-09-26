
import { Suspense } from "react";
import EmployeeContainer from "../EmployeeContainer/EmployeeContainer";
import Styles from "./Body.module.css"
import EmployeeCardShimmer from "../LoadingFallBack/EmployeeCardShimmer/EmployeeCardShimmer";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


function Body(){
    return (
        <div className={Styles.container}>
            <ErrorBoundary>
                <Suspense fallback={<EmployeeCardShimmer/>}>
                  <EmployeeContainer />
                </Suspense>
            </ErrorBoundary>
            
        </div>
        
    )
}

export default Body;