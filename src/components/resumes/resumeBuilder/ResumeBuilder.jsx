import React, { useState, useRef } from 'react';
import Resume6 from './../Resume6';

export default function ResumeBuilder() {
    const [formData, setFormData] = useState({
        jobTitle: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
    });
    const containerRef = useRef(null);
    const [leftWidth, setLeftWidth] = useState(50);
    const isResizingRef = useRef(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleMouseDown = () => {
        isResizingRef.current = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (!isResizingRef.current || !containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        let newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
        if (newLeftWidth < 10) newLeftWidth = 10;
        if (newLeftWidth > 90) newLeftWidth = 90;
        setLeftWidth(newLeftWidth);
    };

    const handleMouseUp = () => {
        isResizingRef.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <div ref={containerRef} className="flex h-screen">
            <div style={{ flexBasis: `${leftWidth}%` }} className="p-6 overflow-auto">
                <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded w-full p-2"
                        placeholder="user@example.com"
                    />
                </div>
            </div>
            <div
                className="bg-gray-300 w-1 h-full cursor-ew-resize"
                onMouseDown={handleMouseDown}
            ></div>
            <div style={{ flexBasis: `${100 - leftWidth}%` }} className="p-6 bg-[#656E83] border-l border-gray-300 h-screen max-h-screen overflow-auto">
                <h2 className="text-2xl font-bold mb-4">Preview</h2>
                <div className='shadow-2xl'>
                    <Resume6 />
                </div>
            </div>
        </div>
    );
}