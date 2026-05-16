import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} >
               <Route index element={<Welcome />} />
               <Route path="products" element={<Products />} >
                  <Route path="computers" element={<Computers />} />
                  <Route path="eletronics" element={<Eletronics />} />
                  <Route path="books" element={<Books />} />
               </Route>
               <Route path="about" element={<AboutUs />} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App
