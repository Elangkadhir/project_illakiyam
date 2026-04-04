import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../shared/Header";
import Loader from "../components/Loader";
import { Toaster } from "sonner";
import APPROUTES from "./app_Routes";
import OurGoal from "../pages/goal";
const Home = lazy(() => import("./../pages/home/index"));
const Profile = lazy(() => import("./../pages/profile/index"));
const Explore = lazy(() => import("./../pages/explore/index"));
const Contact = lazy(() => import("./../pages/contact/index"));
const Thirukural = lazy(() => import("./../pages/thirukural/index"));
const KuralList = lazy(() => import("../pages/thirukural/KuralList"));
const KuralDetail = lazy(() => import("../pages/thirukural/KuralDetail"));

const PaalList = lazy(() => import("../pages/thirukural/PaalList"));
const PaalDetail = lazy(() => import("../pages/thirukural/PaalDetail"));

const AthikaaramList = lazy(() => import("../pages/thirukural/AthikaaramList"));
const AthikaaramDetail = lazy(() => import("../pages/thirukural/AthikaaramDetail"));

const PageRouting = () => {
    return (
        <div>
            <Router>
                <Toaster position="top-right" richColors offset={80} />

                <div className="flex flex-col h-screen overflow-hidden">
                    <Header />
                    <div className="flex-1 overflow-y-auto scrollHide">
                        <Suspense fallback={<Loader loading={true} text="loading...." />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path={APPROUTES.PROFILE} element={<Profile />} />
                                <Route path={APPROUTES.EXPLORE} element={<Explore />} />
                                <Route path={APPROUTES.CONTACT} element={<Contact />} />
                                <Route path={APPROUTES.OURGOAL} element={<OurGoal />} />
                                <Route path={APPROUTES.THIRUKURAL} element={<Thirukural />}>
                                    <Route path="kural" element={<KuralList />} />
                                    <Route path="kural/:id" element={<KuralDetail />} />

                                    <Route path="paal" element={<PaalList />} />
                                    <Route path="paal/:id" element={<PaalDetail />} />

                                    <Route path="athikaaram" element={<AthikaaramList />} />
                                    <Route path="athikaaram/:id" element={<AthikaaramDetail />} />
                                </Route>                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default PageRouting;
