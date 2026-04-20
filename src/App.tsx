/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ProjectTemplate from "./pages/ProjectTemplate";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import { LightboxProvider } from "./contexts/LightboxContext";

export default function App() {
  return (
    <LightboxProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:serviceSlug" element={<ServiceDetail />} />
            <Route path="contact" element={<Contact />} />

            
            {/* Dynamic Project Route */}
            <Route path="project/:id" element={<ProjectTemplate />} />
          </Route>
        </Routes>
      </Router>
    </LightboxProvider>
  );
}
