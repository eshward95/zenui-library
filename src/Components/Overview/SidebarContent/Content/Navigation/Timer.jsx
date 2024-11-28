import React, { useState, useEffect } from 'react';

// components
import Showcode from '../../../../../Shared/ShowCode';
import OverviewFooter from '../../../../../Shared/OverviewFooter';
import ContentHeader from '../../../../../Shared/ContentHeader';
import { Helmet } from 'react-helmet';

// contents for scrollspy
import {timerContents} from '../../../../../Utils/ContentsConfig/NavigationContents';
import { useScrollSpy } from '../../../../../CustomHooks/useScrollSpy';
import {useToggleCardView} from "../../../../../CustomHooks/ButtonToggle.js";

const Timer = () => {

    const toggleCardView = useToggleCardView();

    // toggle actions
    const [timerStyle1Preview, setTimerStyle1Preview] = useState(true);
    const [timerStyle1Code, setTimeStyle1Code] = useState(false);

    const [timerStyle2Preview, setTimerStyle2Preview] = useState(true);
    const [timerStyle2Code, setTimeStyle2Code] = useState(false);

    const [timerStyle3Preview, setTimerStyle3Preview] = useState(true);
    const [timerStyle3Code, setTimeStyle3Code] = useState(false);

    const [timerStyle4Preview, setTimerStyle4Preview] = useState(true);
    const [timerStyle4Code, setTimeStyle4Code] = useState(false);

    const [timerStyle5Preview, setTimerStyle5Preview] = useState(true);
    const [timerStyle5Code, setTimeStyle5Code] = useState(false);

    const [timerStyle6Preview, setTimerStyle6Preview] = useState(true);
    const [timerStyle6Code, setTimeStyle6Code] = useState(false);

    // scrollspy
    const sectionIds = timerContents.map((item) => item.href.slice(1));
    const activeSection = useScrollSpy(sectionIds);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const targetDate = '2024-12-31T23:59:59'

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (number) => number.toString().padStart(2, '0');

    const [timeLeft2, setTimeLeft2] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        durations: {
            days: 365,
            hours: 24,
            minutes: 60,
            seconds: 60
        }
    });

    const size = 100

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft2({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                    durations: {
                        days: 365,
                        hours: 24,
                        minutes: 60,
                        seconds: 60
                    }
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, [targetDate]);

    const CircleTimer = ({ value, type }) => {
        const strokeWidth = 7;
        const radius = (size - strokeWidth) / 2;
        const circumference = radius * 2 * Math.PI;
        const progress = (value / timeLeft2.durations[type]) * 100;
        const strokeDashoffset = circumference - (progress / 100) * circumference;

        return (
            <div className="relative" style={{ width: size, height: size }}>
                {/* Background Circle */}
                <svg className="absolute top-0 left-0" width={size} height={size}>
                    <circle
                        cx={size/2}
                        cy={size/2}
                        r={radius}
                        fill="transparent"
                        stroke="#e5e5e5"
                        strokeWidth={strokeWidth}
                    />
                </svg>

                {/* Progress Circle */}
                <svg className="absolute top-0 left-0" width={size} height={size}>
                    <circle
                        cx={size/2}
                        cy={size/2}
                        r={radius}
                        fill="transparent"
                        stroke="#17b4d3"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        style={{
                            transition: 'stroke-dashoffset 1s linear',
                            transform: 'rotate(-90deg)',
                            transformOrigin: '50% 50%'
                        }}
                    />
                </svg>

                {/* Time Display */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <div className="text-[1.2rem] font-semibold text-[#17b4d3]">{value}</div>
                    <div className="text-[0.6rem] text-gray-500">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                </div>
            </div>
        );
    };

    return (
        <>
            <aside className='flex items-start gap-6 justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
                <div>
                    <ContentHeader
                        id='timer-style-1'
                        text={'timer style 1'}
                    />

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    timerStyle1Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    timerStyle1Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setTimerStyle1Preview, setTimeStyle1Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    timerStyle1Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setTimerStyle1Preview, setTimeStyle1Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {timerStyle1Preview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div className='grid grid-cols-4 gap-[10px] mt-2'>
                                    <div className='flex items-center justify-center flex-col gap-[0.2rem]'>
                                        <h5 className='py-2 px-3 bg-[#d2f1f7] text-[1.9rem] font-semibold'>{formatNumber(timeLeft.days)}</h5>
                                        <span className='text-[0.7rem]'>Days</span>
                                    </div>
                                    <div className='flex items-center justify-center flex-col gap-[0.2rem]'>
                                        <h5 className='py-2 px-3 bg-[#d2f1f7] text-[1.9rem] font-semibold'>{formatNumber(timeLeft.hours)}</h5>
                                        <span className='text-[0.7rem]'>Hours</span>
                                    </div>
                                    <div className='flex items-center justify-center flex-col gap-[0.2rem]'>
                                        <h5 className='py-2 px-3 bg-[#d2f1f7] text-[1.9rem] font-semibold'>{formatNumber(timeLeft.minutes)}</h5>
                                        <span className='text-[0.7rem]'>Minutes</span>
                                    </div>
                                    <div className='flex items-center justify-center flex-col gap-[0.2rem]'>
                                        <h5 className='py-2 px-3 bg-[#d2f1f7] text-[1.9rem] font-semibold'>{formatNumber(timeLeft.seconds)}</h5>
                                        <span className='text-[0.7rem]'>Seconds</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {timerStyle1Code && (
                            <Showcode
                                code='
import React, {useEffect, useState} from "react";

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const targetDate = "2024-12-31T23:59:59"

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (number) => number.toString().padStart(2, "0");

    return (
        <div className="grid grid-cols-4 gap-[10px] mt-2">
            <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                <h5 className="py-2 px-3 bg-[#d2f1f7] text-[1.9rem] font-semibold">{formatNumber(timeLeft.days)}</h5>
                <span className="text-[0.7rem]">Days</span>
            </div>
            <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                <h5 className="py-2 px-3 bg-[#d2f1f7] text-[1.9rem] font-semibold">{formatNumber(timeLeft.hours)}</h5>
                <span className="text-[0.7rem]">Hours</span>
            </div>
            <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                <h5 className="py-2 px-3 bg-[#d2f1f7] text-[1.9rem] font-semibold">{formatNumber(timeLeft.minutes)}</h5>
                <span className="text-[0.7rem]">Minutes</span>
            </div>
            <div className="flex items-center justify-center flex-col gap-[0.2rem]">
                <h5 className="py-2 px-3 bg-[#d2f1f7] text-[1.9rem] font-semibold">{formatNumber(timeLeft.seconds)}</h5>
                <span className="text-[0.7rem]">Seconds</span>
            </div>
        </div>
    );
};

export default Timer;
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            id='timer-style-2'
                            text={'timer style 2'}
                        />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    timerStyle2Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    timerStyle2Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setTimerStyle2Preview, setTimeStyle2Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    timerStyle2Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setTimerStyle2Preview, setTimeStyle2Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {timerStyle2Preview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div className="grid grid-cols-4 gap-8 p-4">
                                    <div className="text-center">
                                        <div
                                            className="text-[2.2rem] leading-[38px] font-bold text-[#17b4d3]">{formatNumber(timeLeft.days)}</div>
                                        <div className="text-[0.7rem] text-gray-500">Days</div>
                                    </div>
                                    <div className="text-center">
                                        <div
                                            className="text-[2.2rem] leading-[38px] font-bold text-[#17b4d3]">{formatNumber(timeLeft.hours)}</div>
                                        <div className="text-[0.7rem] text-gray-500">Hours</div>
                                    </div>
                                    <div className="text-center">
                                        <div
                                            className="text-[2.2rem] leading-[38px] font-bold text-[#17b4d3]">{formatNumber(timeLeft.minutes)}</div>
                                        <div className="text-[0.7rem] text-gray-500">Minutes</div>
                                    </div>
                                    <div className="text-center">
                                        <div
                                            className="text-[2.2rem] leading-[38px] font-bold text-[#17b4d3]">{formatNumber(timeLeft.seconds)}</div>
                                        <div className="text-[0.7rem] text-gray-500">Seconds</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {timerStyle2Code && (
                            <Showcode
                                code='
import React, {useEffect, useState} from "react";

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const targetDate = "2024-12-31T23:59:59"

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (number) => number.toString().padStart(2, "0");

    return (
        <div className="grid grid-cols-4 gap-8 p-4">
            <div className="text-center">
                <div
                    className="text-[2.2rem] leading-[38px] font-bold text-[#17b4d3]">{formatNumber(timeLeft.days)}</div>
                <div className="text-[0.7rem] text-gray-500">Days</div>
            </div>
            <div className="text-center">
                <div
                    className="text-[2.2rem] leading-[38px] font-bold text-[#17b4d3]">{formatNumber(timeLeft.hours)}</div>
                <div className="text-[0.7rem] text-gray-500">Hours</div>
            </div>
            <div className="text-center">
                <div
                    className="text-[2.2rem] leading-[38px] font-bold text-[#17b4d3]">{formatNumber(timeLeft.minutes)}</div>
                <div className="text-[0.7rem] text-gray-500">Minutes</div>
            </div>
            <div className="text-center">
                <div
                    className="text-[2.2rem] leading-[38px] font-bold text-[#17b4d3]">{formatNumber(timeLeft.seconds)}</div>
                <div className="text-[0.7rem] text-gray-500">Seconds</div>
            </div>
        </div>
    );
};

export default Timer;
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            id='timer-style-3'
                            text={'timer style 3'}
                        />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    timerStyle3Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    timerStyle3Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setTimerStyle3Preview, setTimeStyle3Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    timerStyle3Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setTimerStyle3Preview, setTimeStyle3Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {timerStyle3Preview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div className='w-full bg-blue-50 flex items-center justify-center py-12 rounded-md'>
                                    <div className='grid grid-cols-4 gap-[15px] mt-2'>
                                        <div
                                            className='py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] 640px:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col'>
                                            <h5 className='text-white text-[1.3rem] 640px:text-[1.9rem] pb-4 font-semibold'>{formatNumber(timeLeft.days)}</h5>
                                            <span
                                                className='absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md'>Days</span>
                                        </div>
                                        <div
                                            className='py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] 640px:px-[23px] shadow-xl bg-blue-500 relative  flex items-center justify-center flex-col'>
                                            <h5 className='text-white text-[1.3rem] 640px:text-[1.9rem] pb-4 font-semibold'>{formatNumber(timeLeft.hours)}</h5>
                                            <span
                                                className='absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md'>Hours</span>
                                        </div>
                                        <div
                                            className='py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] 640px:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col'>
                                            <h5 className='text-white text-[1.3rem] 640px:text-[1.9rem] pb-4 font-semibold'>{formatNumber(timeLeft.minutes)}</h5>
                                            <span
                                                className='absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md'>Minutes</span>
                                        </div>
                                        <div
                                            className='py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] 640px:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col'>
                                            <h5 className='text-white text-[1.3rem] 640px:text-[1.9rem] pb-4 font-semibold'>{formatNumber(timeLeft.seconds)}</h5>
                                            <span
                                                className='absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md'>Seconds</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {timerStyle3Code && (
                            <Showcode
                                code='
import React, {useEffect, useState} from "react";

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const targetDate = "2024-12-31T23:59:59"

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (number) => number.toString().padStart(2, "0");

    return (
        <div className="w-full bg-blue-50 flex items-center justify-center py-12 rounded-md">
            <div className="grid grid-cols-4 gap-[15px] mt-2">
                <div
                    className="py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] sm:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col">
                    <h5 className="text-white text-[1.3rem] sm:text-[1.9rem] pb-4 font-semibold">{formatNumber(timeLeft.days)}</h5>
                    <span
                        className="absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md">Days</span>
                </div>
                <div
                    className="py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] sm:px-[23px] shadow-xl bg-blue-500 relative  flex items-center justify-center flex-col">
                    <h5 className="text-white text-[1.3rem] sm:text-[1.9rem] pb-4 font-semibold">{formatNumber(timeLeft.hours)}</h5>
                    <span
                        className="absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md">Hours</span>
                </div>
                <div
                    className="py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] sm:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col">
                    <h5 className="text-white text-[1.3rem] sm:text-[1.9rem] pb-4 font-semibold">{formatNumber(timeLeft.minutes)}</h5>
                    <span
                        className="absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md">Minutes</span>
                </div>
                <div
                    className="py-3 pt-2.5 rounded-md rounded-b-xl px-[15px] sm:px-[23px] shadow-xl bg-blue-500 relative flex items-center justify-center flex-col">
                    <h5 className="text-white text-[1.3rem] sm:text-[1.9rem] pb-4 font-semibold">{formatNumber(timeLeft.seconds)}</h5>
                    <span
                        className="absolute bottom-0 z-20 text-[0.8rem] bg-white w-full text-center py-0.5 rounded-b-md">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default Timer;
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            id='timer-style-4'
                            text={'timer style 4'}
                        />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    timerStyle4Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    timerStyle4Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setTimerStyle4Preview, setTimeStyle4Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    timerStyle4Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setTimerStyle4Preview, setTimeStyle4Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {timerStyle4Preview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div className='bg-gradient-to-b from-[#4c468f] to-[#c65f72] w-full py-12 rounded-md'>
                                    <div className='flex items-start gap-[5px] 640px:gap-[15px] justify-center'>
                                        <div className='flex items-center justify-center flex-col gap-[0.5rem]'>
                                            <div className='flex items-center gap-[8px]'>
                                                <p className='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>{formatNumber(timeLeft.hours).slice(0, 1)}</p>
                                                <p className='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>{formatNumber(timeLeft.hours).slice(1, timeLeft.hours.length)}</p>
                                            </div>
                                            <span className='text-white font-normal text-[0.8rem] 640px:text-[0.9rem]'>Hours</span>
                                        </div>

                                        <span className='text-[2.3rem] text-white 640px:mt-1'>:</span>

                                        <div className='flex items-center justify-center flex-col gap-[0.5rem]'>
                                            <div className='flex items-center gap-[8px]'>
                                                <p className='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>{formatNumber(timeLeft.minutes).slice(0, 1)}</p>
                                                <p className='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>{formatNumber(timeLeft.minutes).slice(1, timeLeft.minutes.length)}</p>
                                            </div>
                                            <span className='text-white font-normal text-[0.8rem] 640px:text-[0.9rem]'>Minutes</span>
                                        </div>

                                        <span className='text-[2.3rem] text-white 640px:mt-1'>:</span>

                                        <div className='flex items-center justify-center flex-col gap-[0.5rem]'>
                                            <div className='flex items-center gap-[8px]'>
                                                <p className='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>{formatNumber(timeLeft.seconds).slice(0, 1)}</p>
                                                <p className='bg-white 640px:px-4 py-3 w-[35px] 640px:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] 640px:text-[2rem]'>{formatNumber(timeLeft.seconds).slice(1, timeLeft.seconds.length)}</p>
                                            </div>
                                            <span className='text-white font-normal text-[0.8rem] 640px:text-[0.9rem]'>Seconds</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {timerStyle4Code && (
                            <Showcode
                                code='
import React, {useEffect, useState} from "react";

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const targetDate = "2024-12-31T23:59:59"

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (number) => number.toString().padStart(2, "0");

    return (
        <div className="bg-gradient-to-b from-[#4c468f] to-[#c65f72] w-full py-12 rounded-md">
            <div className="flex items-start gap-[5px] sm:gap-[15px] justify-center">
                <div className="flex items-center justify-center flex-col gap-[0.5rem]">
                    <div className="flex items-center gap-[8px]">
                        <p className="bg-white sm:px-4 py-3 w-[35px] sm:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] sm:text-[2rem]">{formatNumber(timeLeft.hours).slice(0, 1)}</p>
                        <p className="bg-white sm:px-4 py-3 w-[35px] sm:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] sm:text-[2rem]">{formatNumber(timeLeft.hours).slice(1, timeLeft.hours.length)}</p>
                    </div>
                    <span className="text-white font-normal text-[0.8rem] sm:text-[0.9rem]">Hours</span>
                </div>

                <span className="text-[2.3rem] text-white sm:mt-1">:</span>

                <div className="flex items-center justify-center flex-col gap-[0.5rem]">
                    <div className="flex items-center gap-[8px]">
                        <p className="bg-white sm:px-4 py-3 w-[35px] sm:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] sm:text-[2rem]">{formatNumber(timeLeft.minutes).slice(0, 1)}</p>
                        <p className="bg-white sm:px-4 py-3 w-[35px] sm:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] sm:text-[2rem]">{formatNumber(timeLeft.minutes).slice(1, timeLeft.minutes.length)}</p>
                    </div>
                    <span className="text-white font-normal text-[0.8rem] sm:text-[0.9rem]">Minutes</span>
                </div>

                <span className="text-[2.3rem] text-white sm:mt-1">:</span>

                <div className="flex items-center justify-center flex-col gap-[0.5rem]">
                    <div className="flex items-center gap-[8px]">
                        <p className="bg-white sm:px-4 py-3 w-[35px] sm:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] sm:text-[2rem]">{formatNumber(timeLeft.seconds).slice(0, 1)}</p>
                        <p className="bg-white sm:px-4 py-3 w-[35px] sm:w-[50px] text-center rounded-sm text-gray-900 font-normal text-[1rem] sm:text-[2rem]">{formatNumber(timeLeft.seconds).slice(1, timeLeft.seconds.length)}</p>
                    </div>
                    <span className="text-white font-normal text-[0.8rem] sm:text-[0.9rem]">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default Timer;
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            id='timer-style-5'
                            text={'timer style 5'}
                        />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    timerStyle5Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    timerStyle5Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setTimerStyle5Preview, setTimeStyle5Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    timerStyle5Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setTimerStyle5Preview, setTimeStyle5Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {timerStyle5Preview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div className="flex items-end gap-[5px] p-4">
                                    <div className='flex items-end gap-[1px]'>
                                        <h4 className='text-[2.5rem] 640px:text-[3rem] leading-[45px] 640px:leading-[50px] font-semibold text-gray-900'>{formatNumber(timeLeft.days)}</h4>
                                        <span className='text-[1.3rem] font-semibold text-orange-500'>d</span>
                                    </div>
                                    <div className='flex items-end gap-[1px]'>
                                        <h4 className='text-[2.5rem] 640px:text-[3rem] leading-[45px] 640px:leading-[50px] font-semibold text-gray-900'>{formatNumber(timeLeft.hours)}</h4>
                                        <span className='text-[1.3rem] font-semibold text-orange-500'>h</span>
                                    </div>
                                    <div className='flex items-end gap-[1px]'>
                                        <h4 className='text-[2.5rem] 640px:text-[3rem] leading-[45px] 640px:leading-[50px] font-semibold text-gray-900'>{formatNumber(timeLeft.minutes)}</h4>
                                        <span className='text-[1.3rem] font-semibold text-orange-500'>m</span>
                                    </div>
                                    <p className='text-[1.3rem] font-semibold text-gray-900'>{formatNumber(timeLeft.seconds)}</p>
                                </div>
                            </div>
                        )}

                        {timerStyle5Code && (
                            <Showcode
                                code='
import React, {useEffect, useState} from "react";

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const targetDate = "2024-12-31T23:59:59"

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (number) => number.toString().padStart(2, "0");

    return (
        <div className="flex items-end gap-[5px] p-4">
            <div className="flex items-end gap-[1px]">
                <h4 className="text-[2.5rem] sm:text-[3rem] leading-[45px] sm:leading-[50px] font-semibold text-gray-900">{formatNumber(timeLeft.days)}</h4>
                <span className="text-[1.3rem] font-semibold text-orange-500">d</span>
            </div>
            <div className="flex items-end gap-[1px]">
                <h4 className="text-[2.5rem] sm:text-[3rem] leading-[45px] sm:leading-[50px] font-semibold text-gray-900">{formatNumber(timeLeft.hours)}</h4>
                <span className="text-[1.3rem] font-semibold text-orange-500">h</span>
            </div>
            <div className="flex items-end gap-[1px]">
                <h4 className="text-[2.5rem] sm:text-[3rem] leading-[45px] sm:leading-[50px] font-semibold text-gray-900">{formatNumber(timeLeft.minutes)}</h4>
                <span className="text-[1.3rem] font-semibold text-orange-500">m</span>
            </div>
            <p className="text-[1.3rem] font-semibold text-gray-900">{formatNumber(timeLeft.seconds)}</p>
        </div>
    );
};

export default Timer;
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            id='timer-style-6'
                            text={'timer style 6'}
                        />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        A timer lets you set a specific duration, and it counts down based on that duration, notifying you when the time is up.
                    </p>

                    <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                                    timerStyle6Preview
                                        ? 'translate-x-[0px] !w-[100px]'
                                        : 'translate-x-[107px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${
                                    timerStyle6Preview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setTimerStyle6Preview, setTimeStyle6Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    timerStyle6Code && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setTimerStyle6Preview, setTimeStyle6Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {timerStyle6Preview && (
                            <div className='p-8 mb-4 flex items-center gap-5 justify-center'>
                                <div className="flex flex-wrap justify-center items-center space-x-6 p-4">
                                    <CircleTimer value={timeLeft2.hours} type="hours"/>
                                    <CircleTimer value={timeLeft2.minutes} type="minutes"/>
                                    <CircleTimer value={timeLeft2.seconds} type="seconds"/>
                                </div>
                            </div>
                        )}

                        {timerStyle6Code && (
                            <Showcode
                                code='
import React, {useEffect, useState} from "react";

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        durations: {
            days: 365,
            hours: 24,
            minutes: 60,
            seconds: 60
        }
    });

    const targetDate = "2024-12-31T23:59:59"
    const size = 100

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                    durations: {
                        days: 365,
                        hours: 24,
                        minutes: 60,
                        seconds: 60
                    }
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, [targetDate]);

    const CircleTimer = ({ value, type }) => {
        const strokeWidth = 7;
        const radius = (size - strokeWidth) / 2;
        const circumference = radius * 2 * Math.PI;
        const progress = (value / timeLeft.durations[type]) * 100;
        const strokeDashoffset = circumference - (progress / 100) * circumference;

        return (
            <div className="relative" style={{ width: size, height: size }}>
                {/* Background Circle */}
                <svg className="absolute top-0 left-0" width={size} height={size}>
                    <circle
                        cx={size/2}
                        cy={size/2}
                        r={radius}
                        fill="transparent"
                        stroke="#e5e5e5"
                        strokeWidth={strokeWidth}
                    />
                </svg>

                {/* Progress Circle */}
                <svg className="absolute top-0 left-0" width={size} height={size}>
                    <circle
                        cx={size/2}
                        cy={size/2}
                        r={radius}
                        fill="transparent"
                        stroke="#17b4d3"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        style={{
                            transition: "stroke-dashoffset 1s linear",
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%"
                        }}
                    />
                </svg>

                {/* Time Display */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <div className="text-[1.2rem] font-semibold text-[#17b4d3]">{value}</div>
                    <div className="text-[0.6rem] text-gray-500">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-wrap justify-center items-center space-x-6 p-4">
            <CircleTimer value={timeLeft.hours} type="hours"/>
            <CircleTimer value={timeLeft.minutes} type="minutes"/>
            <CircleTimer value={timeLeft.seconds} type="seconds"/>
        </div>
    );
};

export default Timer;
                                '
                            />
                        )}
                    </div>

                    <OverviewFooter
                        backUrl='/components/chip'
                        backName='chip'
                        forwardName='breadcrumb'
                        forwardUrl='/components/breadcrumb'
                    />
                </div>

                <div className='1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]'>
                    <h2 className='text-[0.9rem] font-[600] text-text tracking-widest'>
                        CONTENTS
                    </h2>
                    {timerContents.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`${
                                activeSection === item.href.slice(1) &&
                                '!text-primary !border-primary'
                            } text-[0.9rem] capitalize transition-all duration-300 text-text border-l border-transparent pl-4`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </aside>

            <Helmet>
                <title>Navigation - Timer</title>
            </Helmet>
        </>
    );
};

export default Timer;