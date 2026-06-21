import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProducts } from "./fakestore-product";
import { FakestoreProductDetails } from "./fakestore-product-details";
import { FakestoreLogin } from "./fakestore-login";


export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                  <header className="d-flex justify-content-between p-2 border border-1 bg-light mt-3">
                     <div className="fs-4 fw-bold">Fakestore.</div>
                     <div>
                        <nav>
                            <span>Home</span>
                            <span className="mx-4">Electronics</span>
                            <span>Jewelery</span>
                        </nav>
                     </div>
                  </header>
                  <section className="mt-4">
                     <Routes>
                         <Route path="/" element={<FakestoreLogin />} />
                         <Route path="home" element={<FakestoreHome />} />
                         <Route path="products/:category" element={<FakestoreProducts />}>
                        <Route path="details/:id" element={<FakestoreProductDetails />} />
                         </Route>
                     </Routes>
                  </section>
            </BrowserRouter>
        </div>
    )
}       