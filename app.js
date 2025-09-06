const { HashRouter, Routes, Route, Link, useLocation } = ReactRouterDOM;
const { motion, AnimatePresence } = window['framer-motion'];

function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur sticky top-0 shadow z-10">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">TY</div>
            <span className="font-bold text-lg">Thusong Youth Centre</span>
          </div>
          <div className="flex gap-4 text-sm font-semibold">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/objectives">Objectives</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Animated Routes */}
      <div className="max-w-6xl mx-auto p-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/programs" element={<PageWrapper><Programs /></PageWrapper>} />
            <Route path="/objectives" element={<PageWrapper><Objectives /></PageWrapper>} />
            <Route path="/donate" element={<PageWrapper><Donate /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>

      <footer className="bg-white/70 mt-8 p-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Thusong Youth Centre • NPO Reg: 006-155-NPO
      </footer>
    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

// --- Page Components ---
function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to Thusong Youth Centre</h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-700">
        Empowering Alexandra youth since 1979 through arts, sports, education, and community development.
      </p>
      <div className="mt-6">
        <img src="images/hero.jpg" alt="Youth Centre" className="rounded-2xl shadow mx-auto max-h-96 object-cover" />
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-3">Founded in 1979, Thusong Youth Centre is a joint initiative between Alexandra Township and Sandton communities.</p>
      <h3 className="text-xl font-semibold mt-4">Mission</h3>
      <p className="mb-3">To capacitate, enhance and develop disadvantaged youth through training and skills development.</p>
      <h3 className="text-xl font-semibold mt-4">Vision</h3>
      <p>To develop individual skills, self-esteem, initiative, and education for a brighter future.</p>
    </div>
  );
}

function Programs() {
  const list = [
    "Drama & Acting",
    "Traditional & Contemporary Dance",
    "Pottery & Music",
    "Squash & Fitness",
    "Homework Support",
    "Parolee Rehabilitation",
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((p) => (
          <motion.div
            key={p}
            whileHover={{ scale: 1.03 }}
            className="p-4 bg-indigo-50 rounded-lg shadow hover:shadow-lg transition"
          >
            <h4 className="font-semibold">{p}</h4>
            <p className="text-sm text-gray-600 mt-1">Interactive sessions and youth participation.</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Objectives() {
  const goals = [
    "Renovation of the Thusong Youth Centre",
    "Training and skills development for youth",
    "Encouraging youth participation and leadership",
    "Community empowerment and collaboration",
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Our Objectives</h2>
      <ul className="list-disc list-inside space-y-2">
        {goals.map((g) => <li key={g}>{g}</li>)}
      </ul>
    </div>
  );
}

function Donate() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Support Us — Donate</h2>
      <div className="bg-indigo-50 p-4 rounded-lg border">
        <h3 className="font-semibold">Bank Details</h3>
        <p className="font-mono text-sm mt-2">
          Bank: First National Bank (FNB)<br/>
          Account holder: Thusong Youth Centre<br/>
          Account no: 50300065915<br/>
          Account type: Cheque<br/>
          Branch code: 250655
        </p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p>Address: 138-11th Avenue, Alexandra Township</p>
      <p>Phone: 084 533 0096</p>
      <p>Email: yctthusong@gmail.com</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
