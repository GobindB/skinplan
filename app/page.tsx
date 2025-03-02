'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [email, setEmail] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [waitlistCount, setWaitlistCount] = useState(127);

    useEffect(() => {
        setIsVisible(true);

        // Simulate waitlist count increasing occasionally
        const interval = setInterval(() => {
            setWaitlistCount((prev) => prev + 1);
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (email) {
            // In a real app, this would send the email to a backend
            alert("Thanks for joining our waitlist! We'll be in touch soon.");
            setEmail('');
            setWaitlistCount((prev) => prev + 1);
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans"
            data-oid="uw27i7c"
        >
            {/* Navigation */}
            <nav className="py-6 px-4 md:px-8 flex justify-between items-center" data-oid="thdfwzp">
                <div
                    className="text-2xl font-medium tracking-tight text-blue-900"
                    data-oid="q8wf27c"
                >
                    skinplan
                </div>
                <button
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
                    data-oid="mfm8e_9"
                >
                    For Professionals
                </button>
            </nav>

            {/* Hero Section */}
            <section
                className={`max-w-6xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                data-oid="972z3g3"
            >
                <div className="flex flex-col md:flex-row items-center" data-oid="nbkixap">
                    <div className="md:w-1/2 mb-10 md:mb-0" data-oid="p1el2hz">
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
                            data-oid="ofu_2hz"
                        >
                            Your Personalized Skincare Plan.
                            <span className="text-blue-700 font-normal" data-oid="xvw.8-m">
                                {' '}
                                Based on Science, Not Guesswork.
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-xl" data-oid="14-rha4">
                            Achieve better skin through a structured, guided routine tailored to
                            your skincare goals. No fads, no fluff—just data-driven skincare
                            planning that works.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-3 mb-6"
                            data-oid="rirkc.0"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email to get early access"
                                className="px-4 py-3 rounded-full border border-gray-200 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                data-oid="wbpmlwp"
                            />

                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
                                data-oid="cn71a9a"
                            >
                                Join the Waitlist
                            </button>
                        </form>

                        <p className="text-sm text-gray-500" data-oid="r0fwj:9">
                            Join {waitlistCount} others already signed up!
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center" data-oid="3wvfq7.">
                        <div className="relative w-full max-w-md" data-oid="m4_nd80">
                            <div
                                className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-xl"
                                data-oid="kw-2x33"
                            ></div>
                            <div
                                className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                data-oid="q92mo4_"
                            >
                                <div className="flex items-center mb-6" data-oid="3t:pjp.">
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium"
                                        data-oid="pbs3buq"
                                    >
                                        JD
                                    </div>
                                    <div className="ml-4" data-oid="b::.ox8">
                                    <div className="font-medium" data-oid="it70.6a">
                                        Jane&#39;s Skincare Plan
                                    </div>
                                    <div className="text-sm text-gray-500" data-oid="-ek6wpd">
                                        Goal: Hydration &amp; Anti-aging
                                    </div>
                                </div>
                                </div>

                                <div className="space-y-4" data-oid="f_b4i5o">
                                    <div className="p-3 bg-blue-50 rounded-lg" data-oid="7.5039m">
                                        <div
                                            className="text-sm font-medium text-blue-800"
                                            data-oid="sen-2ph"
                                        >
                                            Morning Routine
                                        </div>
                                        <div
                                            className="text-xs text-gray-600 mt-1"
                                            data-oid="b3os66f"
                                        >
                                            1. Gentle Cleanser
                                            <br data-oid="2:6.8uj" />
                                            2. Vitamin C Serum
                                            <br data-oid="xnsguu6" />
                                            3. Hyaluronic Acid
                                            <br data-oid="96w8bpb" />
                                            4. Moisturizer with SPF 30+
                                        </div>
                                    </div>

                                    <div className="p-3 bg-indigo-50 rounded-lg" data-oid="p:dcev3">
                                        <div
                                            className="text-sm font-medium text-indigo-800"
                                            data-oid="-kms4le"
                                        >
                                            Evening Routine
                                        </div>
                                        <div
                                            className="text-xs text-gray-600 mt-1"
                                            data-oid="ph82qgv"
                                        >
                                            1. Oil Cleanser
                                            <br data-oid="4lip7.c" />
                                            2. Water-based Cleanser
                                            <br data-oid="e528wq3" />
                                            3. Retinol (Mon, Wed, Fri)
                                            <br data-oid="ql2bbr1" />
                                            4. Peptide Serum
                                            <br data-oid="176u:nx" />
                                            5. Rich Moisturizer
                                        </div>
                                    </div>

                                    <div
                                        className="bg-gray-100 h-24 rounded-lg flex items-center justify-center"
                                        data-oid="kunztyg"
                                    >
                                        <div className="text-sm text-gray-500" data-oid="yzo9vgj">
                                            Progress Tracking Chart
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-white py-20" data-oid="xdd1-p_">
                <div className="max-w-6xl mx-auto px-4 md:px-8" data-oid="h8gpz9x">
                    <h2
                        className="text-3xl md:text-4xl font-light text-center mb-16"
                        data-oid="ppsj.au"
                    >
                        How It Works
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10" data-oid="lhhstxs">
                        <div className="text-center" data-oid="dtcd4he">
                            <div
                                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-medium mx-auto mb-6"
                                data-oid="p:xqdgo"
                            >
                                1
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="jzsuf:q">
                                Set Your Goal
                            </h3>
                            <p className="text-gray-600" data-oid="mw7kl61">
                                Choose your skincare focus—whether it&#39;s clearer skin, hydration, or
                                anti-aging.
                            </p>
                        </div>

                        <div className="text-center" data-oid="b-o6_tu">
                            <div
                                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-medium mx-auto mb-6"
                                data-oid="meawy-d"
                            >
                                2
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="-1.08bc">
                                Get a Science-Backed Plan
                            </h3>
                            <p className="text-gray-600" data-oid="8rciw4j">
                                Receive a step-by-step routine with product usage timing, ingredient
                                recommendations, and habit tracking.
                            </p>
                        </div>

                        <div className="text-center" data-oid="vw7botr">
                            <div
                                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-medium mx-auto mb-6"
                                data-oid=":9nsvo2"
                            >
                                3
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="rm39wo6">
                                Track and Adjust
                            </h3>
                            <p className="text-gray-600" data-oid="-hxrsn9">
                                Follow your personalized plan, log progress, and adapt with
                                AI-driven insights.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Works */}
            <section className="py-20 bg-blue-50" data-oid="9oy9yw4">
                <div className="max-w-6xl mx-auto px-4 md:px-8" data-oid="fvv:3y_">
                    <h2
                        className="text-3xl md:text-4xl font-light text-center mb-6"
                        data-oid="dusc2fj"
                    >
                        Why This Works When Other Methods Fail
                    </h2>
                    <p
                        className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
                        data-oid="z-14r28"
                    >
                        No unrealistic promises—just measurable improvements over time with
                        science-backed routines.
                    </p>

                    <div className="overflow-x-auto" data-oid="lrsqz:b">
                        <table className="w-full bg-white rounded-xl shadow-sm" data-oid="-394c:_">
                            <thead data-oid="_92w6y1">
                                <tr className="border-b" data-oid="io14wx0">
                                    <th className="py-4 px-6 text-left" data-oid="ru:g9jg"></th>
                                    <th
                                        className="py-4 px-6 text-left text-gray-500"
                                        data-oid="2bnrj8-"
                                    >
                                        Traditional Skincare Advice
                                    </th>
                                    <th
                                        className="py-4 px-6 text-left font-medium text-blue-700"
                                        data-oid="0oqxhx-"
                                    >
                                        This Platform
                                    </th>
                                </tr>
                            </thead>
                            <tbody data-oid="qrqtlbj">
                                <tr className="border-b" data-oid="o4qq_q4">
                                    <td className="py-4 px-6 font-medium" data-oid="rgtgi7j">
                                        Personalization
                                    </td>
                                    <td className="py-4 px-6 text-gray-500" data-oid="6ob_eyx">
                                        ❌ One-size-fits-all
                                    </td>
                                    <td className="py-4 px-6 text-blue-700" data-oid="8m4ojl8">
                                        ✅ Tailored to your skin & goals
                                    </td>
                                </tr>
                                <tr className="border-b" data-oid="8dz2g4j">
                                    <td className="py-4 px-6 font-medium" data-oid=":lo_3-b">
                                        Scientific Basis
                                    </td>
                                    <td className="py-4 px-6 text-gray-500" data-oid="nn1b.ud">
                                        ❌ Trend-based
                                    </td>
                                    <td className="py-4 px-6 text-blue-700" data-oid="jq6zr._">
                                        ✅ Backed by research
                                    </td>
                                </tr>
                                <tr className="border-b" data-oid=".6rwrfk">
                                    <td className="py-4 px-6 font-medium" data-oid="jaqh_b1">
                                        Structure & Tracking
                                    </td>
                                    <td className="py-4 px-6 text-gray-500" data-oid="6nihbd0">
                                        ❌ Self-managed
                                    </td>
                                    <td className="py-4 px-6 text-blue-700" data-oid="0s5jeg:">
                                        ✅ Guided planning & progress tracking
                                    </td>
                                </tr>
                                <tr data-oid="6nqpm6y">
                                    <td className="py-4 px-6 font-medium" data-oid="0kjb9x8">
                                        Adjustments Over Time
                                    </td>
                                    <td className="py-4 px-6 text-gray-500" data-oid="6q.51_r">
                                        ❌ Manual changes
                                    </td>
                                    <td className="py-4 px-6 text-blue-700" data-oid="3az9_-0">
                                        ✅ Smart AI-driven adjustments
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Who It's For */}
            <section className="py-20 bg-white" data-oid="xz35hda">
                <div className="max-w-6xl mx-auto px-4 md:px-8" data-oid="zjjmf0h">
                    <h2
                        className="text-3xl md:text-4xl font-light text-center mb-16"
                        data-oid="ck:5fpg"
                    >
                        Is This For You?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="-r82otm">
                        <div className="bg-blue-50 p-6 rounded-xl" data-oid="e0j3sag">
                            <div
                                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4"
                                data-oid="8tino_8"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="wk4.cuw"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="p:y1gmj"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium mb-2" data-oid="77vs:3q">
                                Skincare Beginners
                            </h3>
                            <p className="text-gray-600" data-oid="m_:b8g4">
                                Not sure where to start? We create a step-by-step plan for you.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl" data-oid="v7h1q05">
                            <div
                                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4"
                                data-oid="flys8i7"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="o1lonvp"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        data-oid="gw7anum"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium mb-2" data-oid="6uyce_0">
                                Routine Lovers
                            </h3>
                            <p className="text-gray-600" data-oid="mo:lmp0">
                                Already have a routine? We help you optimize and improve it.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl" data-oid="nzu:gtb">
                            <div
                                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4"
                                data-oid="6aqcl6p"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="nj7ae_:"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        data-oid="wwg_swn"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium mb-2" data-oid="1xdvtot">
                                Busy Professionals
                            </h3>
                            <p className="text-gray-600" data-oid="1-cz49s">
                                Minimal effort, maximum results with structured guidance.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl" data-oid="zp77ic-">
                            <div
                                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4"
                                data-oid="k4giz_l"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="6:lrjnq"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                        data-oid="k6i7j5y"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium mb-2" data-oid="fpj378e">
                                Science Enthusiasts
                            </h3>
                            <p className="text-gray-600" data-oid="8l66h_f">
                                Get routines grounded in real research, not marketing fads.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Science Behind It */}
            <section className="py-20 bg-gray-50" data-oid=".lhw-wh">
                <div className="max-w-6xl mx-auto px-4 md:px-8" data-oid="qg6ys:_">
                    <h2
                        className="text-3xl md:text-4xl font-light text-center mb-6"
                        data-oid="z._1hq."
                    >
                        Powered by Science, Not Hype
                    </h2>
                    <p
                        className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
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
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3"
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
                                <p className="text-gray-600 pl-11" data-oid=".7wvba-">
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
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3"
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
                                <p className="text-gray-600 pl-11" data-oid="momu-.7">
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
                                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3"
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
                                <p className="text-gray-600 pl-11" data-oid="satpqca">
                                    Our system learns from your feedback and adjusts recommendations
                                    for continuously improving results.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm" data-oid="begbeu0">
                            <div className="text-center mb-6" data-oid="1el73i_">
                                <h3 className="text-lg font-medium" data-oid="kml6g6l">
                                    Hydration Improvement
                                </h3>
                                <p className="text-sm text-gray-500" data-oid="qpuuvi6">
                                    Sample progress tracking
                                </p>
                            </div>

                            <div className="h-64 relative" data-oid="6fee6z7">
                                <div
                                    className="absolute bottom-0 left-0 w-full h-full flex items-end"
                                    data-oid="q7jm3hr"
                                >
                                    <div
                                        className="w-1/6 h-[20%] bg-blue-100 mx-1"
                                        data-oid="nfvv2.o"
                                    ></div>
                                    <div
                                        className="w-1/6 h-[30%] bg-blue-200 mx-1"
                                        data-oid="4svoxrd"
                                    ></div>
                                    <div
                                        className="w-1/6 h-[45%] bg-blue-300 mx-1"
                                        data-oid="kb6i3dj"
                                    ></div>
                                    <div
                                        className="w-1/6 h-[60%] bg-blue-400 mx-1"
                                        data-oid="1f1rskd"
                                    ></div>
                                    <div
                                        className="w-1/6 h-[75%] bg-blue-500 mx-1"
                                        data-oid="pks8tzi"
                                    ></div>
                                    <div
                                        className="w-1/6 h-[85%] bg-blue-600 mx-1"
                                        data-oid="mhanm_d"
                                    ></div>
                                </div>

                                <div
                                    className="absolute bottom-0 left-0 w-full border-t border-gray-200 pt-2 text-xs text-gray-500 flex justify-between"
                                    data-oid="j.67:w."
                                >
                                    <span data-oid="3i_-i7t">Week 1</span>
                                    <span data-oid="ek4a1ie">Week 2</span>
                                    <span data-oid="lvd8gr1">Week 3</span>
                                    <span data-oid="dano78.">Week 4</span>
                                    <span data-oid="i_9phnj">Week 5</span>
                                    <span data-oid="ddezkk5">Week 6</span>
                                </div>
                            </div>

                            <div
                                className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center"
                                data-oid="54g9l7p"
                            >
                                <div className="flex items-center" data-oid="yt4me:k">
                                    <div
                                        className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"
                                        data-oid="jd202ur"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-blue-600"
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
            <section className="py-20 bg-blue-600 text-white" data-oid="myzj53l">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center" data-oid="q97g_85">
                    <h2 className="text-3xl md:text-4xl font-light mb-6" data-oid="j584n38">
                        Join the Waitlist – Be the First to Try It!
                    </h2>

                    <ul className="mb-8 inline-block text-left mx-auto" data-oid="29w.ffq">
                        <li className="mb-3 flex items-start" data-oid="y_ax29b">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="6pni8yg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                    data-oid="fau8bh4"
                                />
                            </svg>
                            <span data-oid="f-iitqg">Structured plans tailored to YOUR skin</span>
                        </li>
                        <li className="mb-3 flex items-start" data-oid="pstxcnp">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="x_g7cmc"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                    data-oid="7pwcm4."
                                />
                            </svg>
                            <span data-oid="f._2gaq">
                                Measurable results without expensive trial & error
                            </span>
                        </li>
                        <li className="flex items-start" data-oid="rlsb6if">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="ci3v7.n"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                    data-oid="4ihjjku"
                                />
                            </svg>
                            <span data-oid="equnxnf">
                                Science-backed, AI-powered personalization
                            </span>
                        </li>
                    </ul>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8"
                        data-oid="x9b3vrm"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email to get early access"
                            className="px-4 py-3 rounded-full border border-blue-400 bg-blue-500 text-white placeholder-blue-200 flex-grow focus:outline-none focus:ring-2 focus:ring-white"
                            required
                            data-oid="zpw7qxa"
                        />

                        <button
                            type="submit"
                            className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium"
                            data-oid="f7nj1ka"
                        >
                            Join the Waitlist
                        </button>
                    </form>

                    <div className="flex justify-center space-x-4" data-oid="l3_qx_l">
                        <div
                            className="bg-blue-500 px-3 py-1 rounded-full text-sm"
                            data-oid="96yi.cj"
                        >
                            Backed by research
                        </div>
                        <div
                            className="bg-blue-500 px-3 py-1 rounded-full text-sm"
                            data-oid="hjmf7ic"
                        >
                            Created with dermatologists
                        </div>
                        <div
                            className="bg-blue-500 px-3 py-1 rounded-full text-sm"
                            data-oid="0ykc_i."
                        >
                            Data-driven results
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 py-12 px-4 md:px-8" data-oid="tu_hw9h">
                <div
                    className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center"
                    data-oid="vrjw6lz"
                >
                    <div
                        className="text-xl font-medium tracking-tight text-blue-900 mb-4 md:mb-0"
                        data-oid="s1f-_gl"
                    >
                        skinplan
                    </div>

                    <div className="text-sm text-gray-500" data-oid="6zglyv2">
                        © 2023 SkinPlan. All rights reserved.
                    </div>

                    <div className="mt-4 md:mt-0" data-oid="jc2ykdj">
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-blue-600 mx-2"
                            data-oid="7jb6rgj"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-blue-600 mx-2"
                            data-oid="lp:-h:l"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="mailto:hello@skinplan.app"
                            className="text-sm text-gray-500 hover:text-blue-600 mx-2"
                            data-oid="ehjpw38"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
