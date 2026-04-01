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

// Project Pages
import Aqua67 from "./pages/projects/Aqua67";
import TeaxTopsLogo from "./pages/projects/TeaxTopsLogo";
import JnTRidersUniform from "./pages/projects/JnTRidersUniform";
import KOGLogo from "./pages/projects/KOGLogo";
import WhitehorseActive from "./pages/projects/WhitehorseActive";
import RayjuveShopify from "./pages/projects/RayjuveShopify";
import SevenDayGarageDoor from "./pages/projects/SevenDayGarageDoor";
import EPowerGoShopify from "./pages/projects/EPowerGoShopify";
import InfraredFireShopify from "./pages/projects/InfraredFireShopify";
import OVUKPhotoRetouching from "./pages/projects/OVUKPhotoRetouching";
import AntukinGraphicTees from "./pages/projects/AntukinGraphicTees";
import TheBalloonWorkshop from "./pages/projects/TheBalloonWorkshop";
import ParagonAds from "./pages/projects/ParagonAds";
import MyPetPoncho from "./pages/projects/MyPetPoncho";
import SleepyheadLogo from "./pages/projects/SleepyheadLogo";
import ZulayKitchen from "./pages/projects/ZulayKitchen";
import BowserBeanCarWrap from "./pages/projects/BowserBeanCarWrap";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Project Routes */}
          <Route path="work/aqua-67" element={<Aqua67 />} />
          <Route path="work/tea-x-tops-logo" element={<TeaxTopsLogo />} />
          <Route path="work/jnt-riders-uniform" element={<JnTRidersUniform />} />
          <Route path="work/kog-logo" element={<KOGLogo />} />
          <Route path="work/whitehorse-active" element={<WhitehorseActive />} />
          <Route path="work/rayjuve-shopify" element={<RayjuveShopify />} />
          <Route path="work/seven-day-garage-door" element={<SevenDayGarageDoor />} />
          <Route path="work/epowergo-shopify" element={<EPowerGoShopify />} />
          <Route path="work/infrared-fire-shopify" element={<InfraredFireShopify />} />
          <Route path="work/ovuk-photo-retouching" element={<OVUKPhotoRetouching />} />
          <Route path="work/antukin-graphic-tees" element={<AntukinGraphicTees />} />
          <Route path="work/the-balloon-workshop" element={<TheBalloonWorkshop />} />
          <Route path="work/paragon-ads" element={<ParagonAds />} />
          <Route path="work/mypetponcho" element={<MyPetPoncho />} />
          <Route path="work/sleepyhead-logo" element={<SleepyheadLogo />} />
          <Route path="work/zulay-kitchen" element={<ZulayKitchen />} />
          <Route path="work/bowser-bean-car-wrap" element={<BowserBeanCarWrap />} />
        </Route>
      </Routes>
    </Router>
  );
}
