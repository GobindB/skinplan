'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [email, setEmail] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [waitlistCount, setWaitlistCount] = useState(13127);

    useEffect(() => {
        setIsVisible(true);

        // Simulate waitlist count increasing occasionally
        const interval = setInterval(() => {
            setWaitlistCount((prev) => prev + 1);
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return alert("Please enter an email.");
    
        try {
            const response = await fetch("/api/submit-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
    
            const data = await response.json();
            if (data.success) {
                alert("Thanks for joining our waitlist! We'll be in touch soon.");
                setEmail("");
                setWaitlistCount((prev) => prev + 1);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to submit. Please check your connection.");
        }
    };    
    
    return (
        <div
            className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans"
            data-oid="uw27i7c"
        >
            {/* Navigation */}
            <nav className="py-6 px-4 md:px-8 flex justify-between items-center" data-oid="q5w0rd8">
                <div
                    className="text-xl font-semibold tracking-tight text-teal-700"
                    data-oid="tmvcat5"
                >
                    SkinPlan
                </div>
                <button
                    className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm hover:bg-teal-700 transition-colors"
                    data-oid="316_ios"
                >
                    Join Waitlist
                </button>
            </nav>

            {/* Hero Section */}
            <section
                className="max-w-6xl mx-auto px-4 md:px-8 pt-12 pb-20 md:pt-20 md:pb-28"
                data-oid="rshx690"
            >
                <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="9vhxo_0">
                    <div
                        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        data-oid="slkosb2"
                    >
                        <h1
                            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-800"
                            data-oid="dw5l8f."
                        >
                            Your Personalized Skincare Plan.{' '}
                            <span className="text-teal-600" data-oid="mwfqbo9">
                                Based on Science, Not Guesswork.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8" data-oid="hn18t62">
                            Achieve better skin through a structured, guided routine tailored to
                            your skincare goals. No fads, no fluff—just data-driven skincare
                            planning that works.
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-3 mb-6"
                            data-oid="00ru51p"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email for early access"
                                className="px-4 py-3 rounded-lg border border-slate-200 flex-grow focus:outline-none focus:ring-2 focus:ring-teal-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                data-oid="o3nph_g"
                            />

                            <button
                                type="submit"
                                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                                data-oid="glc_4xd"
                            >
                                Join the Waitlist
                            </button>
                        </form>
                        <p className="text-sm text-slate-500" data-oid="3cqx4n4">
                            Join {waitlistCount} others already signed up!
                        </p>
                    </div>

                    <div
                        className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        data-oid="jt9atxv"
                    >
                        <div
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
                            data-oid="mudg:1t"
                        >
                            <div
                                className="bg-slate-800 text-white p-4 flex items-center justify-between"
                                data-oid="b79zc:q"
                            >
                                <div className="flex items-center gap-2" data-oid="ft02pfn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        data-oid="-azaw60"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                            data-oid="um3gik:"
                                        />
                                    </svg>
                                    <h3 className="font-medium" data-oid="5:9s7ap">
                                        Skincare Calendar
                                    </h3>
                                </div>
                                <button className="text-sm text-teal-300" data-oid="66omn:l">
                                    Save
                                </button>
                            </div>

                            <div className="p-4 bg-slate-900 text-white" data-oid="_fjmqde">
                                <div
                                    className="flex justify-between items-center mb-4"
                                    data-oid="dz8by5i"
                                >
                                    <div
                                        className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm inline-flex items-center"
                                        data-oid="35p7e11"
                                    >
                                        <span data-oid="qrxnrb6">Hydration boost</span>
                                        <span
                                            className="ml-2 bg-white text-teal-600 px-1.5 py-0.5 rounded-full text-xs font-medium"
                                            data-oid=".hgn3zp"
                                        >
                                            WEEK 1
                                        </span>
                                    </div>
                                    <button
                                        className="text-xs border border-slate-700 rounded-full px-3 py-1 flex items-center gap-1 text-slate-400"
                                        data-oid="-r7dflb"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            data-oid=":0:7w0:"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                                clipRule="evenodd"
                                                data-oid="rx_3x:s"
                                            />
                                        </svg>
                                        Reset
                                    </button>
                                </div>
                                <p className="text-sm text-slate-400 mb-4" data-oid="faaac_x">
                                    Routine Focus: Hydration + Acne Control
                                </p>

                                {/* Calendar Days */}
                                <div className="space-y-3" data-oid="610cd13">
                                    {/* Monday */}
                                    <div className="flex items-center gap-2" data-oid="ovf4x4t">
                                        <div className="w-12 text-center" data-oid="gv5idvz">
                                            <div
                                                className="text-xs text-slate-500"
                                                data-oid="mvezr.x"
                                            >
                                                MON
                                            </div>
                                            <div className="text-xl" data-oid="uot9jnk">
                                                10
                                            </div>
                                        </div>
                                        <div
                                            className="flex-1 flex gap-2 overflow-x-auto pb-1"
                                            data-oid="zwztpd3"
                                        >
                                            <div
                                                className="bg-slate-700 text-white px-3 py-2 rounded text-sm whitespace-nowrap"
                                                data-oid="7v82a7c"
                                            >
                                                Cleanser + Moisturizer
                                            </div>
                                            <div
                                                className="bg-amber-700 text-white px-3 py-2 rounded text-sm whitespace-nowrap"
                                                data-oid="nku:j:g"
                                            >
                                                SPF Sunscreen
                                            </div>
                                        </div>
                                    </div>

                                    {/* Wednesday */}
                                    <div className="flex items-center gap-2" data-oid="wqeq2xj">
                                        <div className="w-12 text-center" data-oid="qkr16un">
                                            <div
                                                className="text-xs text-slate-500"
                                                data-oid="gdwch_4"
                                            >
                                                WED
                                            </div>
                                            <div className="text-xl" data-oid="do2dcp.">
                                                12
                                            </div>
                                        </div>
                                        <div
                                            className="flex-1 flex gap-2 overflow-x-auto pb-1"
                                            data-oid="to6chc8"
                                        >
                                            <div
                                                className="bg-slate-700 text-white px-3 py-2 rounded text-sm whitespace-nowrap"
                                                data-oid="rdedgfv"
                                            >
                                                Cleanser + Moisturizer
                                            </div>
                                            <div
                                                className="bg-amber-700 text-white px-3 py-2 rounded text-sm whitespace-nowrap"
                                                data-oid="ni6v:rw"
                                            >
                                                SPF Sunscreen
                                            </div>
                                            <div
                                                className="bg-teal-600 text-white px-3 py-2 rounded text-sm whitespace-nowrap"
                                                data-oid="nwnav9j"
                                            >
                                                Exfoliation + Serum
                                            </div>
                                        </div>
                                    </div>

                                    {/* Friday */}
                                    <div className="flex items-center gap-2" data-oid="wligu08">
                                        <div className="w-12 text-center" data-oid="8w4900b">
                                            <div
                                                className="text-xs text-slate-500"
                                                data-oid="ah47gey"
                                            >
                                                FRI
                                            </div>
                                            <div className="text-xl" data-oid="ta4oglp">
                                                14
                                            </div>
                                        </div>
                                        <div
                                            className="flex-1 flex gap-2 overflow-x-auto pb-1"
                                            data-oid="t.dj4ut"
                                        >
                                            <div
                                                className="bg-slate-700 text-white px-3 py-2 rounded text-sm whitespace-nowrap"
                                                data-oid="_hquxvf"
                                            >
                                                Cleanser + Moisturizer
                                            </div>
                                            <div
                                                className="bg-amber-700 text-white px-3 py-2 rounded text-sm whitespace-nowrap"
                                                data-oid="4owoq._"
                                            >
                                                SPF Sunscreen
                                            </div>
                                            <div
                                                className="bg-slate-500 text-white px-3 py-2 rounded text-sm whitespace-nowrap"
                                                data-oid="p5ziwrg"
                                            >
                                                Mask + Serum
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sunday */}
                                    <div className="flex items-center gap-2" data-oid="rjtuooc">
                                        <div className="w-12 text-center" data-oid="ydf5f07">
                                            <div
                                                className="text-xs text-slate-500"
                                                data-oid="9jk3r2m"
                                            >
                                                SUN
                                            </div>
                                            <div className="text-xl" data-oid="1r7ek3:">
                                                16
                                            </div>
                                        </div>
                                        <div
                                            className="flex-1 flex gap-2 overflow-x-auto pb-1"
                                            data-oid=".f_4fl7"
                                        >
                                            <div
                                                className="bg-slate-700 text-white px-3 py-2 rounded text-sm whitespace-nowrap"
                                                data-oid="t6yzdfi"
                                            >
                                                Cleanser + Moisturizer
                                            </div>
                                            <div
                                                className="bg-amber-700 text-white px-3 py-2 rounded text-sm whitespace-nowrap"
                                                data-oid="wg9e4ux"
                                            >
                                                SPF Sunscreen
                                            </div>
                                            <div
                                                className="bg-indigo-600 text-white px-3 py-2 rounded text-sm whitespace-nowrap"
                                                data-oid="5it8ytp"
                                            >
                                                Full Routine Reset
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="mt-6 pt-4 border-t border-slate-700"
                                    data-oid="ufdh6k8"
                                >
                                    <div
                                        className="flex justify-between items-center mb-2"
                                        data-oid="_8zmwk8"
                                    >
                                        <div className="flex items-center gap-2" data-oid="h-v0qvd">
                                            <span data-oid="jj3wrfh">Glow & Repair</span>
                                            <span
                                                className="bg-white text-slate-800 px-1.5 py-0.5 rounded-full text-xs font-medium"
                                                data-oid=":yvd4yp"
                                            >
                                                WEEK 2
                                            </span>
                                        </div>
                                        <button
                                            className="text-xs border border-slate-700 rounded-full px-3 py-1 flex items-center gap-1 text-slate-400"
                                            data-oid="u03i-c7"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3 w-3"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                data-oid="m.-24hz"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                                    clipRule="evenodd"
                                                    data-oid="vmzmp0m"
                                                />
                                            </svg>
                                            Reset
                                        </button>
                                    </div>
                                    <p className="text-sm text-slate-400 mb-4" data-oid="uu2d1t0">
                                        Routine Focus: Brighten + Restore
                                    </p>

                                    <button
                                        className="w-full mt-4 bg-white text-slate-800 py-3 rounded-lg font-medium"
                                        data-oid=".2h9ni7"
                                    >
                                        GO TO THIS WEEK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-white py-16 md:py-24" data-oid="h8_go-k">
                <div className="max-w-6xl mx-auto px-4 md:px-8" data-oid="e5j:2g:">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-center mb-16"
                        data-oid="82bxvh5"
                    >
                        How It Works
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12" data-oid="3qjsvd.">
                        <div
                            className="bg-slate-50 rounded-xl p-6 text-center transition-transform hover:scale-105 duration-300"
                            data-oid="xhxomiy"
                        >
                            <div
                                className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="h4a3gne"
                            >
                                <span className="text-2xl font-bold" data-oid="7:xv8_m">
                                    1
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3" data-oid="_cqqj.g">
                                Set Your Goal
                            </h3>
                            <p className="text-slate-600" data-oid="55ervb3">
                                Choose your skincare focus—whether it's clearer skin, hydration, or
                                anti-aging.
                            </p>
                        </div>

                        <div
                            className="bg-slate-50 rounded-xl p-6 text-center transition-transform hover:scale-105 duration-300"
                            data-oid=":puk76m"
                        >
                            <div
                                className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="q75653j"
                            >
                                <span className="text-2xl font-bold" data-oid="2cej2pw">
                                    2
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3" data-oid="letbup9">
                                Get a Science-Backed Plan
                            </h3>
                            <p className="text-slate-600" data-oid="b33ypqs">
                                Receive a step-by-step routine with product usage timing, ingredient
                                recommendations, and habit tracking.
                            </p>
                        </div>

                        <div
                            className="bg-slate-50 rounded-xl p-6 text-center transition-transform hover:scale-105 duration-300"
                            data-oid="5fn4h27"
                        >
                            <div
                                className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="q08ful2"
                            >
                                <span className="text-2xl font-bold" data-oid="tf9pjvc">
                                    3
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3" data-oid="ft_o1gp">
                                Track and Adjust
                            </h3>
                            <p className="text-slate-600" data-oid="9ptimqp">
                                Follow your personalized plan, log progress, and adapt with
                                AI-driven insights.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Works */}
            <section className="py-16 md:py-24 bg-slate-50" data-oid="nfh7wbn">
                <div className="max-w-6xl mx-auto px-4 md:px-8" data-oid="sdq-xpd">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-center mb-6"
                        data-oid="k5r6htg"
                    >
                        Why This Works When Other Methods Fail
                    </h2>
                    <p
                        className="text-slate-600 text-center max-w-3xl mx-auto mb-16"
                        data-oid="79ivvp5"
                    >
                        No unrealistic promises—just measurable improvements over time with
                        science-backed routines.
                    </p>

                    <div className="overflow-x-auto" data-oid="zk5kt6-">
                        <table className="w-full border-collapse" data-oid="hoz5rvr">
                            <thead data-oid="snbaqln">
                                <tr data-oid="s7w18yf">
                                    <th className="p-4 text-left" data-oid="eh_.s9r"></th>
                                    <th
                                        className="p-4 text-center bg-slate-200 rounded-tl-lg"
                                        data-oid="3hniflu"
                                    >
                                        Traditional Skincare Advice
                                    </th>
                                    <th
                                        className="p-4 text-center bg-teal-600 text-white rounded-tr-lg"
                                        data-oid="z2oxqk2"
                                    >
                                        SkinPlan
                                    </th>
                                </tr>
                            </thead>
                            <tbody data-oid="-uk9f5c">
                                <tr className="border-b border-slate-200" data-oid="rbn0gp4">
                                    <td className="p-4 font-medium" data-oid="njc1auk">
                                        Personalization
                                    </td>
                                    <td className="p-4 text-center bg-slate-100" data-oid="p27ry-t">
                                        <span
                                            className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full"
                                            data-oid="bm_c247"
                                        >
                                            ❌
                                        </span>
                                        <span className="ml-2" data-oid="f8snwo1">
                                            One-size-fits-all
                                        </span>
                                    </td>
                                    <td className="p-4 text-center bg-teal-50" data-oid="6d9la-7">
                                        <span
                                            className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full"
                                            data-oid="mopgg8-"
                                        >
                                            ✓
                                        </span>
                                        <span className="ml-2" data-oid="uip0ztx">
                                            Tailored to your skin & goals
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-slate-200" data-oid="rxdixhe">
                                    <td className="p-4 font-medium" data-oid="twnjca_">
                                        Scientific Basis
                                    </td>
                                    <td className="p-4 text-center bg-slate-100" data-oid="8yvdjdw">
                                        <span
                                            className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full"
                                            data-oid="a_93h18"
                                        >
                                            ❌
                                        </span>
                                        <span className="ml-2" data-oid="emybu:r">
                                            Trend-based
                                        </span>
                                    </td>
                                    <td className="p-4 text-center bg-teal-50" data-oid="3b_-dlm">
                                        <span
                                            className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full"
                                            data-oid="8klw-x0"
                                        >
                                            ✓
                                        </span>
                                        <span className="ml-2" data-oid="-uevvd5">
                                            Backed by research
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-b border-slate-200" data-oid="idy6qrh">
                                    <td className="p-4 font-medium" data-oid="-8cy_oj">
                                        Structure & Tracking
                                    </td>
                                    <td className="p-4 text-center bg-slate-100" data-oid="vsuunki">
                                        <span
                                            className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full"
                                            data-oid="p1w:m45"
                                        >
                                            ❌
                                        </span>
                                        <span className="ml-2" data-oid="xi4ha2e">
                                            Self-managed
                                        </span>
                                    </td>
                                    <td className="p-4 text-center bg-teal-50" data-oid="ysnqhc5">
                                        <span
                                            className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full"
                                            data-oid="pqzmh.1"
                                        >
                                            ✓
                                        </span>
                                        <span className="ml-2" data-oid="5vjcpej">
                                            Guided planning & progress tracking
                                        </span>
                                    </td>
                                </tr>
                                <tr data-oid="kx36bli">
                                    <td className="p-4 font-medium" data-oid="-tlcogq">
                                        Adjustments Over Time
                                    </td>
                                    <td
                                        className="p-4 text-center bg-slate-100 rounded-bl-lg"
                                        data-oid="w5_c8ha"
                                    >
                                        <span
                                            className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full"
                                            data-oid="_9g8kdr"
                                        >
                                            ❌
                                        </span>
                                        <span className="ml-2" data-oid="rk::-j1">
                                            Manual changes
                                        </span>
                                    </td>
                                    <td
                                        className="p-4 text-center bg-teal-50 rounded-br-lg"
                                        data-oid="5k:m5gc"
                                    >
                                        <span
                                            className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full"
                                            data-oid="nyyuzx."
                                        >
                                            ✓
                                        </span>
                                        <span className="ml-2" data-oid="ypr3h93">
                                            Smart AI-driven adjustments
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Who It's For */}
            <section className="py-16 md:py-24 bg-white" data-oid="-l6ipil">
                <div className="max-w-6xl mx-auto px-4 md:px-8" data-oid="9.7v_79">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-center mb-16"
                        data-oid="0nyosbo"
                    >
                        Is This For You?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-oid="_fb_hme">
                        <div
                            className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                            data-oid="1lzs5.4"
                        >
                            <div
                                className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4"
                                data-oid="5w-.q_3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-teal-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="xvl65bn"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="k_ijyak"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2" data-oid="m805xsi">
                                Skincare Beginners
                            </h3>
                            <p className="text-slate-600" data-oid="_:wcze2">
                                Not sure where to start? We create a step-by-step plan for you.
                            </p>
                        </div>

                        <div
                            className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                            data-oid="07.yv.d"
                        >
                            <div
                                className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4"
                                data-oid="rh7xgpy"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-teal-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="m0n-pd4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        data-oid="..walrp"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2" data-oid="189hudl">
                                Routine Lovers
                            </h3>
                            <p className="text-slate-600" data-oid="su4c61h">
                                Already have a routine? We help you optimize and improve it.
                            </p>
                        </div>

                        <div
                            className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                            data-oid=".5-uqo2"
                        >
                            <div
                                className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4"
                                data-oid="vtdkjm."
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-teal-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=":22hilv"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="y:hgku4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2" data-oid="snz:1fz">
                                Busy Professionals
                            </h3>
                            <p className="text-slate-600" data-oid="i_n4qgr">
                                Minimal effort, maximum results with structured guidance.
                            </p>
                        </div>

                        <div
                            className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                            data-oid="f2n:2uj"
                        >
                            <div
                                className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4"
                                data-oid=".tvtu3i"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-teal-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="2g4qaop"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                        data-oid="q4_popi"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2" data-oid="9_dox_3">
                                Science Enthusiasts
                            </h3>
                            <p className="text-slate-600" data-oid="ny6qpkf">
                                Get routines grounded in real research, not marketing fads.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Science Behind It */}
            <section className="py-20 bg-slate-50" data-oid=".lhw-wh">
                <div className="max-w-6xl mx-auto px-4 md:px-8" data-oid="qg6ys:_">
                    <h2
                        className="text-3xl md:text-4xl font-light text-slate-800 text-center mb-6"
                        data-oid="z._1hq."
                    >
                        Powered by Science, Not Hype
                    </h2>
                    <p
                        className="text-center text-slate-600 max-w-2xl mx-auto mb-16"
                        data-oid="nct196w"
                    >
                        Our platform uses dermatologist-backed research to generate effective
                        skincare routines.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10 items-center" data-oid="2a_o66d">
                        <div data-oid="nrwkmi8">
                            <div className="mb-8" data-oid="ll8:3n-">
                                <h3
                                    className="text-xl font-medium mb-3 flex items-center"
                                    data-oid="7.pz96i"
                                >
                                    <span
                                        className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3"
                                        data-oid="y42g1qf"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="1ga3ly0"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=":hj6fo8"
                                            />
                                        </svg>
                                    </span>
                                    Evidence-Based Recommendations
                                </h3>
                                <p className="text-slate-600 pl-11" data-oid=".7wvba-">
                                    No guesswork—ingredient timing, frequency, and layering are
                                    optimized based on clinical studies.
                                </p>
                            </div>

                            <div className="mb-8" data-oid="3ko6.ez">
                                <h3
                                    className="text-xl font-medium mb-3 flex items-center"
                                    data-oid="9s4mj:k"
                                >
                                    <span
                                        className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3"
                                        data-oid="baecar-"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="o34ucpv"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="imhan:-"
                                            />
                                        </svg>
                                    </span>
                                    Measurable Progress Tracking
                                </h3>
                                <p className="text-slate-600 pl-11" data-oid="momu-.7">
                                    Track hydration levels, redness reduction, and other key metrics
                                    to see real improvements.
                                </p>
                            </div>

                            <div data-oid="985jmtq">
                                <h3
                                    className="text-xl font-medium mb-3 flex items-center"
                                    data-oid="xg15yp8"
                                >
                                    <span
                                        className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mr-3"
                                        data-oid="2avpqda"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=":_7xdfk"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="bn15-lt"
                                            />
                                        </svg>
                                    </span>
                                    Adaptive AI Technology
                                </h3>
                                <p className="text-slate-600 pl-11" data-oid="satpqca">
                                    Our system learns from your feedback and adjusts recommendations
                                    for continuously improving results.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm" data-oid="begbeu0">
                            <div className="text-center mb-6" data-oid="1el73i_">
                                <h3 className="text-lg font-medium text-slate-800" data-oid="kml6g6l">
                                    Hydration Improvement
                                </h3>
                                <p className="text-sm text-slate-500" data-oid="qpuuvi6">
                                    Sample progress tracking
                                </p>
                            </div>

                            <div className="h-48 sm:h-64 relative mx-auto max-w-xl px-2 sm:px-4" data-oid="6fee6z7">
                                <div
                                    className="absolute bottom-8 left-0 w-full h-[calc(100%-2rem)] flex items-end gap-1 sm:gap-2"
                                    data-oid="q7jm3hr"
                                >
                                    <div
                                        className="flex-1 h-[20%] bg-teal-100"
                                        data-oid="nfvv2.o"
                                    ></div>
                                    <div
                                        className="flex-1 h-[30%] bg-teal-200"
                                        data-oid="4svoxrd"
                                    ></div>
                                    <div
                                        className="flex-1 h-[45%] bg-teal-300"
                                        data-oid="kb6i3dj"
                                    ></div>
                                    <div
                                        className="flex-1 h-[60%] bg-teal-400"
                                        data-oid="1f1rskd"
                                    ></div>
                                    <div
                                        className="flex-1 h-[75%] bg-teal-500"
                                        data-oid="pks8tzi"
                                    ></div>
                                    <div
                                        className="flex-1 h-[85%] bg-teal-600"
                                        data-oid="mhanm_d"
                                    ></div>
                                </div>

                                <div
                                    className="absolute bottom-0 left-0 w-full border-t border-gray-200 pt-2 text-[10px] sm:text-xs text-gray-500 flex justify-between px-1"
                                    data-oid="j.67:w."
                                >
                                    <div className="flex-1 text-center truncate px-0.5" data-oid="3i_-i7t">Week 1</div>
                                    <div className="flex-1 text-center truncate px-0.5" data-oid="ek4a1ie">Week 2</div>
                                    <div className="flex-1 text-center truncate px-0.5" data-oid="lvd8gr1">Week 3</div>
                                    <div className="flex-1 text-center truncate px-0.5" data-oid="dano78.">Week 4</div>
                                    <div className="flex-1 text-center truncate px-0.5" data-oid="i_9phnj">Week 5</div>
                                    <div className="flex-1 text-center truncate px-0.5" data-oid="ddezkk5">Week 6</div>
                                </div>
                            </div>

                            <div
                                className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center"
                                data-oid="54g9l7p"
                            >
                                <div className="flex items-center" data-oid="yt4me:k">
                                    <div
                                        className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center"
                                        data-oid="jd202ur"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-teal-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="s7k.jml"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="uzp.co-"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600" data-oid="pa9yy8j">
                                        Results vary by individual and consistency
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

   {/* Final CTA */}
   <section className="py-16 md:py-24 bg-teal-600 text-white" data-oid="9-ym13w">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center" data-oid="bopn769">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="zwb1m2k">
                        Join the Waitlist – Be the First to Try It!
                    </h2>
                    <p className="text-teal-100 mb-8 max-w-2xl mx-auto" data-oid="dx9ffhh">
                        Get early access to our skincare planning platform and start your journey to
                        healthier, more radiant skin.
                    </p>

                    <div className="bg-white rounded-xl p-8 shadow-lg" data-oid="khw069t">
                        <h3
                            className="text-2xl font-semibold text-slate-800 mb-6"
                            data-oid="xdng6pw"
                        >
                            Get Your Personalized Skincare Plan
                        </h3>

                        <ul
                            className="text-left text-slate-700 mb-8 max-w-md mx-auto"
                            data-oid="ydg8oy-"
                        >
                            <li className="flex items-start mb-4" data-oid="o8w7n31">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-teal-500 mr-2 mt-0.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    data-oid="o37x6il"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                        data-oid="8u08jds"
                                    />
                                </svg>
                                <span data-oid="glgcfor">
                                    Structured plans tailored to YOUR skin
                                </span>
                            </li>
                            <li className="flex items-start mb-4" data-oid="zku.55m">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-teal-500 mr-2 mt-0.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    data-oid="rfevn_r"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                        data-oid="fxo4:qv"
                                    />
                                </svg>
                                <span data-oid="ynv57-4">
                                    Measurable results without expensive trial & error
                                </span>
                            </li>
                            <li className="flex items-start" data-oid="tokj2jl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-teal-500 mr-2 mt-0.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    data-oid="791vmaq"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                        data-oid=":2p:c:r"
                                    />
                                </svg>
                                <span data-oid="pqultlq">
                                    Science-backed, AI-powered personalization
                                </span>
                            </li>
                        </ul>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                            data-oid="oqss3_."
                        >
                            <input
                                type="email"
                                placeholder="Enter your email for early access"
                                className="px-4 py-3 rounded-lg border border-slate-200 flex-grow focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                data-oid=".tujx7e"
                            />

                            <button
                                type="submit"
                                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                                data-oid="ugpstb3"
                            >
                                Join the Waitlist
                            </button>
                        </form>

                        <p className="text-sm text-slate-500 mt-4" data-oid="_1.3058">
                            Join {waitlistCount} others already signed up!
                        </p>

                        <div className="flex justify-center gap-4 mt-6" data-oid="zb3j0lr">
                            <div
                                className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs"
                                data-oid="_i:fq52"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="3-wk:se"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        data-oid="d_w8z7a"
                                    />
                                </svg>
                                Backed by research
                            </div>
                            <div
                                className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs"
                                data-oid="orlhs1q"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="du9wboj"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        data-oid="5c:m328"
                                    />
                                </svg>
                                Privacy protected
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-800 text-slate-300 py-12" data-oid="fxahq41">
                <div className="max-w-6xl mx-auto px-4 md:px-8" data-oid="ztjwe6e">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="iwmzexa"
                    >
                        <div className="mb-6 md:mb-0" data-oid=":_x40i5">
                            <div
                                className="text-xl font-semibold tracking-tight text-white mb-2"
                                data-oid="li:nccw"
                            >
                                SkinPlan
                            </div>
                            <p className="text-sm text-slate-400" data-oid="ja90k.8">
                                Your personalized skincare journey
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8" data-oid="lq7g0a5">
                            <div data-oid="3x_hn3b">
                                <h4 className="font-medium text-white mb-3" data-oid="5cfxp-9">
                                    Contact
                                </h4>
                                <p className="text-sm" data-oid="t9mb.9i">
                                    support@skinplan.io
                                </p>
                            </div>

                            <div data-oid="pb.anoq">
                                <h4 className="font-medium text-white mb-3" data-oid="0ml1nho">
                                    Follow Us
                                </h4>
                                <div className="flex gap-4" data-oid="lnxt31x">
                                    <a
                                        href="#"
                                        className="text-slate-400 hover:text-white transition-colors"
                                        data-oid="0fidkxz"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="6wd3t6a"
                                        >
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.566-.247-2.229-.616-.054.626 1.956 2.444 3.379 3.949 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                                data-oid="_gk7m-o"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-slate-400 hover:text-white transition-colors"
                                        data-oid=":zspv4t"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="-pphk0y"
                                        >
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                data-oid="f49yxl2"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="border-t border-slate-700 mt-8 pt-8 text-sm text-slate-500 text-center"
                        data-oid="t1nlg89"
                    >
                        <p data-oid="_oq0khv">© 2023 SkinPlan. All rights reserved.</p>
                        <div className="flex justify-center gap-4 mt-2" data-oid="v9bkj2f">
                            <a
                                href="#"
                                className="hover:text-slate-300 transition-colors"
                                data-oid="v8_981t"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="hover:text-slate-300 transition-colors"
                                data-oid="jid8lx."
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
