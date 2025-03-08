import React, { useState, useEffect } from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    usePDF,
    Font, // <-- import Font
} from '@react-pdf/renderer';

// 1) Register the .ttf font with 'truetype' format
Font.register({
    family: 'NotoSans',
    src: 'https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr4w.ttf',
    format: 'truetype',
});

const pdfStyles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        flexDirection: 'column',
        fontFamily: 'NotoSans', // <-- apply the font
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
    },
    textRow: {
        marginBottom: 5,
    },
});

function MyDocument({ data }) {
    return (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                <View>
                    <Text style={pdfStyles.title}>
                        {data.firstName} {data.lastName}
                    </Text>
                    <Text style={pdfStyles.textRow}>{data.jobTitle}</Text>
                    <Text style={pdfStyles.textRow}>Email: {data.email}</Text>
                    <Text style={pdfStyles.textRow}>Phone: {data.phone}</Text>
                    <Text style={pdfStyles.textRow}>Location: {data.location}</Text>
                </View>
            </Page>
        </Document>
    );
}

export default function ResumeBuilder() {
    const [formData, setFormData] = useState({
        jobTitle: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
    });

    const [debouncedData, setDebouncedData] = useState(formData);

    // Debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedData(formData);
        }, 400);
        return () => clearTimeout(timer);
    }, [formData]);

    // Generate PDF from MyDocument
    const [instance] = usePDF({
        document: <MyDocument data={debouncedData} />,
    });

    const [pdfUrl, setPdfUrl] = useState(null);

    // Update pdfUrl once PDF is ready
    useEffect(() => {
        if (!instance.loading && !instance.error && instance.url) {
            setPdfUrl(instance.url);
        }
    }, [instance]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 p-6 overflow-auto">
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

            <div className="w-1/2 p-6 bg-gray-100 border-l border-gray-300">
                <h2 className="text-2xl font-bold mb-4">Preview</h2>
            </div>
        </div>
    );
}
