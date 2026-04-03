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
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default PageRouting;
