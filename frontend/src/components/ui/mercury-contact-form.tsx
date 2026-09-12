"use client";

import React, { useEffect, useMemo, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const MercuryContactForm: React.FC = () => {
    const [blobsData, setBlobsData] = React.useState<any[]>([]);

    useEffect(() => {
        setBlobsData(Array.from({ length: 5 }).map(() => ({
            size: Math.random() * 150 + 100,
            left: Math.random() * 80 + 10,
            top: Math.random() * 80 + 10,
            animationDelay: Math.random() * -20,
            animationDuration: Math.random() * 15 + 15,
        })));
    }, []);

    const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const formContainer = document.getElementById("mercury-contact-wrapper");
            if (!formContainer) return;
            const rect = formContainer.getBoundingClientRect();
            
            // Only calculate relative to form container to keep it contained
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            blobRefs.current.forEach((blob, index) => {
                if (blob) {
                    const speed = (index + 1) * 15;
                    blob.style.marginLeft = `${x * speed}px`;
                    blob.style.marginTop = `${y * speed}px`;
                }
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="mercury-wrapper" id="mercury-contact-wrapper">
            <style>{`
                :root {
                    --bg-form: transparent;
                    --mercury: #ff5800;
                    --accent: #ffffff;
                    --text-dim: rgba(255, 255, 255, 0.5);
                    --filter-goo: url('#gooey-contact');
                }

                .mercury-wrapper {
                    background-color: var(--bg-form);
                    color: var(--accent);
                    width: 100%;
                    height: 100%;
                    min-height: 500px;
                    border-radius: 2rem;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    border: 1px solid rgba(255,255,255,0.1);
                    background: #0a0a0a;
                }

                .mercury-wrapper * {
                    box-sizing: border-box;
                    -webkit-font-smoothing: antialiased;
                }

                /* Background Liquid Physics Simulation */
                .stage {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    filter: var(--filter-goo);
                    opacity: 0.2;
                    pointer-events: none;
                }

                .blob {
                    position: absolute;
                    background: linear-gradient(135deg, var(--mercury), #ff8a00);
                    border-radius: 50%;
                    filter: blur(15px);
                    animation: float 20s infinite alternate ease-in-out;
                    box-shadow: inset -10px -10px 20px rgba(0,0,0,0.5), 
                                10px 10px 30px rgba(255,88,0,0.2);
                    transition: margin 0.1s ease-out;
                }

                @keyframes float {
                    0% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(50px, 100px) scale(1.2); }
                    66% { transform: translate(-30px, 50px) scale(0.8); }
                    100% { transform: translate(40px, -50px) scale(1.1); }
                }

                /* Interface Container */
                .auth-container {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    padding: 40px;
                }

                .header {
                    margin-bottom: 40px;
                    text-align: left;
                }

                .brand-id {
                    font-size: 10px;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    color: var(--text-dim);
                    margin-bottom: 8px;
                    display: block;
                    font-family: monospace;
                }

                .header h3 {
                    font-weight: 700;
                    font-size: 2rem;
                    line-height: 1.1;
                    letter-spacing: -1px;
                    margin-top: 0;
                }

                /* Form Elements */
                .form-group {
                    position: relative;
                    margin-bottom: 24px;
                    transition: transform 0.4s cubic-bezier(0.2, 1, 0.3, 1);
                }

                .form-group:focus-within {
                    transform: translateX(5px);
                }

                .form-group label {
                    display: block;
                    font-size: 11px;
                    color: var(--text-dim);
                    margin-bottom: 8px;
                    text-transform: uppercase;
                    font-family: monospace;
                    letter-spacing: 1px;
                }

                .form-group input, .form-group textarea {
                    width: 100%;
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    color: var(--accent);
                    padding: 10px 0;
                    font-size: 16px;
                    outline: none;
                    transition: border-color 0.4s;
                    resize: none;
                }

                .form-group input::placeholder, .form-group textarea::placeholder {
                    color: rgba(255, 255, 255, 0.2);
                }

                .input-glow {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background: var(--mercury);
                    transition: width 0.6s cubic-bezier(0.2, 1, 0.3, 1);
                    box-shadow: 0 0 10px var(--mercury);
                }

                .form-group input:focus + .input-glow, .form-group textarea:focus + .input-glow {
                    width: 100%;
                }

                /* The Mercury Button */
                .submit-wrap {
                    margin-top: 40px;
                    position: relative;
                    filter: var(--filter-goo);
                    width: 100%;
                }

                .btn-base {
                    background: var(--accent);
                    color: #000;
                    border: none;
                    padding: 16px 30px;
                    font-size: 14px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    cursor: pointer;
                    width: 100%;
                    position: relative;
                    z-index: 2;
                    transition: letter-spacing 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    border-radius: 8px;
                }

                .btn-base:hover {
                    letter-spacing: 4px;
                }

                .mercury-drop {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    height: 100%;
                    background: var(--mercury);
                    transform: translate(-50%, -50%);
                    z-index: 1;
                    border-radius: 50px;
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .submit-wrap:hover .mercury-drop {
                    transform: translate(-50%, -50%) scale(1.02, 1.1);
                    filter: brightness(1.2);
                }

                .svg-filter-hidden {
                    position: absolute;
                    width: 0;
                    height: 0;
                }
            `}</style>

            <svg className="svg-filter-hidden">
                <defs>
                    <filter id="gooey-contact">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix 
                            in="blur" 
                            mode="matrix" 
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" 
                            result="goo" 
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
            </svg>

            <div className="stage" id="stage">
                {blobsData.map((data, index) => (
                    <div
                        key={index}
                        ref={(el) => { blobRefs.current[index] = el; }}
                        className="blob"
                        style={{
                            width: `${data.size}px`,
                            height: `${data.size}px`,
                            left: `${data.left}%`,
                            top: `${data.top}%`,
                            animationDelay: `${data.animationDelay}s`,
                            animationDuration: `${data.animationDuration}s`,
                        }}
                    />
                ))}
            </div>

            <main className="auth-container">
                <header className="header">
                    <span className="brand-id">System Node: 0x992</span>
                    <h3>Send a Message</h3>
                </header>

                <form action="https://api.web3forms.com/submit" method="POST" autoComplete="off">
                    <input type="hidden" name="access_key" value="ec747eb6-7916-4048-8c19-df2450da63f2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" placeholder="John Doe" required />
                            <div className="input-glow"></div>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="john@example.com" required />
                            <div className="input-glow"></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Your Message</label>
                        <textarea name="message" placeholder="How can we help you?" rows={3} required></textarea>
                        <div className="input-glow"></div>
                    </div>

                    <div className="submit-wrap">
                        <div className="mercury-drop"></div>
                        <button type="submit" className="btn-base">
                            Initialize Stream
                            <Send size={16} />
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default MercuryContactForm;
