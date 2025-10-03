import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import One from "./One";
import Loader from "./Loader";
import "./App.css";

const Home = lazy(() => import("./Home"));
const ExploreAshrams = lazy(() => import("./ExploreAshrams"));
const AshramDetails = lazy(() => import("./AshramDetails"));
const BlindStudents = lazy(() => import("./BlindStudents"));
const RegisterHelper = lazy(() => import("./RegisterHelper"));
const HelpersList = lazy(() => import("./HelpersList"));
const Notification = lazy(() => import("./Notification"));
const Profile = lazy(() => import("./Profile"));
const Contacts = lazy(() => import("./Contacts"));
const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Router>
      <One /> {/* Navbar or Sidebar */}

      <Suspense fallback={<Loader />}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ashram" element={<ExploreAshrams />} />
          <Route path="/ashram/:id" element={<AshramDetails />} />
          <Route path="/blind-students" element={<BlindStudents />} />
          <Route path="/register-helper" element={<RegisterHelper />} />
          <Route path="/helpers" element={<HelpersList />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loader" element={<Loader />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
