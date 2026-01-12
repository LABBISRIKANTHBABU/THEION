import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Clientele from "./pages/Clientele";
import ContactUs from "./pages/ContactUs";
import TheionDigital from "./pages/TheionDigital";
import TheionTechnologies from "./pages/TheionTechnologies";
import TheionRecruits from "./pages/TheionRecruits";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import StudentAuth from "./pages/auth/StudentAuth";
import ProfessionalAuth from "./pages/auth/ProfessionalAuth";
import ClientAuth from "./pages/auth/ClientAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/clientele" element={<Clientele />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/theion-digital" element={<TheionDigital />} />
          <Route path="/theion-technologies" element={<TheionTechnologies />} />
          <Route path="/theion-recruits" element={<TheionRecruits />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/auth/student" element={<StudentAuth />} />
          <Route path="/auth/professional" element={<ProfessionalAuth />} />
          <Route path="/auth/client" element={<ClientAuth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;