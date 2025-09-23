import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from '@/pages/Home'
import About from '@/pages/About'
import Donations from '@/pages/Donations'
import DonationsThankYou from '@/pages/DonationsThankYou'
import Partnerships from '@/pages/Partnerships'
import PartnershipsThankYou from '@/pages/PartnershipsThankYou'
import Registration from '@/pages/Registration'
import RegistrationThankYou from '@/pages/RegistrationThankYou'
import AnnualFestival from '@/pages/AnnualFestival'
import BiMonthly from '@/pages/BiMonthly'
import LiteracyLibraries from '@/pages/LiteracyLibraries'
import CreativeEconomy from '@/pages/CreativeEconomy'
import Highlights from '@/pages/Highlights'
import HighlightDetail from '@/pages/HighlightDetail'
import Volunteer from '@/pages/Volunteer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/donations/thank-you" element={<DonationsThankYou />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/partnerships/thank-you" element={<PartnershipsThankYou />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/registration/thank-you" element={<RegistrationThankYou />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/annual-festival" element={<AnnualFestival />} />
          <Route path="/bi-monthly" element={<BiMonthly />} />
          <Route path="/literacy-libraries" element={<LiteracyLibraries />} />
          <Route path="/creative-economy" element={<CreativeEconomy />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/highlights/:slug" element={<HighlightDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App